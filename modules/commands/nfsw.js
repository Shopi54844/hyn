module.exports.config = {
	name: "nsfw",
	version: "1.0.0",
	hasPermssion: 1,
	credits: "Mirai Team",
	description: " ",
	commandCategory: "nsfw",
	cooldowns: 5,
};

module.exports.languages = {
    "vi": {
        "returnSuccessEnable": "Đã cho phép thành viên sử dụng lệnh NSFW",
        "returnSuccessDisable": "Đã cấm thành viên sử dụng lệnh NSFW",
        "error": "Đã có lỗi xảy ra, vui lòng thử lại sau"
    },
    "en": {
        "returnSuccessEnable": "تم بنجاح تمكين أمر NSFW لهذه المجموعة",
        "returnSuccessDisable": "تم تعطيل أمر NSFW لهذه المجموعة بنجاح",
        "error": "حدث خطأ. الرجاء معاودة المحاولة في وقت لاحق!"
    }
}

module.exports.run = async function ({ event, api, Threads, getText }) {
    const { threadID, messageID } = event;
    const { getData, setData } = Threads;
    var type;

    try {
        let data = (await getData(threadID)).data || {};
        if (typeof data == "undefined" || data.NSFW == false) {
            data.NSFW = true;
            global.data.threadAllowNSFW.push(threadID);
            type = "on"
        }
        else {
            data.NSFW = false;
            global.data.threadAllowNSFW = global.data.threadAllowNSFW.filter(item => item != threadID);
        }
        await setData(threadID, { data });
        return api.sendMessage((type == "on") ? getText("returnSuccessEnable") : getText("returnSuccessDisable"), threadID, messageID);
    } catch (e) { console.log(e); return api.sendMessage(getText("error"), threadID, messageID) }
}