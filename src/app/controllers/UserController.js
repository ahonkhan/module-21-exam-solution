import { User } from "../models/User.js";

export class UserController {
  static getSingleUser = async (req, res) => {
    const { user_id } = req.params;
    const user = await User.findById(user_id);
    if (user) {
      return res.status(200).json({ status: true, user: user });
    } else {
      return res.status(404).json({ status: false, message: "User not found" });
    }
  };
  static getAllUser = async (req, res) => {
    const users = await User.find();
    return res.status(200).json({ status: true, users: users });
  };
  static updateUser = async (req, res) => {
    const { firstName, lastName, phoneNumber, NIDNumber, bloodGroup } =
      req.body;

    const { user_id } = req.params;
    const user = await User.findById(user_id);

    if (!user) {
      return res.status(404).json({ message: "No user found" });
    }

    if (firstName) user.firstName = firstName;
    if (lastName) user.lastName = lastName;
    if (phoneNumber) user.phoneNumber = phoneNumber;
    if (NIDNumber) user.NIDNumber = NIDNumber;
    if (bloodGroup) user.bloodGroup = bloodGroup;

    await user.save();
    return res
      .status(200)
      .json({ status: true, user: user, message: "User updated" });
  };

  static deleteUser = async (req, res) => {
    const { user_id } = req.params;
    try {
      const user = await User.findOneAndDelete(user_id);
      return res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
      console.log(error);
    }
  };
}
