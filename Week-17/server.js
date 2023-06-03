const http = require('http');
const url = require('url');
const axios = require('axios');

const port = 4000;

const server = http.createServer((req, res) => {
  const reqUrl = url.parse(req.url, true);

  if (reqUrl.pathname === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Welcome to the Weather App!');
  } else if (reqUrl.pathname === '/weather') {
    // const city = reqUrl.query.city;
    const city = "Delhi"
    const apiKey = '530632ec76ea236e2b991d90c1290da6';

    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
      .then(response => {
        const weatherData = response.data;
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        let temp = weatherData.main.temp;
        let maxTemp = weatherData.main.temp;
        let minTemp = weatherData.main.temp;

        res.end(JSON.stringify(weatherData));
      })
      .catch(error => {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ error: 'An error occurred' }));
      });
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Not found');
  }
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
