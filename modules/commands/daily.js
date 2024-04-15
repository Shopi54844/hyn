module.exports.config = {
  name: "راتب",
  version: "1.0",
  hasPermssion: 0,
  credits: "sumeda",
  description: "ينطيك راتب حسب مستواك بالبوت كل 12 ساعة .",
  commandCategory: "الاموال",
  usages: " ",
  cooldowns: 43200,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
        const data = await api.getThreadInfo(event.threadID);
        const storage = [], exp = [];
        for (const value of data.userInfo) storage.push({"id" : value.id, "name": value.name});
        for (const user of storage) {
            const countMess = await Currencies.getData(user.id);
            exp.push({"name" : user.name, "exp": (typeof countMess.exp == "undefined") ? 0 : countMess.exp, "uid": user.id});
        }
        exp.sort((a, b) => {
            if (a.exp > b.exp) return -1;
            if (a.exp < b.exp) return 1;
            if (a.id > b.id) return 1;
		    if (a.id < b.id) return -1;
        });
        const rank = exp.findIndex(info => parseInt(info.uid) == parseInt(`${(event.type == "message_reply") ? event.messageReply.senderID : event.senderID}`)) + 1;
        const infoUser = exp[rank - 1];
  const dataUser = await api.getUserInfo(event.senderID);
    const name = dataUser[event.senderID].name;
    var tle2 = Math.floor(infoUser.exp) /2;
await Currencies.increaseMoney(event.senderID, parseInt(tle2)); 
  var callback = () => api.sendMessage({body: ` ${name} 𓆩💗𓆪 \n• فلوسك لليوم : ${tle2}$ • 💰💸`,attachment: fs.createReadStream(__dirname + "/cache/1.gif")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.gif"),event.messageID); 
       return request(encodeURI(`https://www.reactiongifs.com/wp-content/uploads/2013/12/money.gif`)).pipe(fs.createWriteStream(__dirname+'/cache/1.gif')).on('close',() => callback());
   };

