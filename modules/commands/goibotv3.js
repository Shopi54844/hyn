module.exports.config = {
    name: "goibotv2",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "ManhG",
    description: "Gọi Bot Version 3",
    commandCategory: "المطور",
    usages: "",
    cooldowns: 2,
    denpendencies: {}
};

module.exports.handleReply = async function({ api, args, Users, event, handleReply }) {
    var name = await Users.getNameUser(event.senderID);
    switch (handleReply.type) {
        case "reply":
            {
                var idad = global.config.ADMINBOT;
                for (let ad of idad) {
                    api.sendMessage({
                        body: "حياتي 💜" + name + ":\n" + event.body,
                        mentions: [{
                            id: event.senderID,""
                            tag: name
                        }]
                    }, ad, (e, data) => global.client.handleReply.push({
                        name: this.config.name,
                        messageID: data.messageID,
                        messID: event.messageID,
                        author: event.senderID,
                        id: event.threadID,
                        type: "goibot"
                    }))
                }
                break;
            }
        case "goibot":
            {
                api.sendMessage({ body: `${event.body}`, mentions: [{ tag: name, id: event.senderID }] }, handleReply.id, (e, data) => global.client.handleReply.push({
                    name: this.config.name,
                    author: event.senderID,
                    messageID: data.messageID,
                    type: "reply"
                }), handleReply.messID);
                break;
            }
    }
};


module.exports.handleEvent = async({ event, api, Users, Threads }) => {
    var { threadID, messageID, body, senderID } = event;
    if (senderID == global.data.botID) return;

    const moment = require("moment-timezone");
    var time = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss D/MM/YYYY");
    let name = await Users.getNameUser(event.senderID);
    var idbox = event.threadID;
    let uidUser = event.senderID;
    let dataThread = await Threads.getData(event.threadID);
    let threadInfo = dataThread.threadInfo;
    const listAdmin = global.config.ADMINBOT;

    var tl = [
        "احبك 💜", "هلو بالحلو :3", "شبيك زعلان ؟?",
        "موجود  💜. hmm...",
        ` ` + ", استخدام (تقرير) للاتصال بالمسؤول!",
        `${name}` + ", هلو يروحي",
        ` ` + " جان اسمي ساره هسه صار هاتو فلازم تصيحلي بأسمي 😢",
        `${name}` + ", احبك ❤",
        ` ` + " عنددي اسم تراا",
        ` ` + ", اذا صحتني بأسمي راح ارد :3",
        ` ` + ", !!!!!!",
        `${name}` + ", حياتي 💜",
        ` ` + " وخر عني",
        ` ` + " غير يستقر ويصيحلي بأسمي",
        ` ` + " ترا عندددددي أسم",
        ` ` + " توكل "
        ` ` + " بيش الثكل ينباع "
        ` ` + " توكل "
    ];
    var rand = tl[Math.floor(Math.random() * tl.length)];
    // Gọi bot
    var arr = ["بوت", "هاتو","ساره","سارة", "bot đâu"];
    arr.forEach(value => {
        let str = value[0].toUpperCase() + value.slice(1);
    if (body === value.toUpperCase() | body === value | str === body) {
            let nameT = threadInfo.threadName;
            modules = "------ Gọi bot ------\n";
            console.log(modules, value + "|", nameT);
            api.sendMessage(rand, threadID, () => {
                var idad = listAdmin;
                for (var idad of listAdmin) {
                    api.sendMessage(``,
                        idad, (error, info) =>
                        global.client.handleReply.push({
                            name: this.config.name,
                            author: senderID,
                            messageID: info.messageID,
                            messID: messageID,
                            id: idbox,
                            type: "goibot"
                        })
                    );
                }
            });
        }
    });
}

module.exports.run = async({ event, api }) => {
    return api.sendMessage("( \\_/)                                                                            ( •_•)                                                                            // >🧠                                                            نطيني عقلك خلحطه برأسك. \n هل تعرف ما إذا كان الأمر بدون علامة ؟?", event.threadID)
}