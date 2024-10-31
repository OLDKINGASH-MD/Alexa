const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "GfITAYxI#A_e8hFrjQZM8ElU3lwl-Wp-rYA_-rO1L0FLeubpvBow",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public",
AUTO_VOICE: process.env.AUTO_VOICE || "true",
AUTO_STICKER: process.env.AUTO_STICKER || "false",
AUTO_REPLY: process.env.AUTO_REPLY || "false",
AUTO_SAVE_STATUS: process.env.AUTO_SAVE_STATUS || "true",
AUTO_VOICE: process.env.AUTO_VOICE || "true",
};
