const expressAsyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const User = require("../model/User");

const authMiddleware = expressAsyncHandler(async (req, res, next) => {
    let token;
    if (req?.headers?.authorization?.startsWith("Bearer")) {
        token = req.headers.authorization.split(" ")[1];
        // console.log(token)
        try {
            if (token) {
                const decoded = jwt.verify(token, process.env.JWT_KEY);
                // console.log(decoded)
                const user = await User.findById(decoded?.id);
                req.user = user;
                next();
            }
        } catch (error) {
            throw new Error("Not authorized: token expired, please login again");
        }
    } else {
        throw new Error("No token attached to header");
    }
});

module.exports = authMiddleware;
