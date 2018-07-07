const path = require('path');
const express = require('express');
const axios = require('axios');
require('dotenv').config({path: '.env.production'});

const app = new express();
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;
const blogId = process.env.BLOG_ID;
const bloggerApi = process.env.BLOGGER_API;
const bloggerApiKey = process.env.BLOGGER_API_KEY;
const getAllPostsUrl = `${bloggerApi}/blogs/${blogId}/posts?key=${bloggerApiKey}`;  // >2sek.
const getAllPostsUrlWith = `${bloggerApi}/blogs/${blogId}/posts?key=${bloggerApiKey}&fetchImages=true`;  // 1.8sek
const getAllPostsUrlPartial = `${bloggerApi}/blogs/${blogId}/posts?key=${bloggerApiKey}&maxResults=500&fetchImages=true&fields=items(id,content,labels,published,title,url,images)`;  // sek
const getAllPagesUrlPartial = `${bloggerApi}/blogs/${blogId}/pages?key=${bloggerApiKey}&fields=items(id,content,published,title)`;  // sek

const myPocketLifeRoute = `${bloggerApi}/blogs/byurl?url=http://my-pocket-life.blogspot.com/&key=${bloggerApiKey}`;

app.use(express.static(publicPath));

app.post('/test', (req, res, next) => {
  console.log('post test route');
});

app.post('/api/get-all-posts', (req, res, next) => {
  axios.get(getAllPostsUrlPartial).then(response => {
    const contentLenght = 140;
    let re = RegExp('>((.|\n)*?)<','gm');
    let myArray;
    response.data.items.forEach(element => {
        let content = "";
        while((myArray = re.exec(element.content)) !== null ){
          if(myArray[1].length>0 && myArray[1] !== '\n'){
            const withoutNewlines = myArray[1].split("\n").join('');  // delete newlines symbols
            const withoutNewlinesWithNormalSpaces = withoutNewlines.split("&nbsp;").join(' ');  // exchange nbsp with space
            content += content ? (" " + withoutNewlinesWithNormalSpaces) : withoutNewlinesWithNormalSpaces;
          };
        };
        // First cut max lenght of short post description 
        // then find last whole word by finding last space
        // add ellipsis at the end
        const postShortDescription = content.substr(0, contentLenght);
        element.contentHTML = element.content;
        element.content = content;
        element.contentShort = postShortDescription.substr(0, postShortDescription.lastIndexOf(" ")) + "...";
        element.image = element.images[0].url;
    });
    res.send(response.data);
  });
});

app.get('/api/get-all-pages', (req, res, next) => {
  axios.get(getAllPagesUrlPartial).then(response => {
    let reContent = RegExp('>((.|\n)*?)<','gm');
    let reImg = RegExp('src="(.*?)"', 'gm');
    response.data.items.forEach(page => {
      let image = '';
      let content = '';
      let reResult;
      while((reResult = reContent.exec(page.content)) !== null) {
        if (reResult[1].length > 0 && reResult[1] !== '\n') {
          const withoutNewlines = reResult[1].split("\n").join('');
          const withoutNewlinesWithNormalSpaces = withoutNewlines.split("&nbsp;").join(' ');
          content += content ? (" " + withoutNewlinesWithNormalSpaces) : withoutNewlinesWithNormalSpaces;          
        }
      };
      while((reResult = reImg.exec(page.content)) !== null) {
        image = reResult[1];
      };
      page.image = image;
      page.contentHTML = page.content;
      page.content = content;
    });
    res.send(response.data);
  }).catch(err => {
    console.log(err);
  });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
  console.log('server is workingo on port no: ', port);
  console.log('act time: ', new Date());
});
