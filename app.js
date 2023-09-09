const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode');
const client = new Client();

client.on('qr', (qr) => {
    // Generate and display the QR code as text in the console
    qrcode.toString(qr, { type: 'terminal' }, (err, url) => {
        if (err) {
            console.error('Error generating QR code:', err);
            return;
        }
        console.log(url);
    });
    console.log('hello')
});

// client.on('ready', () => {
//     console.log('Client is ready');
// });

client.on('ready', () => {
    console.log('Client is ready');

    // Send a message when the client is ready
    const phoneNumber = '2347010790895@c.us'; // Replace with the recipient's phone number
    const message = 'Your message goes here';

    client.sendMessage(phoneNumber, message)
        .then((response) => {
            console.log('Message sent successfully:', response);
        })
        .catch((error) => {
            console.error('Error sending message:', error);
        });
});

client.on('message', (message) => {
    console.log('Received message:', message.body);
});

client.initialize();
