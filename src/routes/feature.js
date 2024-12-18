import { Router } from "express";
import FeaturesController from "../app/controllers/FeaturesController.js";
const feature = Router();

feature.post("/token/encode", FeaturesController.TokenEncode);
feature.post("/token/decode", FeaturesController.TokenDecode);
feature.post("/hash/make", FeaturesController.HashPassword);
feature.post("/hash/check", FeaturesController.CheckPassword);
export default feature;
