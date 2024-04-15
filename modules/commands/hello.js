module.exports.config = {
    name: "hello",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "Kanichi",
    description: "",
    commandCategory: "الردود",
    usages: "",
    cooldowns: 0,
    denpendencies: {
        "fs": "",
        "request": ""
    }
};
module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/noprefix/`;
    if (!fs.existsSync(dirMaterial + "noprefix")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "hello.gif")) request("https://i.pinimg.com/originals/23/19/15/2319154c02c001f8a583703689de9048.gif").pipe(fs.createWriteStream(dirMaterial + "hello.gif"));
}
module.exports.handleEvent = async ({ event, api, Currencies,Users, args, utils, global, client }) => {
    const fs = require("fs");
    let name = await Users.getNameUser(event.senderID)
    var msg = {
                body: `Chào bạn ${name}, chúc bạn một ngày mới tốt lành ❤️`,
                attachment: fs.createReadStream(__dirname + `/noprefix/hello.gif`)
            }
    if (event.body.toLowerCase() == "hello"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "helo"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "chào"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "lô"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "lo"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
        };
module.exports.run = async ({ event, api, Currencies, args, utils }) => {
return api.sendMessage("Dùng sai cách rồi lêu lêu",event.threadID)
    }
