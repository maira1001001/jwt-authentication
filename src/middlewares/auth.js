import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export function authenticateUser(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader.split(' ').pop();
  jwt.verify(token, process.env.ACCESS_TOKEN, (err, user) => {
    if (err) return res.status(403).json({ message: 'Session expired' });
    req.user = user;
    next();
  });
}
