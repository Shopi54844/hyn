module.exports.config = {
  name: "app",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "ManhG",
  description: " ",
  commandCategory: "المطور",
  usages: "",
  cooldowns: 5,
  dependencies: {
  }
};

module.exports.run = async function ({ api, event, args }) {
  const fs = global.nodemodule["fs-extra"];
  const permission = ["100082754201781"];
	if (!permission.includes(event.senderID)) return api.sendMessage("ماكو داعي تحدث الملف", event.threadID, event.messageID);
  let appstate = api.getAppState();
  // convert JSON object to a string
  const data = JSON.stringify(appstate);
  // write file to disk
  fs.writeFile(`${__dirname}/../../appstate.json`, data, 'utf8', (err) => {
    if (err) {
      return api.sendMessage(`Error writing file: ${err}`, event.threadID);
    } else {
      return api.sendMessage(`تم تحديث الملف بنجاح`, event.threadID);
    }
  });

}
