const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "E3_HACKER_MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUhVbXhGQStIY2NwVFAybGxUeHZhZXR5Z3ZGWks2cDVkOVlaQjFFZjQyRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ2lKMDlJS2k1dlJFOTVXMng4SVNZakNaRFN4Q2R0d3UwS3c0NXYvNVlrWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtRmJ3SUNyTXFmS3dVaTNBUWhHdmc5bnhuQXJkb3JLd20yT2FsZlZOWmw0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpelJmMTBvSTZvT0c3ZEN5NkM0R1ZSQkJsUWtkaVVib1lDZFlyNUxhSzNZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1MZWxEYzhyQzJQNDJyYmFNOE1TTzNYaXRGa1c0SU96MWkrSWt0bS85Vk09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFkZ3hkWlMwejVxQlo3VW1uMjdhV1Z6M3dMV1Fpc1NNYkszZ09HZXB3bDQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS1ByaE9QaWFWcU13QzIybGxIN2FGeW1hNGJpbzJYbW84YzNmZGJEQ3RFND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib1JBQS84SnBsMEc0WE4vSUNYUGpHalYzdE1hODdSeHRPOUx0disrMTlSOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJjU0VUaDJ1dTZyZDBBSmJ5elM0MlVBMm05czdlSDhEK1ZmUXo5VFdKcm1xQUdud1d5RDExWGxDMjYzYlN2NWlKUjhzZHFWdzZBT0lhWk80cnV0WWp3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzcsImFkdlNlY3JldEtleSI6ImR4YnFRWDRiKy9oWnVvUkxpK2tGY0gyYmJ0RmRSei9vNTNoSU85OFBLaUk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiODgwMTMxMjgzMTk1MUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBQzk4NEIyNTg5MzZBN0MwQjA4NTE5N0YyMjMwMEI3QSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU4MzkzODc3fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI4ODAxMzEyODMxOTUxQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkFDM0REREY0QjA5OEQ3OUZENjVDNEIwODcxN0I3RDRBIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTgzOTM4Nzd9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6Ik1IQUJCMVNRIiwibWUiOnsiaWQiOiI4ODAxMzEyODMxOTUxOjQ3QHMud2hhdHNhcHAubmV0IiwibGlkIjoiMTQ4MTU1MzY2Njc4NzIwOjQ3QGxpZCIsIm5hbWUiOiLwk4ap8J2QhcmRzaLPu82h1p/guY/KivCdkKwg8JakjfCThqrgv5AifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09yVmdkd0VFSTdzdThZR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlduODh5Sy81NTZibzM2eU1DVGhoMDJSOVJMZDNUTzh1OEhQckhnaElnSEk9IiwiYWNjb3VudFNpZ25hdHVyZSI6Imtvbm94T1g2bUJaU2hpd253T2VCd0M0ZlVLZkpIQk4xbUFzVVhPSnQyamNzR2Z2UWF0V1R6MXU5Z0ZSZ1NsZ3gwZVprN2FneU5JcVZlQy9qVVNiTkJBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiIyeGFQTms1Z3ZUbTUvZ3ZHYTgrWnN2WnlzTHBnNWgzNmNJemhUWUk3K2VVM2lDaWc2eTZET0lmV2tXZ2dOd1NLU2RRM1BlQXEvQjlZd2oveXNxb0lqdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijg4MDEzMTI4MzE5NTE6NDdAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVnAvUE1pditlZW02TitzakFrNFlkTmtmVVMzZDB6dkx2Qno2eDRJU0lCeSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FJSUNBPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU4MzkzODczLCJsYXN0UHJvcEhhc2giOiIyVjc3cVUiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUluRyJ9",
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
