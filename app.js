const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal'); // Import qrcode-terminal

const client = new Client();

client.on('qr', (qr) => {
    // Display the QR code as text in the console
    qrcode.generate(qr, { small: true }); // Display the QR code as a terminal output
    console.log('Scan the QR code with your WhatsApp mobile app');
});

client.on('ready', () => {
    console.log('Client is ready');
});

client.on('message', (message) => {
    console.log('Received message:', message.body);
});

client.initialize();
