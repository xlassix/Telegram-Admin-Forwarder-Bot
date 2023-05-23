const TelegramBot = require('node-telegram-bot-api');
const bot = new TelegramBot('YOUR_API_TOKEN', { polling: true });
bot.on('message', (msg) => {
    const chatId = msg.chat.id;
  
    // Check if the message is sent by the admin
    if (msg.from.id === ADMIN_ID) {
      // Forward the message to the specified group
      // Replace -758309838 with 'GROUP_ID' 
      bot.forwardMessage(GROUP_ID, chatId, msg.message_id);
    }
  });
  