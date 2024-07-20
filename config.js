const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/71ce7bc2c1af81cbc7df7.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ DUDUU_MENDEZ²²¹-ᴍᴅ" 


global.devs = "255749750707" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "255766639749";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,255xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,255xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "255766639749";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_42_07_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICA1NixcbiAgICAgICAgMTc4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDc3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDU0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDU5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNDUsXG4gICAgICAgIDExOSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNCxcbiAgICAgICAgNTEsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTM2LFxuICAgICAgICAxNjksXG4gICAgICAgIDIzMixcbiAgICAgICAgNzIsXG4gICAgICAgIDU5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyOCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgOTEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMCxcbiAgICAgICAgODMsXG4gICAgICAgIDUxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDg5LFxuICAgICAgICA1NSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgMTgzLFxuICAgICAgICA1MSxcbiAgICAgICAgMjExLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTYyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDcyLFxuICAgICAgICA4MyxcbiAgICAgICAgMTM4LFxuICAgICAgICA2OCxcbiAgICAgICAgMjE5LFxuICAgICAgICA3NCxcbiAgICAgICAgODYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDI0LFxuICAgICAgICAxNzksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjAsXG4gICAgICAgIDQ0LFxuICAgICAgICAxODUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgODdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE1LFxuICAgICAgICAzNixcbiAgICAgICAgMzEsXG4gICAgICAgIDI0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDY0LFxuICAgICAgICAyMSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDM5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIyLFxuICAgICAgICAxODUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjI2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTAxLFxuICAgICAgICA4OCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTAzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDUxLFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICA0OCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTQxLFxuICAgICAgICA1NyxcbiAgICAgICAgMjA1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDMyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNzIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjMxLFxuICAgICAgICA3NyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTYxLFxuICAgICAgICA3MSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE4MixcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQzLFxuICAgICAgICAyOSxcbiAgICAgICAgNTIsXG4gICAgICAgIDcyLFxuICAgICAgICAzLFxuICAgICAgICAxMzksXG4gICAgICAgIDE1NSxcbiAgICAgICAgOTEsXG4gICAgICAgIDMzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMzksXG4gICAgICAgIDAsXG4gICAgICAgIDg0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDQyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjI1LFxuICAgICAgICA2NSxcbiAgICAgICAgMjIxLFxuICAgICAgICA1OCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMyxcbiAgICAgICAgOSxcbiAgICAgICAgNDMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA4MlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICAyMDksXG4gICAgICAgIDUxLFxuICAgICAgICA4NyxcbiAgICAgICAgOTksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTc2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDUyLFxuICAgICAgICA4MSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA5NixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDExNixcbiAgICAgICAgMTIwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDU2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDI0LFxuICAgICAgICAxMCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNixcbiAgICAgICAgMTYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNzAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTg1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDc4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxODYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTg5LFxuICAgICAgICA2NSxcbiAgICAgICAgOTcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxODQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTE1LFxuICAgICAgICA2MyxcbiAgICAgICAgMjksXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDM4LFxuICBcImFkdlNlY3JldEtleVwiOiBcInNRYUxBekRjYUlJYjZMWGlTRSthOTFpWG05YmljNDZyTDZkbnVlbDBrNzg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlVKTDhGbDl0U3RhU21YcHBpVUNXcXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiN2JjOWNkYzctNGNiZC00MWY1LWIzNmEtYTRlMDRjOTFmMzkwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3NCxcbiAgICAgIDI0NyxcbiAgICAgIDIxMSxcbiAgICAgIDIzMSxcbiAgICAgIDE2MSxcbiAgICAgIDY0LFxuICAgICAgMjM0LFxuICAgICAgMjQsXG4gICAgICAzOSxcbiAgICAgIDEzOCxcbiAgICAgIDIzNixcbiAgICAgIDE0NixcbiAgICAgIDIxNixcbiAgICAgIDIxMyxcbiAgICAgIDM0LFxuICAgICAgMTY5LFxuICAgICAgMTA0LFxuICAgICAgMTYyLFxuICAgICAgMjU0LFxuICAgICAgMTc1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDMyLFxuICAgICAgMTIwLFxuICAgICAgMjYsXG4gICAgICAxNDYsXG4gICAgICAyMzMsXG4gICAgICAxNTMsXG4gICAgICAxNTYsXG4gICAgICAyMTgsXG4gICAgICAxNzQsXG4gICAgICA1LFxuICAgICAgMTAsXG4gICAgICAyLFxuICAgICAgMzAsXG4gICAgICAxMDQsXG4gICAgICAxMzgsXG4gICAgICAxMDksXG4gICAgICAxNzEsXG4gICAgICA5NyxcbiAgICAgIDEzMyxcbiAgICAgIDIzOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIxNUI3WlNWSFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU1NzY2NjM5NzQ5OjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE1MTcwNjkxODc3NzAzMjozQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0wySjhIWVFyZUh1dEFZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwidzBzSGZWd2ZBU3B0VTFpUDg0dmYwWVJkZ3pLTnhlRUZEZWZOeGRvL1BYYz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI4THJDcWE2cGp5SkxieVJIc1ZYVnp6RUV6L0dkNWREWUU0dE96VCt5eElHTVF5KzhnblR0eEZLN21WSWlFV3hvTDJ1K1VjTWRnM1BRSWU0NTBkU0VCUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJpNkx0Wkl1SmN5blA5NlJpcDVkT1dVTkh5QTdsMXN4S25BR1l3YmZCeU1Ha21FN21XTlU4Zk9UOFdoVmRIN1E2OS9Da1h1VlVwZHcyUW44VkJnTjlCdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTU3NjY2Mzk3NDk6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTE5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE0NzkzNDUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFNN0ZcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU03Ri5qc29uIjogIntcImtleURhdGFcIjpcImhSOE5BTlNjU282VkxBNW1CSkxjNFVWRHo4TllwSnk0M1FPQjRrd2oyQTg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjQ5MzAwMTU3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjE0NzkzNTI0NzlcIn0iCn0="  // PUT your SESSION_ID  

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ MENDEZ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • MENDEZ ᴛᴇᴄʜ』*\n youtube.com/@DUDUU_MENDEZ"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "FANTASTICS BOT",
  ownername:process.env.OWNER_NAME|| "Duduu_mendez",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "FANTASTICS"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
