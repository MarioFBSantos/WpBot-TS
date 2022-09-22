import express, { Request, Response} from "express";

import Sender from "./sender"

const sender = new Sender()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/status', (req: Request, res: Response) => {
    // ...
})

app.post('/send', async (req: Request, res: Response) => {
    const {number, message} = req.body
    try{
        console.log(number, message);
        
        sender.sendText(number, message)

        return res.status(200).json("ok");
    }
    catch(error){
        console.log(error);
        res.status(500).json(error);
    }
});

app.listen(5000, ()=>{
    console.log("Server subiiiiiiiiiiiiiiu")
})