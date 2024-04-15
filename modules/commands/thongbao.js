const fs = require('fs');
const request = require('request');

module.exports.config = {
    name: "اشعار",
    version: "1.0.0",
    hasPermssion: 2,
    credits: "S H A D Y",
    description: "",
    commandCategory: "المطور",
    usages: "",
    cooldowns: 5,
}

let atmDir = [];

const getAtm = (atm, body) => new Promise(async (resolve) => {
    let msg = {}, attachment = [];
    msg.body = body;
    for(let eachAtm of atm) {
        await new Promise(async (resolve) => {
            try {
                let response =  await request.get(eachAtm.url),
                    pathName = response.uri.pathname,
                    ext = pathName.substring(pathName.lastIndexOf(".") + 1),
                    path = __dirname + `/cache/${eachAtm.filename}.${ext}`
                response
                    .pipe(fs.createWriteStream(path))
                    .on("close", () => {
                        attachment.push(fs.createReadStream(path));
                        atmDir.push(path);
                        resolve();
                    })
            } catch(e) { console.log(e); }
        })
    }
    msg.attachment = attachment;
    resolve(msg);
})

module.exports.handleReply = async function ({ api, event, handleReply, Users, Threads }) {
    const moment = require("moment-timezone");
      var gio = moment.tz("Asia/Manila").format("DD/MM/YYYY - HH:mm:s");
    const { threadID, messageID, senderID, body } = event;
    let name = await Users.getNameUser(senderID);
    switch (handleReply.type) {
        case "sendnoti": {
            let text = `== User Reply ==\n\n『Reply』 : ${body}\n\n\nUser Name ${name}  From Group ${(await Threads.getInfo(threadID)).threadName || "Unknow"}`;
            if(event.attachments.length > 0) text = await getAtm(event.attachments, `== User Reply ==\n\n『Reply』 : ${body}\n\n\nUser Name: ${name} From Group ${(await Threads.getInfo(threadID)).threadName || "Unknow"}`);
            api.sendMessage(text, handleReply.threadID, (err, info) => {
                atmDir.forEach(each => fs.unlinkSync(each))
                atmDir = [];
                global.client.handleReply.push({
                    name: this.config.name,
                    type: "reply",
                    messageID: info.messageID,
                    messID: messageID,
                    threadID
                })
            });
            break;
        }
        case "reply": {
            let text = `»🔥⛩️ اشعار من المطور  🔥⛩️«\n\n𝑵 \n\n الرساله e』 : ${body}\n\n\n اسم المطور e』 ${name}\n\nرد علي الرساله اذا اردت الاستجابه  `;
            if(event.attachments.length > 0) text = await getAtm(event.attachments, `${body}»🔥⛩️ اشعار من المطور  🔥⛩️«\n\n𝑰𝑵 \n\ اسم المطور me』 ${name}\n\n رد علي الرساله اذا اردت الاستجابه للاشعار.`);
            api.sendMessage(text, handleReply.threadID, (err, info) => {
                atmDir.forEach(each => fs.unlinkSync(each))
                atmDir = [];
                global.client.handleReply.push({
                    name: this.config.name,
                    type: "sendnoti",
                    messageID: info.messageID,
                    threadID
                })
            }, handleReply.messID);
            break;
        }
    }
}

module.exports.run = async function ({ api, event, args, Users }) {
    const moment = require("moment-timezone");
      var gio = moment.tz("Asia/Manila").format("DD/MM/YYYY - HH:mm:s");
    const { threadID, messageID, senderID, messageReply } = event;
    if (!args[0]) return api.sendMessage("اكتب الرساله", threadID);
    let allThread = global.data.allThreadID || [];
    let can = 0, canNot = 0;
    let text = `»🔥⛩️ اشعار من المطور  🔥⛩️«\n\n\n  ${args.join(" ")}\n من: ${await Users.getNameUser(senderID)} `;
    if(event.type == "message_reply") text = await getAtm(messageReply.attachments, `»🔥⛩️ اشعار من المطور  🔥⛩️«\n\n\n ${args.join(" ")}\n من: ${await Users.getNameUser(senderID)}`);
    await new Promise(resolve => {
        allThread.forEach((each) => {
            try {
                api.sendMessage(text, each, (err, info) => {
                    if(err) { canNot++; }
                    else {
                        can++;
                        atmDir.forEach(each => fs.unlinkSync(each))
                        atmDir = [];
                        global.client.handleReply.push({
                            name: this.config.name,
                            type: "sendnoti",
                            messageID: info.messageID,
                            messID: messageID,
                            threadID
                        })
                        resolve();
                    }
                })
            } catch(e) { console.log(e) }
        })
    })
    api.sendMessage(`ارسلت الي ${can} مجموعه, لم ترسل الي${canNot} مجموعه`, threadID);
           }