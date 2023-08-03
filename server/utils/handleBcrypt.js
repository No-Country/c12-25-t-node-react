const bcrypt = require("bcrypt");
require("dotenv").config();

module.exports = {
    compare(password, hashPassword) {
        try {
            return bcrypt.compare(password, hashPassword)
        } catch (error) {
            console.error(error)
        }
    }
}