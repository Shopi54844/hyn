module.exports.config = {
  name: "fbuid",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "HungCho",
  description: "ايدي حسابك.",
  commandCategory: "اوامر الكروبات",
  usages: "",
  cooldowns: 1,
  dependencies: {
    "fb-downloads":""
  }
}

module.exports.run = async ({ api, event, args }) => {
  var { threadID, messageID } = event;
  var tool = global.nodemodule["fb-downloads"];
  
  try {
    var id = await tool.findUid(args[0] || event.messageReply.body);
    return api.sendMessage(id, event.threadID, event.messageID)
    console.log(id)
  }
  catch (e) {
    return api.sendMessage("المستخدم غير موجود!", event.threadID, event.messageID)
  }
}
