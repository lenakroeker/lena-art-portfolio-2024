const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
dotenv.config();

const adminUsername = process.env.ADMIN_USERNAME;
const hashedAdminPassword = process.env.ADMIN_PASSWORD;
const decodedPassword = decodeURIComponent(hashedAdminPassword);

const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const isUsernameMatch = username === adminUsername;
    const isPasswordMatch = await bcrypt.compare(password, decodedPassword);

    // Check if the provided username and password match the admin credentials
    if (isUsernameMatch && isPasswordMatch) {
      // If credentials match, generate and send access token
      const accessToken = jwt.sign(
        { username: adminUsername },
        process.env.ACCESS_TOKEN_SECRET
      );

      return res.status(200).json({ accessToken });
    } else {
      // If credentials don't match, return error
      return res.status(401).json({ message: "Invalid username or password" });
    }
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { login };
