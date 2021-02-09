const jwt = require("jsonwebtoken");
const Users = require("../models/users");

const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization');
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await Users.findOne({ _id: decoded.user });
        
        if(!user) {
            throw new Error();
        }

        req.user = user;

        next();
    } catch (e) {
        res.status(401).send();
    }
}

module.exports = auth;