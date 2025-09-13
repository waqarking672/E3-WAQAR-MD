const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "E3_HACKER_MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUpacEFKdWVYSE1LMU40TVAxZHE0eGVvc0h4eXJUYVg5b0I4UXJYUUJtMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV2h2R3VYNlZBa3BUcFd5T0pqVEhna2U2RlhhM3NNV2dOMGxaZERSODNrND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwSkVTN3RlVCtKZ0QxWEkycHRNYnBlKzUzSS9sOHhqaytKNEM4YndDOEY0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1Ym4wRUtVbXJSWUhMVXJwOXZsZlJxR1IwVlNLcmFrVUx0RFV1a1k5VzBFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtDZW9kZm5RV1BRaEd6THlGM2tKckQrZVFUdVRQVUpNSWcyUXpjNnVSSE09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZUejUvVUQ0OVFQZWhibmNoZzM5ZzErUllUM05qQlNVUHVFRENPdXJha2c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieU43bGJUZ3BVYmVQOWx0TVBEcVF4V2hlbWl3elVaSUgrcUZuQ1JoV0kxYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaDdhazd4aUxiaGd2bGMraWxuWnZZaHFENTAvSjlmaVdGWWVKbG5yZ1V5OD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik84YnFsek04aXRmUmhCV2NnKzFjdnB0WEZvL2xPNmxQVUhlMGpXK0dkS3d2dHpHdnhsNkdvTEtETWZmYzlnZlpncGV5R01KWTBQU1FaaG5VYjJoSWp3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQzLCJhZHZTZWNyZXRLZXkiOiJGRTFncVhveGFJSnZDTzk4SFdzSVJsLzVINUxJRVovVnNpT2Z4RnJMZlVZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijg4MDEzMTI4MzE5NTFAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQUMyMDA0QkZFQUFBMDU4OEIyMDA2QkMwRjMxREYxODQifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1Nzc3NzA2Mn1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiTjlZSzcyOTYiLCJtZSI6eyJpZCI6Ijg4MDEzMTI4MzE5NTE6NDBAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIxNDgxNTUzNjY2Nzg3MjA6NDBAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPWFZnZHdFRUo2WmxzWUdHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJXbjg4eUsvNTU2Ym8zNnlNQ1RoaDAyUjlSTGQzVE84dThIUHJIZ2hJZ0hJPSIsImFjY291bnRTaWduYXR1cmUiOiJISW9yQjRYT2Jvc3AxRWk1eGhCSDRFYUtHVmxyWGNZTEdlbmNZazRKV1BLMEVZMlJFaDVEd0JrZEREei9SM3NWc1RaMzB6ZE9iTVphNDFVeWEzYWlEQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiaHhzdFlwTEVaemdCc1NCZCtHVWppK1pGd0JWdVJUci9VclVCZmdSeWd2U1NkTG5TOHB0WFQ1a0RDNFZWb0RUZnUyVlg5ZmVyQ1ZGMjFrSXhybDZuZ2c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI4ODAxMzEyODMxOTUxOjQwQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlZwL1BNaXYrZWVtNk4rc2pBazRZZE5rZlVTM2QwenZMdkJ6Nng0SVNJQnkifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBSUlDQT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1Nzc3NzA1OCwibGFzdFByb3BIYXNoIjoiMlY3N3FVIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFPWWsifQ==",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "true",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY 𝙀3-WAQAR-𝙈𝘿 ♥️☺️*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "true",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/yoie7u.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "E3-WAQAR-MD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "E3-WAQAR-MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "true",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923495178663",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*E3-WAQAR-MD Official*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ E3-WAQAR-MD Official ❣️*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/yoie7u.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Apni Had May Raho Batmeez Insan 🫣",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "true",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "true",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "true",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923495178663",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
