module.exports.config = {
	name: "صيد",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "زعيم الاحمر",
	description: "صيد سمك واربح مال",
	commandCategory: "🎮𝗚𝗔𝗠𝗘🎮",
    cooldowns: 3,
    envConfig: {
        cooldownTime: 10000
    }
};

module.exports.languages = {
    
        
    "en": {
        "cooldown": "لقد اصتد سمك منذ مدة ،عد بعد: %1 دقيقه %2 ثانيه بعدها تستطيع اصتياد مجدداً.",
        "rewarded": "لقد اصتد سمك وبعتها مقابل: %2$! لو رؤيه رصيد اكتب رصيدي",
        "job1": "Fishing",
    }
}

module.exports.run = async ({ event, api, Currencies, getText }) => {
    const { threadID, messageID, senderID } = event;
    
    const cooldown = global.configModule[this.config.name].cooldownTime;
    let data = (await Currencies.getData(senderID)).data || {};
    if (typeof data !== "undefined" && cooldown - (Date.now() - data.workTime) > 0) {
        var time = cooldown - (Date.now() - data.workTime),
            minutes = Math.floor(time / 20000),
            seconds = ((time % 20000) / 500).toFixed(0);
        
		return api.sendMessage(getText("cooldown", minutes, (seconds < 10 ? "0" + seconds : seconds)), event.threadID, event.messageID);
    }
    else {
        const job = [
            getText("Fishing"),
        ];
        const amount = Math.floor(Math.random() * 300);
        return api.sendMessage(getText("rewarded", job[Math.floor(Math.random() * job.length)], amount), threadID, async () => {
            await Currencies.increaseMoney(senderID, parseInt(amount));
            data.workTime = Date.now();
            await Currencies.setData(event.senderID, { data });
            return;
        }, messageID);
    }     
          }