import express from "express";
import { ChatGPTAPI } from 'chatgpt'
const Router = express.Router();
Router.get("/chat", async (req, res) => {
    const api = new ChatGPTAPI({
        apiKey: ''
    })

    const data = await api.sendMessage(req.query.txt)
    console.log(data.text)
    return res.json({
        success: true,
        data: data.text
    });
});

export default Router;