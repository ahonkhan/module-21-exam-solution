import { User } from "../models/User.js";
import Token from "../utils/Token.js";

export const Auth = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) {
    return res
      .status(401)
      .json({ message: "Access token missing", status: false });
  }

  const decodedToken = Token.decode(token);

  if (decodedToken) {
    const checkUser = await User.findById(decodedToken?._id);
    if (!checkUser) {
      return res.status(403).json({ message: "Unauthorized", status: false });
    }
    req.user = checkUser;
    req.token = token;
    next();
  } else {
    return res.status(403).json({ message: "Invalid token", status: false });
  }
};
