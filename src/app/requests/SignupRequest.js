import { check } from "express-validator";
import { Request } from "../middlewares/Request.js";

export const SignupRequest = [
  check("firstName").notEmpty().withMessage("First name is required."),
  check("lastName").notEmpty().withMessage("Last name is required."),
  check("email")
    .notEmpty()
    .withMessage("Email is required.")
    .isEmail()
    .withMessage("Email should be valid"),
  check("password").notEmpty().withMessage("Password is required."),
  check("NIDNumber").notEmpty().withMessage("NIDNumber is required."),
  check("phoneNumber").notEmpty().withMessage("Phone number is required."),
  check("bloodGroup").notEmpty().withMessage("Blood group is required."),

  Request.validator,
];
export const LoginRequest = [
  check("email")
    .notEmpty()
    .withMessage("Email is required.")
    .isEmail()
    .withMessage("Email should be valid"),
  check("password").notEmpty().withMessage("Password is required."),

  Request.validator,
];
