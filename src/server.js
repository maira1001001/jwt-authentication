import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

import routes from './routes';

import * as packageJson from '../package.json';

const { name, version } = packageJson;

const app = express();

app.use(express.json());

app.get('/healthcheck', (req, res, next) => {
  try {
    res.send({ status: 'healthy', name, version, uptime: process.uptime() });
  } catch (err) {
    next(err);
  }
});

app.use(routes);

app.listen(process.env.PUBLIC_PORT, () => {
  console.log(
    `${name}@${version} - Port: ${
      process.env.PUBLIC_PORT
    } - Start date: ${new Date()}`
  );
});

export const start = () => app;
