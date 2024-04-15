module.exports.config = {
	name: "المالك",
	version: "1.0.1", 
	hasPermssion: 0,
	credits: "Joshua Sy", //don't change the credits please
	description: "معلومات البوت و المطور",
	commandCategory: "اشياء",
	cooldowns: 1,
	dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Manila").format("『D/MM/YYYY』 【HH:mm:ss】");
var link = ["https://i.imgur.com/I9mRudv.jpg", "https://i.imgur.com/4UW3TXd.jpg", "https://i.imgur.com/5t7agA6.jpg", "https://i.imgur.com/AivQLkj.jpg", "https://i.imgur.com/4XOpPeo.jpg", "https://i.imgur.com/MV30fhB.jpg", "https://i.imgur.com/Ix9y8S4.jpg", "https://i.imgur.com/NJ57QCs.jpg"];
var callback = () => api.sendMessage({body:➢معلومات البوت و الأدمن 🔥💀

⁂إسمي: ${global.ريم عمتك}

إستعمله قبل كل أمر: ${global.config.PREFIX}

✫صانع البوت:+±(/@€#//

➟سيرفر البوت✅

✬اليوم: ${juswa} 

➳تم تشغيل البوت على  ${hours}:${minutes}:${seconds}.

★شكرا على إستعمال ريم ${global.config.BOTNAME} بوت✅!,attachment: fs.createReadStream(dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };