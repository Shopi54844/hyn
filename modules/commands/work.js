module.exports.config = {
	name: "عملل",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Mirai Team",
	description: "اشتغل وجمع فلوس!",
	commandCategory: "الاموال",
    cooldowns: 5,
    envConfig: {
        cooldownTime: 1200000
    }
};

module.exports.languages = {
    "vi": {
        "cooldown": "Bạn đã làm công việc hôm nay, để tránh kiệt sức hãy quay lại sau: %1 phút %2 giây.",
        "rewarded": "Bạn đã làm công việc %1 và kiếm ra được %2$",
        "job1": "bán vé số",
        "job2": "sửa xe",
        "job3": "lập trình",
        "job4": "hack facebook",
        "job5": "đầu bếp",
        "job6": "thợ hồ",
        "job7": "fake taxi",
        "job8": "gangbang người nào đó",
        "job9": "thợ sửa ống nước may mắn  ( ͡° ͜ʖ ͡°)",
        "job10": "streamer",
        "job11": "bán hàng trực tuyến",
        "job12": "nội trợ",
        "job13": 'bán "hoa"',
        "job14": "tìm jav/hentai code cho SpermLord",
        "job15": "chơi Yasuo và gánh đội của bạn"
    },
    "en": {
        "cooldown": "اليوم انت اشتغلت تعال ورا  : %1 دقيقة %2 و ثانية علمود لا تتعب.",
        "rewarded": "لقد قمت بالعمل %1 وتلقيت : %2$.",
        "job1": "بيع تذاكر اليانصيب",
        "job2": "اصلاح السيارات",
        "job3": "البرمجة",
        "job4": "هكر",
        "job5": "شيف",
        "job6": "االبناء",
        "job7": "تكسي ",
        "job8": "اخراج القمامة",
        "job9": "سباك ( ͡° ͜ʖ ͡°)",
        "job10": "ستريمر",
        "job11": "البيع على الانترنت",
        "job12": "ربة منزل",
        "job13": 'بيع "الازهار"',
        "job14": "لديك عقل",
        "job15": "بيع الملابس",
        "job16": "في مجال كتابة النصوص و المقالات",
        "job17": "في مجال الترجمة",
        "job18": "في مجال إدخال البيانات",
        "job19": "في مجال التحرير والتدقيق اللغوي",
        "job20": "في مجال المساعد الافتراضي",
        "job21": "في مجال تصميم المواقع الإلكترونية",
        "job22": "في مجال التجارة الالكترونية",
        "job23": "في مجال التعليم الالكتروي",
        "job24": "في مجال التدريس",
        "job25": "في مجال الطب",
        "job26": "في مجال الدعارة على الانترنت",
        "job27": "في بارات للدعارة",
        "job28": "في بار دعارة للشواذ",
        "job29": "في مجال العقارات",
        "job30": "في مجال الرهن العقاري",
        
        
    }
}

module.exports.run = async ({ event, api, Currencies, getText }) => {
    const { threadID, messageID, senderID } = event;
    
    const cooldown = global.configModule[this.config.name].cooldownTime;
    let data = (await Currencies.getData(senderID)).data || {};
    if (typeof data !== "undefined" && cooldown - (Date.now() - data.workTime) > 0) {
        var time = cooldown - (Date.now() - data.workTime),
            minutes = Math.floor(time / 60000),
            seconds = ((time % 60000) / 1000).toFixed(0);
        
		return api.sendMessage(getText("cooldown", minutes, (seconds < 10 ? "0" + seconds : seconds)), event.threadID, event.messageID);
    }
    else {
        const job = [
            getText("job1"),
            getText("job2"),
            getText("job3"),
            getText("job4"),
            getText("job5"),
            getText("job6"),
            getText("job7"),
            getText("job8"),
            getText("job9"),
            getText("job10"),
            getText("job11"),
            getText("job12"),
            getText("job13"),
            getText("job14"),
            getText("job15")
            getText("job16"),
            getText("job17"),
            getText("job18"),
            getText("job19"),
            getText("job20"),
            getText("job21"),
            getText("job22"),
            getText("job23"),
            getText("job24"),
            getText("job25"),
            getText("job26"),
            getText("job27"),
            getText("job28"),
            getText("job29"),
            getText("job30")
        ];
        const amount = Math.floor(Math.random() * 600);
        return api.sendMessage(getText("rewarded", job[Math.floor(Math.random() * job.length)], amount), threadID, async () => {
            await Currencies.increaseMoney(senderID, parseInt(amount));
            data.workTime = Date.now();
            await Currencies.setData(event.senderID, { data });
            return;
        }, messageID);
    }     
}