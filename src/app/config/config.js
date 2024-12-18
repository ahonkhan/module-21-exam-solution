import dotenv from "dotenv";
dotenv.config("../../../.env");
export const PORT = 8080;
export const MAX_JSON_SIZE = "50mb";
export const URL_ENCODED = true;
export const RATE_LIMIT_TIME = 15 * 60 * 1000;
export const RATE_LIMIT_NUMBER = 3000; //per 15 minutes 3000 requests allowed
export const WEB_CACHE = true;
export const MONGODB_CONN = process.env.MONGODB_CONN;
export const JWT_SECRET = process.env.JWT_SECRET;
export const JWT_EXPIRE_TIME = process.env.JWT_EXPIRE_TIME;
