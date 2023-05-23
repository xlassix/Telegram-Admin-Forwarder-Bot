const TelegramBot = require('node-telegram-bot-api');
const bot = new TelegramBot('6149662006:AAEDS31IDdZAtuREqoVJu3W63i3nHnV7Uvo', { polling: true });
bot.on('message', (msg) => {
    const chatId = msg.chat.id;
  
    // Check if the message is sent by the admin
    if (msg.from.id === 1267334388) {
      // Forward the message to the specified group
      bot.forwardMessage(-758309838, chatId, msg.message_id);
    }
  });
  