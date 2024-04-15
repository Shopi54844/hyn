module.exports.config = {
	name: "botoff",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "HTHB",
	description: " ",
	commandCategory: "المطور",
	cooldowns: 0
        };
module.exports.run = ({event, api}) =>api.sendMessage("تم إغلاق ريم باي 🖤🌹",event.threadID, () =>process.exit(0))