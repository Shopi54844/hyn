module.exports.config = {
    name: "سلوتار",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "Mirai Team",
    description: "لعبه سلوت للكبار من 10000 فما فوق",
    commandCategory: "🎮𝗚𝗔𝗠𝗘🎮",
    usages: "سلوت + مبلغ للرهان به",
    cooldowns: 5,
};

module.exports.languages = {
    "vi": {
        "missingInput": "[ SLOT ] Số tiền đặt cược không được để trống hoặc là số âm",
        "moneyBetNotEnough": "[ SLOT ] Số tiền bạn đặt lớn hơn hoặc bằng số dư của bạn!",
        "limitBet": "[ SLOT ] Số coin đặt không được dưới 50$!",
        "returnWin": "🎰 %1 | %2 | %3 🎰\nBạn đã thắng với %4$",
        "returnLose": "🎰 %1 | %2 | %3 🎰\nBạn đã thua và mất %4$"
    },
    "en": {
        "missingInput": "[ سلوت الكبار ] يجب عليك الرهان بمبلغ لا يقل عن 10000 دولار  ",
        "moneyBetNotEnough": "[ سلوت الكبار ] هذه اللعبة مخصصة للكبار انت لا تمتلك المبلغ المطلوب للعب !",
        "limitBet": "[ سلوت للكبار ] المال الذي راهنت به قليل ، يجب أن يكون على الاقل 10000 دولار",
        "returnWin": "⁂︴🎰 %1 | %2 | %3 🎰︴⁂\n\n\ مبروك لقد ربحت في لعبة سلوت للكبار وتم زبادة رصيدك ،    %4$",
        "returnLose": "⁂🎰 %1 | %2 | %3 🎰⁂\n\n\nلقد خسرت ، وتم خصم %4$ من رصيدك"
    }
}

module.exports.run = async function({ api, event, args, Currencies, getText }) {
    const { threadID, messageID, senderID } = event;
    const { getData, increaseMoney, decreaseMoney } = Currencies;
    const slotItems = ["🍇", "🍉", "🍊", "🍏", "7⃣", "🍓", "🍒", "🍌", "🥝", "🥑", "🌽","🥒","🌶️","🥕","🌽","🧅","🍗","🦴","🌭","🍔","🍕","🥩","🧀,"🥬","🥑","🍎","🍊","🍌","🥭","🍼"];
    const moneyUser = (await getData(senderID)).money;

    var moneyBet = parseInt(args[0]);
    if (isNaN(moneyBet) || moneyBet <= 0) return api.sendMessage(getText("missingInput"), threadID, messageID);
	if (moneyBet > moneyUser) return api.sendMessage(getText("moneyBetNotEnough"), threadID, messageID);
	if (moneyBet < 10000) return api.sendMessage(getText("limitBet"), threadID, messageID);
    var number = [], win = false;
    for (i = 0; i < 3; i++) number[i] = Math.floor(Math.random() * slotItems.length);
    if (number[0] == number[1] && number[1] == number[2]) {
        moneyBet *= 9;
        win = true;
    }
    else if (number[0] == number[1] || number[0] == number[2] || number[1] == number[2]) {
        moneyBet *= 2;
        win = true;
    }
    switch (win) {
        case true: {
            api.sendMessage(getText("returnWin", slotItems[number[0]], slotItems[number[1]], slotItems[number[2]], moneyBet), threadID, messageID);
            await increaseMoney(senderID, moneyBet);
            break;
        }
        case false: {
            api.sendMessage(getText("returnLose", slotItems[number[0]], slotItems[number[1]], slotItems[number[2]], moneyBet), threadID, messageID);
            await decreaseMoney(senderID, moneyBet);
            break;
        }
    }
}