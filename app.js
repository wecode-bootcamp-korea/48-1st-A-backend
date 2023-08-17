require('dotenv').config();

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const { AppDataSource } = require('./src/models/dataSource');
const { routes } = require('./src/routes');

const PORT = process.env.PORT;
const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('combined'));

app.use(routes);

app.get('/ping', (req, res) => {
  res.json({ message: 'pong' });
});

app.listen(PORT, async () => {
  await AppDataSource.initialize()
    .then(() => {
      console.log('Data Source has been initialize!');
    })
    .catch((error) => {
      console.error('Error during Data Source initialize', error);
    });
  console.log(`Listening to request on port: ${PORT}`);
});
