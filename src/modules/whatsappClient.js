// src/modules/whatsappClient.js
const { Client } = require('whatsapp-web.js');
const fs = require('fs');
const config = require('../config/whatsappConfig');

class WhatsAppClient {
  constructor() {
    this.client = new Client();
  }

  async start() {
    this.client.on('qr', (qrCode) => {
      console.log('Scan this QR code with your WhatsApp app:');
      console.log(qrCode);
    });

    this.client.on('authenticated', (session) => {
      console.log('Authenticated');
      fs.writeFileSync(config.sessionPath, JSON.stringify(session));
    });

    if (fs.existsSync(config.sessionPath)) {
      const sessionData = require(config.sessionPath);
      this.client.initializeFromSession(sessionData);
    } else {
      this.client.initialize();
    }

    this.client.start();
  }

  getClient() {
    return this.client;
  }
}

module.exports = WhatsAppClient;
