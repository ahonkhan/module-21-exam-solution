import jwt from "jsonwebtoken";
import { JWT_EXPIRE_TIME, JWT_SECRET } from "../config/config.js";

class Token {
  static encode = (PAYLOAD) => {
    const SECRET = JWT_SECRET;
    const EXPIRES = JWT_EXPIRE_TIME;
    return jwt.sign(PAYLOAD, SECRET, {
      expiresIn: EXPIRES,
    });
  };
  static decode = (token) => {
    const SECRET = JWT_SECRET;
    try {
      return jwt.verify(token, SECRET);
    } catch (err) {
      return false;
    }
  };
}

export default Token;
