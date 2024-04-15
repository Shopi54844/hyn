/** Mod lại module "bot.js" nếu muốn nó hiển thị ảnh **/
/** Đổi Credit ? Bọn t đã không mã hóa cho mà edit rồi thì tôn trọng nhau tý đi ¯\_(ツ)_/¯ **/
module.exports.config = {
  name: "movie",
  version: "1.0.0",
	hasPermssion: 0,
	credits: "HChong",
	description: "لسته بقائمه افلام",
	commandCategory: "اشياء",
	cooldowns: 1
};

module.exports.run = ({ event, api }) => api.sendMessage(`
اختار القسم :

- دراما  🙇
- فانتازيا 🙎
- غموض  😱
- رعب 🧖
- انميشن 🧗
- انمي 🧚
- رومانسية  🙈
- اكشن 🪂
- كوميدي 🤹
- جريمه 🧔
- مغامرات 🚵
- حرب👮\n
ضع "." قبل الكلمة ولا تضع الايموجي
`, event.threadID, event.messageID);