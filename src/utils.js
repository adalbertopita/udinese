const cheerio = require('cheerio');

const getUrlInfo = (data) => { 
  const $ = cheerio.load(data);
  const title = $('meta[property="og:title"]').attr('content');
  const description = $('meta[property="og:description"]').attr('content');
  const image = $('meta[property="og:image"]').attr('content');
  const image_alt = $('meta[property="og:image_alt"]').attr('content');
  const url = $('meta[property="og:url"]').attr('content');

  console.log(image);

  return { 
    title, 
    description, 
    image,
    image_alt,
    url
  };
}

module.exports = { getUrlInfo };