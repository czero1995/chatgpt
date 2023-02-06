import express from "express";
const router = express.Router();
// import { ChatGPTAPI } from 'chatgpt'
import chat from './chat.js'

const app = express();
app.use(router);

router.use("/api", chat);


app.listen(3600, function() {
  console.log(`Node app start at port 3600`);
});
// async function example() {
//   const api = new ChatGPTAPI({
//     apiKey: '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'
//   })

//   const res = await api.sendMessage('Hello World!')
//   console.log(res.text)
// }

// example()