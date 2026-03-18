require('dotenv').config();

module.exports = {
  BOT_NAME: process.env.BOT_NAME || 'Fatir Ali Bot',
  BOT_NUMBER: process.env.BOT_NUMBER || '03286492357',
  AUTO_REPLY_ENABLED: process.env.AUTO_REPLY_ENABLED !== 'false',
  TYPING_DELAY: parseInt(process.env.TYPING_DELAY) || 1000,
  REPLY_DELAY: parseInt(process.env.REPLY_DELAY) || 2000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  DEBUG: process.env.DEBUG === 'true',
  LOG_LEVEL: process.env.LOG_LEVEL || 'info',
  INCLUDE_HACKING_TIPS: process.env.INCLUDE_HACKING_TIPS !== 'false',
  INCLUDE_MARKETING_TIPS: process.env.INCLUDE_MARKETING_TIPS !== 'false',
  INCLUDE_GENERAL_KNOWLEDGE: process.env.INCLUDE_GENERAL_KNOWLEDGE !== 'false'
};