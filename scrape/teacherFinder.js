const rp = require('request-promise');
const $ = require('cheerio');
const url = 'https://www.ratemyteachers.com/lowell-high-school/3519-s/';
var teachers = {};
var ratings = {};
var comments = {};
var teachersPrimitive = [[]];

function updateList(page) {
  rp(url + page)
    .then(function(html){
      teachers = ($('div.teacher > div.info > h3.teacher_name > a.name', html));
      ratings = ($('div.teacher > div.score > div.rateit', html));
      comments = ($('div.teacher > div.comments', html));
      for (var i=0; i<teachers.length; i++) {
          if((comments[i]['children'][1]['attribs']['class']).includes('comment_extract')){
            comment_string = comments[i]['children'][1]['children'][0]['data'];
          } else {
            comment_string = "This teacher doesn't have a review.";
          }
          teachersPrimitive[i + (page - 1) * 100] = [String(teachers[i]['children'][0]['data']), String(ratings[i]['attribs']['title']), comment_string, String(`https://www.ratemyteachers.com${teachers[i]['attribs']['href']}`)];
      }
      console.log("scoop")
    })
    .catch(function(err){
      console.log(err);
    });
}

function searchList(name) {
  for (var i = 0; i < teachersPrimitive.length; i++) {
    if ((teachersPrimitive[i][0].toLowerCase()).includes(name.toLowerCase())) {
      return teachersPrimitive[i]
    }
  }

  return -1;
}

for (var i = 0; i < 4; i ++) updateList(i + 1);

module.exports = {updateList: updateList, searchList: searchList, teachersPrimitive: teachersPrimitive};
