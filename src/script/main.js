// src/scripts/main.js
const WhatsAppClient = require('../modules/whatsappClient');
const handleMessage = require('../modules/messageHandler');

const clientInstance = new WhatsAppClient();
const client = clientInstance.getClient();

// Start the WhatsApp client
clientInstance.start();

// Handle incoming messages
handleMessage(client);
