module.exports.config = {
    name: "فحص",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "D-Jukie",
    description: "ايديك وعدد رسائلك ونسبه تفاعل \n عدد الرسائل يكون بعد انضمام البوت ",
    commandCategory: "",
    usages: "[tag/reply/all/all number/all box]",
    cooldowns: 5
};
module.exports.onLoad = function() {
    const { writeFileSync, existsSync } = require('fs-extra');
    const { resolve } = require("path");
    const pathA = require('path');
    const path = pathA.join(__dirname, 'cache', 'checktt.json');
    if (!existsSync(path)) {
        const obj = []
        writeFileSync(path, JSON.stringify(obj, null, 4));
    }
}
module.exports.handleEvent = async({ event, Users }) => {
    const { threadID, senderID, body } = event;
    const fs = require("fs");
    const pathA = require('path');
    const thread = require('./cache/checktt.json');
    const path = pathA.join(__dirname, 'cache', 'checktt.json');
    if(event.isGroup == false) return;
    if (thread.some(i => i.threadID == threadID) == false) {
        const data = [];
        for (let user of event.participantIDs) {
            var name = (await Users.getData(user)).name;
            var id = user;
            var exp = 0;
            if(name !== undefined && name != 'مستخدم فيسبوك ') {
                data.push({ name, id , exp })
            }
        }
        thread.push({ threadID, data: data });
        fs.writeFileSync(path, JSON.stringify(thread, null, 2));
    }
    else {
        var threadData = thread.find(i => i.threadID == threadID && i.threadID !== undefined)
        if (threadData.data.some(i => i.id == senderID) == false) {
            var name = (await Users.getData(senderID)).name;
            var id = senderID;
            var exp = 0;
            threadData.data.push({ name, id, exp });
            fs.writeFileSync(path, JSON.stringify(thread, null, 2));
        }
        else {
            var userData = threadData.data.find(i => i.id == senderID);
            userData.exp = userData.exp + 1;
            fs.writeFileSync(path, JSON.stringify(thread, null, 2));
        }
    }
}
module.exports.run = async function ({ args, api, event }) {
    const { threadID, senderID, messageID, type, mentions } = event;
    var mention = Object.keys(mentions);
    const thread = require('./cache/checktt.json');
    const data = thread.find(i => i.threadID == threadID)
    if (args[0] == "all") {
        var msg = "", exp = [], i = 1, count = 0
        for(const user of data.data) {
            exp.push({ name: user.name, exp: user.exp, id: user.id });
        }
        exp.sort(function (a, b) { return b.exp - a.exp });
        var limit = args[2] || 20;
        var page = 1;
            page = parseInt(args[1]) || 1;
            page < -1 ? page = 1 : "";
            var msg = "[==== عدد رسائل الاعضاء ===]\n\n";
            var numPage = Math.ceil(exp.length/limit);
            for(var i = limit*(page - 1); i < limit*(page-1) + limit; i++){
                if(i >= exp.length) break;
                let dataInfo = exp[i];
                msg += `[${i+1}]: ${dataInfo.name}: ${dataInfo.exp} رسالة\n`
            }
            msg += `\n--صفحة ${page}/${numPage}--\غير  عدد الصفحات${global.config.PREFIX} مستخدم`
            return api.sendMessage(msg, threadID, messageID);
    }
    else 
        if(type == "message_reply") { mention[0] = event.messageReply.senderID }
        if (mention[0]) {
            var exp = [], count = 0
            for(const user of data.data) {
                count += user.exp
                exp.push({ name: user.name, exp: user.exp, id: user.id });
            }
            exp.sort(function (a, b) { return b.exp - a.exp });
            const rank = exp.findIndex(i => i.id == mention[0])
		for (var i = 0; i < Object.keys(event.mentions).length; i++)           
            return api.sendMessage(`👤الاسم: ${exp[rank].name}\n\n🏆المستوى : ${rank + 1}\n\n💹 الايدي : ${Object.keys(event.mentions)[i]}\n\n💬الرسائل: ${exp[rank].exp}\n\n💹معدل التفاعل: ${(exp[rank].exp/count*100).toFixed(0)}%`, threadID, messageID);
        }
    else {
        var exp = [], count = 0
        for(const user of data.data) {
            count += user.exp
            exp.push({ name: user.name, exp: user.exp, id: user.id });
        }
        exp.sort(function (a, b) { return b.exp - a.exp });
        const rank = exp.findIndex(i => i.id == senderID);
        return api.sendMessage(`👤الاسم: ${exp[rank].name}\n\n🏆 المستوى : ${rank + 1}\n\n💹 ايديك :${event.senderID}\n\n💬عدد رسائلك : ${exp[rank].exp}\n\n💹 معدل التفاعل: ${(exp[rank].exp/count*100).toFixed(0)}%`, threadID, messageID);
    }
}
