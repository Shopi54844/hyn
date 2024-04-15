module.exports.config = {
        name: "calldong",
        version: "0.0.1",
        hasPermssion: 0,
        credits: "HungCho",
        description: "تحقق من المبلغ الخاص بك أو الشخص الذي تم وضع علامة عليه",
        commandCategory: "Báo Lỗi Về Bot",
        usages: "baka",
        cooldowns: 5,
        info: [
                {
                        key: 'Tag',
                        prompt: 'اتركه فارغًا أو ضع علامة على شخص ما ، تكدر تسوي اكثر من تاك n$                        type: 'Văn Bản',
                        example: '@Mirai-chan'
                }
        ]
};

module.exports.run = async function({ api, event, args, Currencies, utils, Users,__GLOB$
  var content = args.join(" ")
  let name = (await api.getUserInfo(event.senderID))[event.senderID].name;
  let url = (await api.getUserInfo(event.senderID))[event.senderID].profileUrl;
 const moment = require("moment");
var time = moment.tz("Asia/Baghdad").format("HH:MM:ss L");
 if (!content) api.sendMessage("لم تدخل الرسالة !", event.threadID, event.messag$
  else api.sendMessage(`💦المستخدم : ${name} أرسل رسالة !\n❄️URL: ${url}\n🐧 الوقت : ${time}$
          }