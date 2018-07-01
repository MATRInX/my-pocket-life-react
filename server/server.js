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
const getAllPostsUrlPartial = `${bloggerApi}/blogs/${blogId}/posts?key=${bloggerApiKey}&fetchImages=true&fields=items(id,content,labels,published,title,url,images)`;  // sek

const myPocketLifeRoute = `${bloggerApi}/blogs/byurl?url=http://my-pocket-life.blogspot.com/&key=${bloggerApiKey}`;

app.use(express.static(publicPath));

app.post('/test', (req, res, next) => {
  console.log('post test route');
});

app.get('/api/get-all-posts', (req, res, next) => {
  axios.get(getAllPostsUrlPartial).then(response => {
<<<<<<< HEAD
    console.log('get-all-posts');
    let re = RegExp('>((.|\n)*?)<','gm'); //(.|\n)*?
    let myArray;
    //console.log(response.data.items);
    response.data.items.forEach((element, index) => {
      //if(index === 2) {      
        //console.log('content:', element.title);
        let testString = element.content;
        //console.log(testString);
        //element.content = "";
        //response.data.items[index].content = "";
        let content = "";
        while((myArray = re.exec(element.content)) !== null ){
          if(myArray[1].length>0 && myArray[1] !== '\n'){
            //myArray[1].replace('\n', '');
            //let str = JSON.parse(JSON.stringify(myArray[1]));
            //str.replace(/\n/g, "");
            //let temp = str.split("\n").join('');
            let temp2 = myArray[1].split("\n").join('');// OK
            let temp3 = temp2.split("&nbsp;").join(' ');
            //temp2.replace(/&nbsp;/gm, " ");
            content += content ? (" " + temp3) : temp3;
            //console.log(temp2);
            //console.log(`Found:|${myArray[1]}| at position: ${re.lastIndex}`);
          }
          //console.log(myArray.input);
          //element.content += myArray[0];
        };        
        console.log(content);
        element.content = content;
      //}
      //console.log(response.data.items[index].content);
      //console.log('end-content:', element.content);
    });
=======
>>>>>>> a04494fb5c5c42cada8d72de39d4af43e139acbd
    res.send(response.data);
  });
});

app.get('/test', (req, res, next) => {
  //console.log('axios testing has started right now', new Date());
  axios.get(myPocketLifeRoute).then(response => {
    //console.log('inside axios promise', new Date());
    res.send(response.data);
  }).catch(err => {
    console.log(err);
  });
  //console.log('after promise in test route', new Date());
});



// app.get('/test', async (req, res, next) => {
//   console.log('start of test route', new Date());
//   const response = await axios.get(myPocketLifeRoute);
//   console.log('I have data from axios', new Date());
//   const {name, url} = response.data;
//   const myResponse = {name, url};
//   res.send(myResponse);
//   console.log('end of test route', new Date());
// });

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
  console.log('server is workingo on port no: ', port);
  console.log('act time: ', new Date());
});
