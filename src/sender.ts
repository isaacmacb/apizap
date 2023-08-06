import { start } from 'repl';
import { create, Whatsapp, Message, SocketState } from 'venom-bot';

class Sender {
    private client: Whatsapp

    constructor() {
        this.initialize()
    }

    async sendText(to: string, body: string) {
        //5585996635466.us
        await this.client.sendText(to, body);
    }

    private initialize() {
        const qr = (base64Qrimg : string) => {}

        const status = (statusSession : string) => {}

        const start = (client : Whatsapp) => {
                this.client = client
                this.sendText("5585996635466@c.us", "Olá tudo bem")
        }
        create('ws-sender-dev', qr, status)
        .then((client) => start(client))
        .catch((error) => console.log(error)
        );
    }
}

export default Sender;