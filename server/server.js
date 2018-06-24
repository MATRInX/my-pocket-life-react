const path = require('path');
const express = require('express');
const axios = require('axios');

const app = new express();
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;

const myPocketLifeRoute = 'https://www.googleapis.com/blogger/v3/blogs/byurl?url=http://my-pocket-life.blogspot.com/&key=AIzaSyAqsWfjmQ-FXIQzlprNEeCToddOx7I2aEI';

app.use(express.static(publicPath));

app.post('/test', (req, res, next) => {
  console.log('post test route');
});

app.get('/test', (req, res, next) => {
  console.log('axios testing has started', new Date());
  axios.get(myPocketLifeRoute).then(response => {
    console.log('inside axios promise', new Date());
    res.send(response.data);
  }).catch(err => {
    console.log(err);
  });
  console.log('after promise in test route', new Date());
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
