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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "255747086926";




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
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "255747086926";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_28_07_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDU5LFxuICAgICAgICA2MixcbiAgICAgICAgNjUsXG4gICAgICAgIDExMixcbiAgICAgICAgOTIsXG4gICAgICAgIDQ4LFxuICAgICAgICAzOCxcbiAgICAgICAgMTk4LFxuICAgICAgICA5OCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTY2LFxuICAgICAgICA1MixcbiAgICAgICAgMjEsXG4gICAgICAgIDgzLFxuICAgICAgICA0MCxcbiAgICAgICAgMjIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjMsXG4gICAgICAgIDc0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIyLFxuICAgICAgICAzMyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzYsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxODUsXG4gICAgICAgIDIwLFxuICAgICAgICA1NSxcbiAgICAgICAgMTIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNjMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTA0LFxuICAgICAgICA5NCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNyxcbiAgICAgICAgMTAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjI2LFxuICAgICAgICA3MCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIzLFxuICAgICAgICA5OSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA4NixcbiAgICAgICAgMTUwLFxuICAgICAgICA5MCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDUyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTQwLFxuICAgICAgICA1MyxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgODQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTY3LFxuICAgICAgICA1NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjAwLFxuICAgICAgICA4MCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMyxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDQxLFxuICAgICAgICA3OCxcbiAgICAgICAgMjEsXG4gICAgICAgIDExNSxcbiAgICAgICAgNzAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNTcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjExLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjIwLFxuICAgICAgICAyMjksXG4gICAgICAgIDIzOCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE1LFxuICAgICAgICAzNCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDc3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDQyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDQ1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDk2LFxuICAgICAgICA2MyxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNjIsXG4gICAgICAgIDE2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMzUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgOTcsXG4gICAgICAgIDIyLFxuICAgICAgICA1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTk3LFxuICAgICAgICA1OCxcbiAgICAgICAgMTMsXG4gICAgICAgIDg3LFxuICAgICAgICA5LFxuICAgICAgICAxMjksXG4gICAgICAgIDc2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NyxcbiAgICAgICAgMyxcbiAgICAgICAgOTAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTIwLFxuICAgICAgICA5MixcbiAgICAgICAgMTMwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNjQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTIsXG4gICAgICAgIDgzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDU4LFxuICAgICAgICAxOCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNzEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTY3LFxuICAgICAgICA1MCxcbiAgICAgICAgOTgsXG4gICAgICAgIDExOCxcbiAgICAgICAgOSxcbiAgICAgICAgMTkwLFxuICAgICAgICA2M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDc4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA0NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc4LFxuICAgICAgICAxODgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjUzLFxuICAgICAgICA4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgODIsXG4gICAgICAgIDgxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTIsXG4gICAgICAgIDE4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDU5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDcxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE4LFxuICAgICAgICA3NixcbiAgICAgICAgMTI0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTA3LFxuICAgICAgICAzMyxcbiAgICAgICAgMTU4LFxuICAgICAgICA5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTM5LFxuICAgICAgICAzMixcbiAgICAgICAgMjUyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMzMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI1MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJkY1VjVWNHWHVSdUg1Q3R5bDVaK1ZZeGNxYnVuMWtYdU42ZmJYUWdqb3RrPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI3cjlHWnd5VlN3MnhheEtNMGw1eVpBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjMyNTUxZjdmLTAwOGYtNDUzMC04OTY0LTEzMGI4NzZkMzhhN1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5OCxcbiAgICAgIDExNSxcbiAgICAgIDIzNixcbiAgICAgIDI1NCxcbiAgICAgIDE2MyxcbiAgICAgIDE3NyxcbiAgICAgIDE2MixcbiAgICAgIDEyMSxcbiAgICAgIDIzNixcbiAgICAgIDk4LFxuICAgICAgMTQyLFxuICAgICAgNzAsXG4gICAgICAxNzQsXG4gICAgICAxNDEsXG4gICAgICAxNjQsXG4gICAgICA5NSxcbiAgICAgIDEyMCxcbiAgICAgIDExMyxcbiAgICAgIDE2LFxuICAgICAgOTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTAsXG4gICAgICA1OCxcbiAgICAgIDY0LFxuICAgICAgMTQ1LFxuICAgICAgMTU1LFxuICAgICAgODMsXG4gICAgICA0NSxcbiAgICAgIDE5MixcbiAgICAgIDM2LFxuICAgICAgMTc0LFxuICAgICAgMTY1LFxuICAgICAgMTkxLFxuICAgICAgMTQ3LFxuICAgICAgMzMsXG4gICAgICAxMTUsXG4gICAgICA3NSxcbiAgICAgIDIxNSxcbiAgICAgIDE3NSxcbiAgICAgIDcwLFxuICAgICAgMTE1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjRYRUtSQjQ0XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTU3NDcwODY5MjY6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIvCdk6HwnZO48J2TuPCdk70g8J2TuPCdk68g8J2TvPCdk73wnZO48J2Tt/Cdk65cIixcbiAgICBcImxpZFwiOiBcIjE1NTU1OTkwNzA0NTUwNjozQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xpdXppOFFpYWpxdEFZWUF5QUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiLzZseEpKeUtwUXFsSGcyeHpwcWZML2ppbHRhMTlTM3JEbzdxTWZvUWEyWT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJiS09DcGNTbnN0Njc1MUY2dDRsMzdlaDJBc01zYUlhSXEyMHRqNmdHUkJiK1JKeFEzNlc0eEtQZjk1YzlXMzZ5Sy95emNpNmxrU0JQdjRJUkNIK1RDUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI5SWtvREx0Q0NyYXV6OXQ0eWtJSWREVWFmL1ZUUmQ5ck1iY0ZHMWNEYWxGYTRiTHdJYnJFR1FxZFo0RzlzT01hS3VEZlkwRUdLeThWVU0vU0ZLZ3Zndz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTU3NDcwODY5MjY6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxMDJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTQwNjQ3NyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUVyblwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRXJuLmpzb24iOiAie1wia2V5RGF0YVwiOlwibDR4VGFXU1R0TkhkQkxhVzgxa256cS9zS0RPbzRzdGFIeVVGOWtlN0Z6TT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo5OTg1MDA0MCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIxNDA0Mjg4MzA5XCJ9Igp9"  // PUT your SESSION_ID  

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
