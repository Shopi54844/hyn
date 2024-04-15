module.exports.config = {
    name: "imgur",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "tdunguwu",
    description: "",
    commandCategory: "EN",
    usages: "[reply]",
    cooldowns: 5,
	dependencies: {
  "axios": "",}
};

module.exports.run = async ({ api, event }) => {
const axios = global.nodemodule['axios'];  
var linkanh = event.messageReply.attachments[0].url || args.join(" ");
	if(!linkanh) return api.sendMessage('الرجاء الرد أو إدخال رابط الصورة!!!', event.threadID, event.messageID)
const res = await axios.get(`https://www.phamvandienofficial.xyz/imgur?link=${encodeURIComponent(linkanh)}`);    
var img = res.data.uploaded.image;
    return api.sendMessage(`${img}`, event.threadID, event.messageID);
	
}
