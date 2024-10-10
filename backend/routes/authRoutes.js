import express from "express";
import { login, singup, logout } from "../controllers/authController.js";
const router = express.Router()


router.post('/login', login)
router.post('/signup', singup)
router.post('/logout', logout)


export default router



