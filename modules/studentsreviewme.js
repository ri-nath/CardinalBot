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

    const numReviewsQuery = `
        query($name: String!) {
            findManyReview(
                filter: {
                    teacher: $name
                }
            ) {
                rating
            }
        }
    `;

    const numReviewsVariables = { name: teacherData.findOneTeacher.name };
    const numReviewsData = await request('https://api.studentsreview.me', numReviewsQuery, numReviewsVariables);

    const reviewQuery = `
        query($name: String!, $skip: Int!) {
            findManyReview(
                filter: {
                    teacher: $name
                }
                skip: $skip
                limit: 1
            ) {
                text
            }
        }
    `;

    const reviewVariables = { name: teacherData.findOneTeacher.name, skip: Math.floor(Math.random() * numReviewsData.findManyReview.length) };
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
