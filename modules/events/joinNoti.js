module.exports.config = {
	name: "joinNoti",
	eventType: ["log:subscribe"],
	version: "1.0.1",
	credits: "Mirai Team",
	description: "Thông báo bot hoặc người vào nhóm",
	dependencies: {
		"fs-extra": ""
	}
};

module.exports.run = async function({ api, event }) {
	const { join } = global.nodemodule["path"];
	const { threadID } = event;
	if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
		api.changeNickname(`【 ${global.config.PREFIX} 】 ${(!global.config.BOTNAME) ? "Bot By SUMEDA" : global.config.BOTNAME}`, threadID, api.getCurrentUserID());
		return api.sendMessage(`⫸ منور اني ⫷
Bot by 【SIMO】
●▬▬▬▬▬๑⇩⇩๑▬▬▬▬▬●
 ▷ Rim bot ◁
📱 online 24/24 تقريبا
⬆️ تسوي سبام = تنحضر
⬆️ تراس المطور بدون سبب = تنحضر انت والكروب
⬆️ تطرد البوت = تنحضر انت والكروب
🔇 لا تسوي سبام 🔞+...
🚫 اذا متعرف تستعمل البوت راسل لمطور وشكرا❤️
💓 شكرا لأستخدام ريم 💖<3
●▬▬▬▬▬๑⇧⇧๑▬▬▬▬▬●
❛━━･❪ اكتب [ . ] نقطه  قبل لا تستعمل الامر❫･━━❜
📲 عدك شي راسل المطور!`, threadID);
	}
	else {
		try {
			const { createReadStream, existsSync, mkdirSync } = global.nodemodule["fs-extra"];
			let { threadName, participantIDs } = await api.getThreadInfo(threadID);

			const threadData = global.data.threadData.get(parseInt(threadID)) || {};
			const path = join(__dirname, "cache", "joinMp4");
			const pathGif = join(path,`hi.mp4`);

			var mentions = [], nameArray = [], memLength = [], i = 0;
			
			for (id in event.logMessageData.addedParticipants) {
				const userName = event.logMessageData.addedParticipants[id].fullName;
				nameArray.push(userName);
				mentions.push({ tag: userName, id });
				memLength.push(participantIDs.length - i++);
			}
			memLength.sort((a, b) => a - b);
			
			(typeof threadData.customJoin == "undefined") ? msg = "➫ الى المجموعة 【{name}】 انظم ⁂" : msg = threadData.customJoin;  
			msg = msg
			.replace(/\{name}/g, nameArray.join(', '))
			.replace(/\{type}/g, (memLength.length > 1) ?  'các bạn' : 'bạn')
			.replace(/\{soThanhVien}/g, memLength.join(', '))
			.replace(/\{threadName}/g, threadName);

			if (existsSync(path)) mkdirSync(path, { recursive: true });

			if (existsSync(pathGif)) formPush = { body: msg, attachment: createReadStream(pathGif), mentions }
			else formPush = { body: msg, mentions }

			return api.sendMessage(formPush, threadID);
		} catch (e) { return console.log(e) };
	}
        }