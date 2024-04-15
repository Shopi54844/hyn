module.exports.config = {
	name: "آيموجي",
	version: "1.0.0", 
	hasPermssion: 0,
	credits: "𝒍𝒊𝒏𝒖𝒙",
	description: "تغير ايموجي المجموعة",
	commandCategory: "🛡𝗚𝗥𝗢𝗨𝗣🛡", 
	usages: "آيموجي [🙂]", 
	cooldowns: 0,
	dependencies: [] 
};

module.exports.run = async function({ api, event, args }) {
	var emoji = args.join(" ")
	if (!emoji) api.sendMessage("استخدم الامر مع الايموجي 🤬🤬", event.threadID, event.messageID)
	else api.changeThreadEmoji(emoji, event.threadID, () => api.sendMessage(نجح البوت في تغير الايموجي إلى: ${emoji}, event.threadID, event.messageID));
}