module.exports.config = {
	name: "ترسيت",
	version: "1.0.2",
	hasPermssion: 2,
	credits: "Khánh Milo",
	description: " ",
	commandCategory: "المطور",
	cooldowns: 5,
	dependencies: {
		"eval": ""
	}
};

module.exports.run = async ({ api, event, args, client, utils }) => {
    const eval = require("eval");
    const permission = ["100059101685364",""];                  
    if (!permission.includes(event.senderID)) return api.sendMessage("ماعدك صلاحية حب", event.threadID, event.messageID);
    return api.sendMessage("تم انتضر 5 ثوان ❤️ ", event.threadID, () => eval("module.exports = process.exit(1)", true), event.messageID);

   }
