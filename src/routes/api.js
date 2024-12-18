import { Router } from "express";
import feature from "./feature.js";
const route = Router();

route.use("/features", feature);
export default route;
