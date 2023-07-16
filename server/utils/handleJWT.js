const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = {
    verifyToken(token) {
        try {
            return jwt.verify(token, process.env.JWT_SECRET_WORD)
        } catch (error) {
            console.error(error)
        }
    }
}