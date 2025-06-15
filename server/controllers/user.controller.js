import { User } from "../models/user.model.js";
import bcrypt from "bcrypt";

//user register
export const userRegister = async (req, res) => {
  const { fullname, email, number, password } = req.body;

  if (!fullname || !email || !number || !password)
    return res.status(401).json({ errors: "All fields are required" });

  try {
    if (await User.findOne({ email }))
      return res.status(401).json({ errors: "User already exist" });

    const hashPassword = await bcrypt.hash(password, 10);
    const userData = {
      fullname,
      email,
      number,
      password: hashPassword,
    };
    const user = await User.create(userData);
    return res
      .status(200)
      .json({ message: "User Register successfully", user });
  } catch (error) {
    console.log(error);
    res.status(401).json({ errors: "user create in error" });
  }
};
