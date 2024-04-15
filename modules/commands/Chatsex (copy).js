module.exports.config = {
    name: "chats",
    version: "1.0.2",
    hasPermssion: 0,
    credits: "datoccho",
    description: "نصب و احتيال ع مواقع التواصل",
    commandCategory: "الاموال",
    usages: "a",
    cooldowns: 5000
};
module.exports.run = async ({ api, event, args, Currencies }) => {
    const { getData } = Currencies;
    const { threadID, messageID, senderID } = event;
    const data = (await Currencies.getData(senderID)).data || {};
    const money = (await getData(senderID)).money;
    const coin = Math.floor(Math.random() * 500);
    var rdm = [`  - سويت روحك بنيه وضحكت ع الولد وجمعت رصيد منهم :    ${coin}$ `, `   - سويت روحك بنيه وضحكت ع الولد وجمعت رصيد منهم :    ${coin}$ `];
    const text = rdm[Math.floor(Math.random() * rdm.length)]
    return api.sendMessage(`${text}`, threadID, async () => {
        await Currencies.increaseMoney(senderID, parseInt(coin));
        await Currencies.setData(event.senderID, { data });
        return;
    }, messageID);
      }