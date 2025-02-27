import express from "express";
import { getUser } from "../controllers/UserController.js";
import protectedRoute from "../middleWare/protectRoute.js";

const router = express.Router()

router.get('/user', protectedRoute, getUser)


export default router