// src/modules/messageHandler.js
const axios = require('axios');
const { MessageMedia } = require('whatsapp-web.js');

async function handleMessage(client) {
  client.on('message', async (message) => {
    if (message.body === 'send api image') {
      try {
        const apiImageUrl = 'https://example.com/your-api-endpoint'; // Replace with your API URL
        const response = await axios.get(apiImageUrl, { responseType: 'arraybuffer' });

        if (response.status === 200) {
          const media = new MessageMedia('image/jpeg', response.data);
          client.sendMessage(message.from, media, { caption: 'Here is an image from an API!' });
        } else {
          console.error('Failed to fetch image from the API.');
        }
      } catch (error) {
        console.error('Error fetching image from the API:', error.message);
      }
    }
  });
}

module.exports = handleMessage;
