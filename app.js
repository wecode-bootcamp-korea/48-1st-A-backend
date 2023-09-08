require('dotenv').config();

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const { AppDataSource } = require('./src/models/dataSource');
const { routes } = require('./src/routes');

const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());
app.use(morgan('combined'));

app.use(routes);
const app = express();

app.use(routes);

app.get('/ping', (req, res) => {
  res.status(200).json({ message: 'pong' });
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

const startServer = async () => {
  const PORT = process.env.PORT;

  await AppDataSource.initialize();

  app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`);
  });
};

startServer();
