import express from "express";
import { sendMessage, getMessage } from "../controllers/messageController.js";
import protectedRoute from "../middleWare/protectRoute.js";
const router = express.Router()



router.get('/:receiverId', protectedRoute, getMessage)

router.post('/send/:receiverId', protectedRoute, sendMessage)


export default router