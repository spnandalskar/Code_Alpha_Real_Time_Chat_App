import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import { getUsersForSidebar, getMessages, sendMessage } from "../controllers/message.controller.js";


const router = express.Router();

router.get("/", (req, res) => {
    res.status(400).json({ error: "Message ID is required" });
});

router.get("/users", protectRoute, getUsersForSidebar);
router.get("/chat/:id", protectRoute, getMessages);


router.post("/send/:id", protectRoute, sendMessage);

export default router;