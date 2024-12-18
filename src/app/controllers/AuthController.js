import { User } from "../models/User.js";
import Hash from "../utils/Hash.js";
import Token from "../utils/Token.js";

class AuthController {
  static signup = async (req, res) => {
    try {
      const {
        email,
        password,
        firstName,
        lastName,
        NIDNumber,
        phoneNumber,
        bloodGroup,
      } = req.body;

      const oldUser = await User.findOne({ email: email });
      if (oldUser) {
        return res.status(409).json({ message: "User already registered" });
      }

      const hashedPassword = await Hash.make(password);
      const user = new User({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: hashedPassword,
        NIDNumber: NIDNumber,
        phoneNumber: phoneNumber,
        bloodGroup: bloodGroup,
      });

      await user.save();

      const token = Token.encode(user.toObject());

      return res.status(201).json({
        message: "Registration succesfull",
        status: true,
        user: user,
        access_token: token,
      });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Server error", error: "server error" });
    }
  };

  static login = async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email: email }).select("+password");
      if (!user) {
        return res.status(404).json({ message: "User is not registered" });
      }

      // check user password
      const compare = await Hash.check(password, user.password);
      if (!compare) {
        return res.status(409).json({ message: "Wrong password" });
      }

      const token = Token.encode(user.toObject());

      return res.status(200).json({
        message: "Login succesfull",
        status: true,
        user: user,
        access_token: token,
      });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Server error", error: error.message });
    }
  };
}

export default AuthController;
