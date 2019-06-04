const { request } = require('graphql-request');
const slugify = require('slugify');

const getTeacher = async search => {
    const teacherQuery = `
        query {
            findManyTeacher {
                name
            }
        }
    `;

    const teacherData = await request('https://api.studentsreview.me', teacherQuery);
    const match = teacherData.findManyTeacher.find(teacher => teacher.name.toLowerCase().includes(search.toLowerCase())).name;
    const reviewQuery = `
        query($name: String!) {
            findManyReview(filter: {
                teacher: $name
            }) {
                rating
                text
                timestamp
            }
        }
    `;
    const variables = {
        name: match
    };

    const reviewData = await request('https://api.studentsreview.me', reviewQuery, variables);
    const rating = (reviewData.findManyReview.reduce((acc, cur) => acc + cur.rating, 0) / reviewData.findManyReview.length).toFixed(1);
    const text = reviewData.findManyReview.sort((a, b) => +new Date(b.timestamp) - +new Date(a.timestamp))[0].text;
    const name = match;
    const link = `https://studentsreview.me/teachers/${ slugify(name, { lower: true }) }`;
    return {
        name,
        link,
        rating,
        text
    };
};

module.exports = {
    getTeacher: (search, callback) => {
        getTeacher(search)
            .then(callback);
    }
};
