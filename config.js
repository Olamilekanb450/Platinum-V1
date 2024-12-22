//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "jadewale71@gmail.com";
global.location = "Lagos, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Jupiterbold05/Platinum-V1";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/gvdQSvi.jpeg";
global.devs = "2348084644182";
global.sudo = process.env.SUDO || "2349073315641";
global.owner = process.env.OWNER_NUMBER || "2348084644182";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/gvdQSvi.jpeg";
global.waPresence = process.env.WAPRESENCE || "unavailable";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://arthur-scanner.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0ZhRjhIVEk5RFdnN3YrN2RDaU5jb0pwYW5BMTlMN1FjRkhQVHdrWmRrZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMndlWXpSYjRyb2xWeGRTYnpiR2VSMDYxNlRyQmwzZG9LSUYxZnV2QVZsMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrTkg5Z0RURnB1clprNW5kQ2ZuUjdURzR3dUtuc2huZDdMb21IZzZBR1hZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3djJaWjFXRS9xQ1hRTVNjandZTmFqM3hOMEhXLzVobnNraEdzWjYrUURFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNKK0M0K28wSXpZL0NLT3lGWGRnRFVJbGNadGVrU0Y5VEVSS3ZkV0xZM2c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRpQjY0czFobHlncWFGS0NtNnJLd3AxczFGdFEyMGZxbDZwTXM0MVRpVnc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0diUG4zU1g4Vlo2eENQQ3ZiUEZkcVB4b2JJZU82R1FXOXNBc08xZnZXWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibFpzL0lyc21VZ0lrakxvaTJjbk1EUGFzdVF4ekJBYUNva2g5UFlWNVhUcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjdSc2FzTmM3U0dySTNtT0lCbkVGMlBzeWZMMGczcEhyY2hteVAxWGtjb0pQV0wyYnNDaUdZc3kzVVdHWEoxSFMrc3E1QUpoRmY1R2R3blpOYjIwQ2lnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTcsImFkdlNlY3JldEtleSI6IkRtejdLTGR4L3F5dXdNRGtqdE1Ud3E1NVRhYTJTRVJMbi9mOGh0a0pVbGs9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkhwZjB1ZDhpU2otTFdYTnJsMkRCbVEiLCJwaG9uZUlkIjoiNDZhOWQyYjgtMTJkNC00YWFmLTk4ZDYtNTJjYjliMzYyMWJkIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImhRR0xDamtSVVFhSVlrdGgrOTZkU3BJNTFHVT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ4ZjFqTFhpK3lzMktJZzNkSlJNUS9PeUp0dTg9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiNzgxMVk5NzYiLCJtZSI6eyJpZCI6IjIzNDkwNzMzMTU2NDE6MjNAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2Qk/CdkIfYuScnIPCdkIDwnZCl8J2QqfCdkIfwnZCaIOKAiiDwkoCx6qqzIPCShZIg8JKAseqqsyDwkoWSIPCSgLHqqrMg8JKFkiDwkoCx6qqzIPCShZIg8JKAseqqsyDwkoWSIPCSgLHqqrMg8JKFkiDwkoCx6qqzIPCShZIg8JKAseqqsyDwkoWSIPCSgLHqqrMg8JKFkiDwkoCx6qqzIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMSDhzSzRCRU1uQ29Mc0dHQWNnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIzeXh6UDdkbXhSM0l2cmozaGs4ekhRY1FybUZrOEVJZ2t0L1JnUGN6VHhBPSIsImFjY291bnRTaWduYXR1cmUiOiJzZUlIWmVmTnQycXpTVFpBVEpGSTQyUlZ3VjRkejErY3ZxLzJmV0pBYk4walk4RGRuVDh1VWFhRnN6Uk1wM25uN21EQnZRbnZmZWU3WGt0T2ptRndEUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiSm9aYWtyZ3l0OU5XZTAxMzgxZUMyMm9lb0UxR3Z5aUZMM2dnc0Z4TzY3OHRVUEhpL09NZThPeEp1ejdEY3VVUzNpaHVLcTVJN0p3UHNXdjFCR2lkZ1E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MDczMzE1NjQxOjIzQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmQ4c2N6KzNac1VkeUw2NDk0WlBNeDBIRUs1aFpQQkNJSkxmMFlEM00wOFEifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzQ4Nzc1Mjl9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "+",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "Ͳհҽ օղҽ ąҍօѵҽ ąӀӀ ☠️👑🌍™",
  author: process.env.PACK_AUTHER || "ąҍօѵҽ ąӀӀ ☠️👑🌍",
  packname: process.env.PACK_NAME || "ąҍօѵҽ ąӀӀ ☠️👑🌍",
  botname: process.env.BOT_NAME || "Ͳհҽ օղҽ ąҍօѵҽ ąӀӀ ☠️👑🌍",
  ownername: process.env.OWNER_NAME || "ᴀʙᴏᴠᴇ ᴀʟʟ ☠️👑🌍",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  GEMINI_API_KEY: process.env.GEMINI_API_KEY || "AIzaSyDGaxLsz6PLvHvONZPeGuLUaf6UR9yIonc",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "PLATINUM").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
