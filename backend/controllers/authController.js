import User from "../models/userModel.js"
import bcrypt from 'bcrypt'
import generateTokenAndSetCookie from "../utils/genrentToken.js"
export const singup = async (req, res) => {
    try {
        const { fullName, userName, password, confirmPassword, gender } = req.body
        if (password !== confirmPassword) {
            return res.status(400).json({
                error: 'password not match'
            })

        }
        const user = await User.findOne({ userName: userName })
        if (user) {
            return res.status(400).json({
                error: 'userName exist'
            })
        }

        //password encry

        const boyProfilepic = `https://avatar.iran.liara.run/public/boy?username=${userName}`
        const girlProfilepic = `https://avatar.iran.liara.run/public/girl?username=${userName}`
        const enptpass = await bcrypt.genSalt(10)
        const handlepass = await bcrypt.hash(password, enptpass)

        const newUSer = new User({
            fullName,
            userName,
            password: handlepass,

            gender,
            profilePic: gender === 'male' ? boyProfilepic : girlProfilepic
        })


        if (newUSer) {
            generateTokenAndSetCookie(newUSer._id, res)

            await newUSer.save()
            res.status(201).json({
                _id: newUSer._id,
                fullName: newUSer.fullName,
                userName: newUSer.userName,
                gender: newUSer.gender,
                profilePic: newUSer.profilePic
            })
        } else {
            res.status(400).json({
                error: 'invalid'
            })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json('internal server error')

    }

}



export const login = async (req, res) => {

    try {
        const { userName, password } = req.body
        const user = await User.findOne({
            userName: userName
        })
        if (!userName || !password) {
            return res.status(404).json({
                error: 'fill the field'
            })
        }
        if (!user) {
            return res.status(404).json({
                error: 'user not found'
            })
        }
        const ispassCorrect = await bcrypt.compare(password, user.password || "")

        if (!ispassCorrect) {
            return res.status(404).json({
                error: 'incorrect password'
            })


        }

        generateTokenAndSetCookie(user._id, res)
        res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            userName: user.userName,
            gender: user.gender,
            profilePic: user.profilePic

        })
    } catch (error) {
        console.log(error);
        res.status(500).json('internal server error')

    }

}

export const logout = async (req, res) => {
    try {
        res.cookie("jwt", "", { maxAge: 0 })
        res.status(200).json({
            message: "logout successfull"
        })
    } catch (error) {
        console.log(error);
        res.status(500).json('internal server error')

    }

}