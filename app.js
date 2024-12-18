import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import hpp from "hpp";
import dotenv from "dotenv";
import fileUpload from "express-fileupload";
dotenv.config("./.env");
import {
  MAX_JSON_SIZE,
  MONGODB_CONN,
  PORT,
  RATE_LIMIT_NUMBER,
  RATE_LIMIT_TIME,
  URL_ENCODED,
  WEB_CACHE,
} from "./src/app/config/config.js";
import route from "./src/routes/api.js";
import mongoose from "mongoose";
const app = express();
// GLOBAL APPLICATION MIDDLEWARES
app.use(cors());
app.use(express.json({ limit: MAX_JSON_SIZE }));
app.use(express.urlencoded({ extended: URL_ENCODED }));
app.use(hpp());
app.use(helmet());
app.use(cookieParser());
// RATE LIMITER
const limit = rateLimit({ windowMs: RATE_LIMIT_TIME, max: RATE_LIMIT_NUMBER });
app.use(limit);
// SET WEB CACHING
app.set("etag", WEB_CACHE);
app.use(
  fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 },
  })
);
app.use("/static", express.static("storage"));

app.use("/api", route);

// MONGODB CONNECTION

mongoose
  .connect(MONGODB_CONN, { autoIndex: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log("app is listening on port: ", PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
