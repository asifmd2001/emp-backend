// run `node index.js` in the terminal
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import http from 'http';

import routes from './routes/emp.js';

const app = express();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  cors({
    allowedHeaders: ['Content-Type'], // headers that React is sending to the API
    exposedHeaders: ['Content-Type'], // headers that you are sending back to React
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
  })
);

app.use('/emp', routes);
const CONNECTION_URL =
  'mongodb+srv://android17:123123123@employee.emcaa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const PORT = process.env.PORT || 5000;

app.use('/', (req, res) => {
  res.json('API');
});

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(console.log('mongodb connected'))
  .catch((error) => console.log(error));

try {
  let server = http.createServer(app);
  server.listen(PORT);
  console.log('server connect to port 5000');
} catch (error) {
  console.log(error);
}
