// import {create, Whatsapp, Message, SocketState} from "venom-bot";
// import {start} from "repl";
// // @ts-ignore
// import parsePhoneNumber, {isValidPhoneNumber} from "libphonenumber-js";

// export type QRCode = {
//     base64Qr: string;
// }

// class Getter{
//     private client: Whatsapp;
//     private connected: boolean;
//     private qr: QRCode;

//     get isConnected(): boolean {
//         return this.connected;
//     }

//     get qrCode(): QRCode {
//         return this.qr
//     }

//     constructor(){
//         this.initialize();
//     }

//     async listenToMessages(){
//         this.client.onMessage(
//             message => {
//                 console.log(message);
//             }
//         );
//     }
    
//     private initialize(){
//         const qr = (base64Qr: string) => {
//             this.qr = { base64Qr }
//         }

//         const status = (statusSession: string, session: string) => {
//             this.connected = ["isLogged", "qrReadSuccess", "chatsAvaible"].includes(statusSession)
//         }

//         const start = (client: Whatsapp) => {
//             this.client = client
//             this.listenToMessages();
//         }

//         create('ws-sender-dev', qr)
//         .then((client)=> start(client))
//         .catch((error)=> console.error(error))
//     }
// }

// export default Getter