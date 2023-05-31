const axios = require("axios");
const cheerio = require("cheerio"); // html 파싱 (jquery)

  const getHTML = async (keyword) => {
  try {
    return await axios.get('https://www.inflearn.com/courses?s=' + encodeURI(keyword));
  } catch (error) {
    console.error(error);
  }
}

const parsing = async (keyword) => {
  const html = await getHTML(keyword);
  // console.log(html)
  const $ = cheerio.load(html.data);
  const $cousrseList  = $(".course_card_item");

  let courses = [];
  $cousrseList.each((idx, node) => {
    const title = $(node).find('.course_title').text();
    courses.push(
      {
        title:  $(node).find('.course_title:eq(0)').text(),
        instructor:  $(node).find('.instructor').text(),
        price:  $(node).find('.price').text(),
        rating:  $(node).find('.star_solid').css("width"), // width에 따라 별이 보임
        img:  $(node).find('.card-image > figure > img').attr('src'),
      }
    )
  })
  console.log(courses)
}
parsing("자바스크립트");