import express, { Request, Response } from "express";
import Sender from './sender';

const sender = new Sender();
const app = express();

app.use(express.json())
app.use(express.urlencoded(({ extended: false })))

app.get('./status', (req: Request, res: Response) => {

})

app.post('/send', async (req: Request, res: Response) => {
    try {
        await sender.sendText("5585996635466@c.us", "Olá tudo bem")
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: "error", message: error })
    }
})

app.listen(3002, () => {
    console.log("Server is running at http://localhost:4000");
  });
  
  