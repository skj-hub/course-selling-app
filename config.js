require("dotenv").config();

const JWT_ADMIN_PASSWORD = process.env.JWT_ADMIN_TOKEN;
const JWT_USER_PASSWORD = process.env.JWT_USER_TOKEN;

module.exports = {
    JWT_ADMIN_PASSWORD,
    JWT_USER_PASSWORD
}