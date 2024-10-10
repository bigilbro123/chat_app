import User from "../models/userModel.js";

export const getUser = async (req, res) => {

    try {
        const logInUser = req.user._id
        console.log(logInUser);
        if (!logInUser) {
            return req.status(400).json({
                error: "error"
            })
        }

        const users = await User.find({ _id: { $ne: logInUser } }).select('-password')


        res.status(200).json(
            users
        )

    } catch (error) {
        console.log(error);
        res.status(500).json('internal server error');

    }
}