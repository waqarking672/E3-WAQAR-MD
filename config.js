const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "E3_HACKER_MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiME8yVm9XZkJhbHc4YThGN0t2QUs4eHp3TUlSSEE4NnJ2V25vNUpaTEZuQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWnk0UjBicmZyQjEwekxJRkNzZXhSelJQY1djS0FXQ0xyZGdvdzg3VXAxdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4TEFWa3pRbDFUQTlqU0pGQjliaGFldndMVHFkQVhGOTBvcHVzQTBMcG5FPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVbkcvYmduZEI5OG1FSmtyVk0yZ0FNb2xrSHA4aDMwRktCT2FGSEJyWEJnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlFUUlJZUFDUVVrZWdLeDVVd3huOG13cCtxUDJ1OFlxb0U0bFVDLzFybDg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVyMXRieTh5WFJxSUtFRUxRQVRzeS9yOXhlbEorNlFoMU9Pb3A1N0JPMEU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUoreGdqZVUvY3Q3cTA0cEZJT1ZKTzVjVCtHTjY5QU5UdGdKSlErUnhVRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidTFhekRGb0ZhSmhSQWxhaDhwVUNLaWxSM2VwVWxFeWpLMnJLTmFHdFprVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InB3MEpIZU5yYUJDVlYyK28ybVpuUGdqM1cyRzQ1TjZGNGVoaXRwS0d1aEdTK0xjMzF4SmtIZkRxQXZ5V05xdzVuWkhYTkZkcGozZUpDL2NOTkp4dWpBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODksImFkdlNlY3JldEtleSI6ImlwRnFwYlp6VFBCRHpDZ0JyTTBXeVFCSXUxWjVPR0ExZnNWY0VYdG1YZkk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiODgwMTMxMjgzMTk1MUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBQ0M4MkQ4OUQ2NUM5MTk1RjkxMzUzNDQyMEY2NzM0MCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU4MzA0NDkwfSx7ImtleSI6eyJyZW1vdGVKaWQiOiI4ODAxMzEyODMxOTUxQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkFDRkM2MTI1RUEzRDI3MEZBODMzNTZBNjY1RTMyOUZCIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTgzMDQ0OTF9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IlJLUzJCNzZSIiwibWUiOnsiaWQiOiI4ODAxMzEyODMxOTUxOjQ2QHMud2hhdHNhcHAubmV0IiwibGlkIjoiMTQ4MTU1MzY2Njc4NzIwOjQ2QGxpZCIsIm5hbWUiOiLwk4ap8J2QhcmRzaLPu82h1p/guY/KivCdkKwg8JakjfCThqrgv5AifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09uVmdkd0VFT1N4dHNZR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlduODh5Sy81NTZibzM2eU1DVGhoMDJSOVJMZDNUTzh1OEhQckhnaElnSEk9IiwiYWNjb3VudFNpZ25hdHVyZSI6Imc0Njk4VjZFUkVYaHdJSCtvWVhDUW43WWV2M3RMVy9vQVU2Mm1yU2RyUlh3S3dCYm5ndmVwcnA2ai9UdHpqRGQrWWVqMlp3WWpTMFFoUm14cXFSYkJBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ0bDJ5RmJUa1lGYWhjaUkveG1tNlpIUjZKUTcxUktDRUp1cmJTZ3Z0dERHMFJNWGhqY2QzOHJjT1VwUitaNkNCd2o0UE52c1IyVEljU04rOXRkdmlodz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijg4MDEzMTI4MzE5NTE6NDZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVnAvUE1pditlZW02TitzakFrNFlkTmtmVVMzZDB6dkx2Qno2eDRJU0lCeSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FJSUNBPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU4MzA0NDg3LCJsYXN0UHJvcEhhc2giOiIyVjc3cVUiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUZuNiJ9",
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
CUSTOM_REACT: process.env.CUSTOM_REACT || "true",
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
AUTO_REACT: process.env.AUTO_REACT || "true",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "true",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "true",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
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
