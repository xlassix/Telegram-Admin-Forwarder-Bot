const TelegramBot = require('node-telegram-bot-api');
// Replace 6149662006:AAEDS31IDdZAtuREqoVJu3W63i3nHnV7Uvo with 'YOUR_API_TOKEN'
const bot = new TelegramBot('6149662006:AAEDS31IDdZAtuREqoVJu3W63i3nHnV7Uvo', { polling: true });
bot.on('message', (msg) => {
    const chatId = msg.chat.id;
  
    // Check if the message is sent by the admin
    // Replace 1267334388 with 'ADMIN_ID'
    if (msg.from.id === 1267334388) {
      // Forward the message to the specified group
      // Replace -758309838 with 'GROUP_ID' 
      bot.forwardMessage(-758309838, chatId, msg.message_id);
    }
  });
  