module.exports.config = {
	name: "lyrics",
    version: "1.0.0", 
	hasPermssion: 0,
	credits: "manhG",
	description: "ينطيك كلمات الاغنية",
	commandCategory: "خدمات",
	usages: "اسم الاغنيه",
	cooldowns: 5,
    dependencies: {
        "lyrics-finder":""
    }
};
module.exports.run = async function ({ api, args, event }) {
    const lyricsFinder = require('lyrics-finder');
    var artists = args.join(" "), titles = args.join(" ");
    (async function(artist, title) {
        let lyrics = await lyricsFinder(artist, title) || "ما لكيتها!";
        api.sendMessage(`${lyrics}`, event.threadID, event.messageID);
    })(artists, titles);
}