module.exports.config = {
	name: "load",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "D-Jukie",
	description: " ",
	commandCategory: "المطور",
	usages: "[]",
	cooldowns: 300
};
module.exports.run = async function({ api, event, args,Threads, Users }) {
const permission = ["61550912368313","100091289020368"];
    if (!permission.includes(event.senderID)) return api.sendMessage("ماعدك صلاحية وردة :>", event.threadID, event.messageID);
delete require.cache[require.resolve(global.client.configPath)];
global.config = require(global.client.configPath);
return api.sendMessage("Reload config", event.threadID, event.messageID);    
}
