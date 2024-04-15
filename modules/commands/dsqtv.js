module.exports.config = {
    name: "ادمنليست",
    version: '1.0.0',
    hasPermssion: 0,
    credits: "𝒍𝒊𝒏𝒖𝒙",
    description: "قائمة مسؤولين القروب",
    commandCategory: "🛡𝗚𝗥𝗢𝗨𝗣🛡",
    usages: "dsqtv",
    cooldowns: 5,
    dependencies: []
};

module.exports.run = async function({ api, event, args, Users }) {
    /*try {
        var threadInfo = await api.getThreadInfo(args[0]);
    } catch (e) {
        var threadInfo = await api.getThreadInfo(event.threadID);
    }*/
    var threadInfo = await api.getThreadInfo(event.threadID);
    let qtv = threadInfo.adminIDs.length;
    var listad = '';
    var qtv2 = threadInfo.adminIDs;
    var fs = global.nodemodule["fs-extra"];
    dem = 1;
    for (let i = 0; i < qtv2.length; i++) {
        const info = (await api.getUserInfo(qtv2[i].id));
        const name = info[qtv2[i].id].name;
        listad += '' + ${dem++} + '. ' + name + '\n';
    }

    api.sendMessage(
        قائمة المسؤولين ${qtv} تشمل:\n${listad},
        event.threadID,
        event.messageID
    );
};