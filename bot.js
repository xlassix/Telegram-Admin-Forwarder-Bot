const TelegramBot = require("node-telegram-bot-api");
require("dotenv").config();

const bot = new TelegramBot(process.env.BOT_API_TOKEN, { polling: true });

bot.on("message", (msg) => {
  const chatId = msg.chat.id;

  
  // Check if the message is sent by the admin
  if (msg.from.id === process.env.ADMIN_ID) {
    // Forward the message to the specified group
    bot.forwardMessage(process.env.GROUP_ID, chatId, msg.message_id);
  }
});

