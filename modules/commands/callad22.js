const { getStreamsFromAttachment } = global.utils;
const mediaTypes = ["photo", 'png', "animated_image", "video", "audio"];

module.exports = {
	config: {
		name: "اتصال",
		version: "1.5",
		author: "",
		countDown: 5,
		role: 0,
		shortDescription: {
			vi: "gửi tin nhắn về admin bot",
			en: "ارسال رسالة الي ادمن البوت"
		},
		longDescription: {
			vi: "gửi báo cáo, góp ý, báo lỗi,... của bạn về admin bot",
			en: "إرسال تقرير ، ملاحظات ، خطأ,... لادمن البوت"
		},
		category: "contacts admin",
		guide: {
			vi: "   {pn} <tin nhắn>",
			en: "   {pn} <رسالة>"
		}
	},

	langs: {
		vi: {
			missingMessage: "Vui lòng nhập tin nhắn bạn muốn gửi về admin",
			sendByGroup: "\n- Được gửi từ nhóm: %1\n- Thread ID: %2",
			sendByUser: "\n- Được gửi từ người dùng",
			content: "\n\nNội dung:\n─────────────────\n%1\n─────────────────\nPhản hồi tin nhắn này để gửi tin nhắn về người dùng",
			success: "Đã gửi tin nhắn của bạn về %1 admin thành công!\n%2",
			failed: "Đã có lỗi xảy ra khi gửi tin nhắn của bạn về %1 admin\n%2",
			reply: "📍 Phản hồi từ admin %1:\n─────────────────\n%2\n─────────────────\nPhản hồi tin nhắn này để tiếp tục gửi tin nhắn về admin",
			replySuccess: "Đã gửi phản hồi của bạn về admin thành công!",
			feedback: "📝 Phản hồi từ người dùng %1:\n- User ID: %2%3\n\nNội dung:\n─────────────────\n%4\n─────────────────\nPhản hồi tin nhắn này để gửi tin nhắn về người dùng",
			replyUserSuccess: "Đã gửi phản hồi của bạn về người dùng thành công!",
			noAdmin: "Hiện tại bot chưa có admin nào"
		},
		en: {
			missingMessage: "Please enter the message you want to send to admin",
			sendByGroup: "\n- تم الارسال من جروب: %1\n- معرف الموضوع: %2",
			sendByUser: "\n- مرسل من المستخدم ",
			content: "\n\nContent:\n─────────────────\n%1\n─────────────────\nرد ععلي هذه الرسالة لارسال رسالة الي المستخدم",
			success: "تم ارسال رسالتك الي %1 ادمن بنجاح!\n%2",
			failed: "حدث خطأ أثناء إرسال رسالتك إلى %1 ادمن\n%2",
			reply: "📍 رد من الادمن %1:\n─────────────────\n%2\n─────────────────\nالرد على هذه الرسالة لمواصلة إرسال الرسالة إلى المسؤول",
			replySuccess: "أرسل ردك إلى المسؤول بنجاح!",
			feedback: "📝 ردود الفعل من المستخدم %1:\n- آي دي المستخدم: %2%3\n\nالمحتوي:\n─────────────────\n%4\n─────────────────\nرد على هذه الرسالة لإرسال رسالة إلى المستخدم",
			replyUserSuccess: "Sent your reply to user successfully!",
			noAdmin: "Bot has no admin at the moment"
		}
	},

	onStart: async function ({ args, message, event, usersData, threadsData, api, commandName, getLang }) {
		const { config } = global.GoatBot;
		if (!args[0])
			return message.reply(getLang("missingMessage"));
		const { senderID, threadID, isGroup } = event;
		if (config.adminBot.length == 0)
			return message.reply(getLang("noAdmin"));
		const senderName = await usersData.getName(senderID);
		const msg = "==📨️ CALL ADMIN 📨️=="
			+ `\n- User Name: ${senderName}`
			+ `\n- User ID: ${senderID}`
			+ (isGroup ? getLang("sendByGroup", (await threadsData.get(threadID)).threadName, threadID) : getLang("sendByUser"));

		const formMessage = {
			body: msg + getLang("content", args.join(" ")),
			mentions: [{
				id: senderID,
				tag: senderName
			}],
			attachment: await getStreamsFromAttachment(
				[...event.attachments, ...(event.messageReply?.attachments || [])]
					.filter(item => mediaTypes.includes(item.type))
			)
		};

		const successIDs = [];
		const failedIDs = [];

		for (const uid of config.adminBot) {
			try {
				const messageSend = await api.sendMessage(formMessage, uid);
				successIDs.push(uid);
				global.GoatBot.onReply.set(messageSend.messageID, {
					commandName,
					messageID: messageSend.messageID,
					threadID,
					messageIDSender: event.messageID,
					type: "userCallAdmin"
				});
			}
			catch (err) {
				failedIDs.push(uid);
			}
		}

		let msg2 = "";
		if (successIDs.length > 0)
			msg2 += getLang("success", successIDs.length, successIDs.reduce((a, b) => a + `\n + ${b}`, "")) + "\n";
		if (failedIDs.length > 0)
			msg2 += getLang("failed", failedIDs.length, failedIDs.reduce((a, b) => a + `\n + ${b}`, ""));
		return message.reply(msg2);
	},

	onReply: async ({ args, event, api, message, Reply, usersData, commandName, getLang }) => {
		const { type, threadID, messageIDSender } = Reply;
		const senderName = await usersData.getName(event.senderID);
		const { isGroup } = event;

		switch (type) {
			case "userCallAdmin": {
				const formMessage = {
					body: getLang("reply", senderName, args.join(" ")),
					mentions: [{
						id: event.senderID,
						tag: senderName
					}],
					attachment: await getStreamsFromAttachment(
						event.attachments.filter(item => mediaTypes.includes(item.type))
					)
				};

				api.sendMessage(formMessage, threadID, (err, info) => {
					if (err)
						return message.err(err);
					message.reply(getLang("replyUserSuccess"));
					global.GoatBot.onReply.set(info.messageID, {
						commandName,
						messageID: info.messageID,
						messageIDSender: event.messageID,
						threadID: event.threadID,
						type: "adminReply"
					});
				}, messageIDSender);
				break;
			}
			case "adminReply": {
				let sendByGroup = "";
				if (isGroup) {
					const { threadName } = await api.getThreadInfo(event.threadID);
					sendByGroup = getLang("sendByGroup", threadName, event.threadID);
				}
				const formMessage = {
					body: getLang("feedback", senderName, event.senderID, sendByGroup, args.join(" ")),
					mentions: [{
						id: event.senderID,
						tag: senderName
					}],
					attachment: await getStreamsFromAttachment(
						event.attachments.filter(item => mediaTypes.includes(item.type))
					)
				};

				api.sendMessage(formMessage, threadID, (err, info) => {
					if (err)
						return message.err(err);
					message.reply(getLang("replySuccess"));
					global.GoatBot.onReply.set(info.messageID, {
						commandName,
						messageID: info.messageID,
						messageIDSender: event.messageID,
						threadID: event.threadID,
						type: "userCallAdmin"
					});
				}, messageIDSender);
				break;
			}
			default: {
				break;
			}
		}
	}
};