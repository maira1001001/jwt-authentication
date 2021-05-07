import * as jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const newJwtAccessToken = (payload) => {
  return jwt.sign(payload, process.env.ACCESS_TOKEN, {
    expiresIn: process.env.EXPIRES_IN,
  });
};

export async function login(req, res, next) {
  const { user } = req.body;
  if (!user) res.status(404).json({ message: '"user" is required', code: 1 });
  const token = newJwtAccessToken({ user });
  res.json({ access_token: token });
}

export async function logout(req, res, next) {}
