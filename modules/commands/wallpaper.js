module.exports.config = {
	name: "خلفيات",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "S H A D Y",
	description: "",
	commandCategory: "💗𝗔𝗡𝗜𝗠𝗘💗",
	usages: " ",
	cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	axios.get('https://jrt-api.nguyenhaidang.ml/wallpaper').then(res => {
	let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({
						attachment: fs.createReadStream(__dirname + `/cache/shiba.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/shiba.${ext}`), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/shiba.${ext}`)).on("close", callback);
			})
  }