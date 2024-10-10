import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
const protectedRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;

        if (!token) {
            return res.status(401).json({
                message: "unauthrized access"
            })
        }
        const decode = jwt.verify(token, process.env.JWT_SECRET)
        if (!decode) {
            return res.status(401).json({
                message: "unauthrized access invalied"
            })
        }
        const user = await User.findById(decode.userId).select('-password')
        if (!user) {
            return res.status(401).json({
                message: "user not found"
            })
        }
        req.user = user
        next()
    } catch (error) {
        console.log(error);
        res.status(500).json('internal server error')

    }
}
export default protectedRoute