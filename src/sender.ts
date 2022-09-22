import {create, Whatsapp, Message, SocketState} from "venom-bot";
import {start} from "repl";
// @ts-ignore
import parsePhonenumber, {isValidPhonenumber} from "libphonenumber-js";

class Sender{
    private client: Whatsapp

    constructor(){
        this.initialize();
    }

    async sendText(to: string, body: string){

        if(!isValidPhonenumber(to,"BR")){
            throw new Error('this number isnt valid')
        }

        let phoneNumber = parsePhonenumber(to, "BR").format("E.164");
        phoneNumber = phoneNumber.includes("@c.us") ? phoneNumber : `${phoneNumber}@c.us`;

        await this.client.sendText(to, body);
    }

    // async getText(to: string, body: any){
    //     await this.client.getAllNewMessages();
    // }
    
    private initialize(){
        const qr = (base64Qrimg: string) => {}

        const status = (statusSession: string, session: string) => {}

        const start = (client: Whatsapp) => {
            this.client = client
        }

        create('ws-sender-dev', qr)
        .then((client)=> start(client))
        .catch((error)=> console.error(error))
    }
}

export default Sender