 module.exports.config = {
  name: "المطور",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "JRT",
  description: "معلومات عن مطور البوت.",
  commandCategory: "المطور",
  usages: "adm",
  cooldowns: 5,
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
  var link = [
  "https://www.indiewire.com/wp-content/uploads/2017/02/10wrp4zrhzcnjka7dklcxz6ebhd.jpg"
  ];
  var callback = () => api.sendMessage({body:`★  المطور ★
الاسم:محمد 
🎂تاريخ الولادة:26/08/2005    
المدينة:المريخ 
الإهتمامات: افلام و انمي, العاب الباتل رويل 🎮 ,...
فيس https://www.facebook.com/profile.php
😶‍🌫️النمط : 🙂🤦‍♂️: 
 I`,attachment: 
fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
   };
