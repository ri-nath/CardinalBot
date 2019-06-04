const { request } = require('graphql-request');
const slugify = require('slugify');

const getTeacher = async search => {
    const teacherQuery = `
        query($search: String!) {
            findOneTeacher(
                filter: {
                    search: $search
                }
            ) {
                name
                rating
            }
        }
    `;

    const teacherVariables = { search };

    const teacherData = await request('https://api.studentsreview.me', teacherQuery, teacherVariables);

    const reviewQuery = `
        query($name: String!) {
            findManyReview(
                filter: {
                    teacher: $name
                }
                sort: TIMESTAMP_DESC
                limit: 1
            ) {
                text
            }
        }
    `;

    const reviewVariables = { name: teacherData.findOneTeacher.name };

    const reviewData = await request('https://api.studentsreview.me', reviewQuery, reviewVariables);

    const rating = teacherData.findOneTeacher.rating.toFixed(1);
    const text = reviewData.findManyReview[0].text;
    const name = teacherData.findOneTeacher.name;
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
