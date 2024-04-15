module.exports.config = {
	name: "القائمة",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "S H A D Y",
	description: "اوامر البوت",
	usages: "الاوامر",
	commandCategory: "G R O U P",
	cooldowns: 5
};

module.exports.handleReply = async function ({ api, event, handleReply }) {
	let num = parseInt(event.body.split(" ")[0].trim());
	(handleReply.bonus) ? num -= handleReply.bonus : num;
	let msg = "";
	let data = handleReply.content;
	let check = false;
	if (isNaN(num)) msg = "رد علي الرساله برقم العنوان لاظهار الاوامر";
	else if (num > data.length || num <= 0) msg = "يا حمار الرقم يلي اخترته مش بالقايمه اصلا 😂😂";
	else {
		const { commands } = global.client;
		let dataAfter = data[num-=1];
		if (handleReply.type == "cmd_info") {
			let command_config = commands.get(dataAfter).config;
			msg += ` 『  ${command_config.commandCategory.toUpperCase()}   』   \n`;
			msg += `\nاسم الامر: ${dataAfter}`;
			msg += `\nشرح: ${command_config.description}`;
			msg += `\nاستخدام: ${(command_config.usages) ? command_config.usages : ""}`;
			msg += `\nالوقت: ${command_config.cooldowns || 5}s`;
			msg += `\nبواسطه: ${(command_config.hasPermssion == 0) ? "User" : (command_config.hasPermssion == 1) ? "Group administrator" : "Bot admin"}`;
      msg += `\n✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏`
			msg += `\n\n» Module code by ${command_config.credits} «`;
		} else {
			check = true;
			let count = 0;
			msg += `» ${dataAfter.group.toUpperCase()} «\n`;

			dataAfter.cmds.forEach(item => {
				msg += `\n ${count+=1}. » ${item}: ${commands.get(item).config.description}`;
			})
			msg += "\n\n╭──────╮\n        100 𝘾𝙤𝙢𝙢𝙖𝙣𝙙𝙨 \n╰──────╯ message by number to view command details and how to use command";
		}
	}
	const axios = require('axios');
	const fs = require('fs-extra');
	const img = ["https://i.postimg.cc/ZqZXTYhy/Anime-account-5-9k-on-Instagram-S4-0-JPG-1.jpg", "https://i.postimg.cc/Rh9WdHrZ/47k-on-Instagram-3-JPG-2.jpg", "https://i.postimg.cc/tT4fxrJq/Anime-Page-26k-on-Instagram-posting-JPG.jpg", "https://i.postimg.cc/SKCQPxf2/17-4k-on-Instagram-Your-favorite-0-JPG.jpg", "https://i.postimg.cc/VNV9K44L/47k-on-Instagram-0-JPG.jpg", "https://i.postimg.cc/NG1TXgh0/47k-on-Instagram-1-JPG-6.jpg", "https://i.postimg.cc/xCmmtQct/47k-on-Instagram-1-JPG-3.jpg", "https://i.postimg.cc/zv1gQQh5/47k-on-Instagram-1-JPG-4.jpg", "https://i.postimg.cc/NF7Hvx8X/47k-on-Instagram-1-JPG-5.jpg", "https://i.postimg.cc/y6bqFz0w/Anime-account-5-9k-on-Instagram-Fo-JPG.jpg", "https://i.postimg.cc/Vv3H2mRv/Arturia-Pendragon-on-Instagram-fatezero-JPG-3.jpg"]
	var path = __dirname + "/cache/menu.jpg"
	var rdimg = img[Math.floor(Math.random() * img.length)]; 
	const imgP = []
	let dowloadIMG = (await axios.get(rdimg, { responseType: "arraybuffer" } )).data; 
	fs.writeFileSync(path, Buffer.from(dowloadIMG, "utf-8") );
	imgP.push(fs.createReadStream(path))
	var msgg = {body: msg, attachment: imgP}
	api.unsendMessage(handleReply.messageID);
	return api.sendMessage(msgg, event.threadID, (error, info) => {
		if (error) console.log(error);
		if (check) {
			global.client.handleReply.push({
				type: "cmd_info",
				name: this.config.name,
				messageID: info.messageID,
				content: data[num].cmds
			})
		}
	}, event.messageID);
}

module.exports.run = async function({ api, event, args }) {
	const { commands } = global.client;
	const { threadID, messageID } = event;
	const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
	const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
	const axios = require('axios');
	const fs = require('fs-extra');
	const imgP = []
	const img = ["https://i.postimg.cc/ZqZXTYhy/Anime-account-5-9k-on-Instagram-S4-0-JPG-1.jpg"
, "https://i.postimg.cc/Rh9WdHrZ/47k-on-Instagram-3-JPG-2.jpg"
, "https://i.postimg.cc/tT4fxrJq/Anime-Page-26k-on-Instagram-posting-JPG.jpg"
, "https://i.postimg.cc/SKCQPxf2/17-4k-on-Instagram-Your-favorite-0-JPG.jpg"
, "https://i.postimg.cc/VNV9K44L/47k-on-Instagram-0-JPG.jpg"
, "https://i.postimg.cc/NG1TXgh0/47k-on-Instagram-1-JPG-6.jpg"
, "https://i.postimg.cc/xCmmtQct/47k-on-Instagram-1-JPG-3.jpg"
, "https://i.postimg.cc/zv1gQQh5/47k-on-Instagram-1-JPG-4.jpg"
, "https://i.postimg.cc/NF7Hvx8X/47k-on-Instagram-1-JPG-5.jpg"
, "https://i.postimg.cc/y6bqFz0w/Anime-account-5-9k-on-Instagram-Fo-JPG.jpg"
, "https://i.postimg.cc/Vv3H2mRv/Arturia-Pendragon-on-Instagram-fatezero-JPG-3.jpg"]
	var path = __dirname + "/cache/menu.jpg"
	var rdimg = img[Math.floor(Math.random() * img.length)]; 

   	let dowloadIMG = (await axios.get(rdimg, { responseType: "arraybuffer" } )).data; 
        fs.writeFileSync(path, Buffer.from(dowloadIMG, "utf-8") );
        imgP.push(fs.createReadStream(path))
	const command = commands.values();
	var group = [], msg = "» List of commands available «\n";
	let check = true, page_num_input = "";
	let bonus = 0;

	for (const commandConfig of command) {
		if (!group.some(item => item.group.toLowerCase() == commandConfig.config.commandCategory.toLowerCase())) group.push({ group: commandConfig.config.commandCategory.toLowerCase(), cmds: [commandConfig.config.name] });
		else group.find(item => item.group.toLowerCase() == commandConfig.config.commandCategory.toLowerCase()).cmds.push(commandConfig.config.name);
	}

	if (args[0] && ["all", "-a"].includes(args[0].trim())) {
		let all_commands = [];
		group.forEach(commandGroup => {
			commandGroup.cmds.forEach(item => all_commands.push(item));
		});
		let page_num_total = Math.ceil(all_commands.length / 2222222222);
		if (args[1]) {
			check = false;
			page_num_input = parseInt(args[1]);
			if (isNaN(page_num_input)) msg = "رد علي الرساله برقم العنوان لاظهار الاوامر";
			else if (page_num_input > page_num_total || page_num_input <= 0) msg = "يا حمار الرقم يلي اخترته مش بالقايمه اصلا 😂😂";
			else check = true;
		}
		if (check) {
		index_start = (page_num_input) ? (page_num_input * 2222222222) - 2222222222 : 0;
			bonus = index_start;
			index_end = (index_start + 2222222222 > all_commands.length) ? all_commands.length : index_start + 2222222222;
			all_commands = all_commands.slice(index_start, index_end);
			all_commands.forEach(e => {
				msg += `\n${index_start+=1}. » ${e}: ${commands.get(e).config.description}`;
			})
			msg += `\n\nPage ${page_num_input || 1}/${page_num_total}`;
			msg +=``
			msg += "\n╭──────╮\n       100 𝘾𝙤𝙢𝙢𝙖𝙣𝙙𝙨 \n╰──────╯message by number to view command details and how to use command";
		}
		var msgg = {body: msg, attachment: imgP}
		return api.sendMessage(msgg, threadID, (error, info) => {
			if (check) {
				global.client.handleReply.push({
					type: "cmd_info",
					bonus: bonus,
					name: this.config.name,
					messageID: info.messageID,
					content: all_commands
				})
			}
		}, messageID)
	}

	let page_num_total = Math.ceil(group.length / 2222222222);
	if (args[0]) {
		check = false;
		page_num_input = parseInt(args[0]);
		if (isNaN(page_num_input)) msg = "رد علي الرساله برقم العنوان لاظهار الاوامر";
		else if (page_num_input > page_num_total || page_num_input <= 0) msg = "يا حمار الرقم يلي اخترته مش بالقايمه اصلا 😂😂";
		else check = true;
	}
	if (check) {
		index_start = (page_num_input) ? (page_num_input * 2222222222) - 2222222222 : 0;
		bonus = index_start;
		index_end = (index_start + 2222222222 > group.length) ? group.length : index_start + 2222222222;
		group = group.slice(index_start, index_end);
		group.forEach(commandGroup => msg += `\n${index_start+=1}. » ${commandGroup.group.toUpperCase()} `);
		msg += `\n\nPage【${page_num_input || 1}/${page_num_total}】`;
		msg +=``
		msg += `\n╭──────╮\n       100𝘾𝙤𝙢𝙢𝙖𝙣𝙙𝙨\n╰──────╯ message by number to view commands by category`;
	}
	var msgg = {body: msg, attachment: imgP}
	return api.sendMessage(msgg, threadID, async (error, info) => {
		global.client.handleReply.push({
			name: this.config.name,
			bonus: bonus,
			messageID: info.messageID,
			content: group
		})
	});
    }