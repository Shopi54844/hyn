

module.exports = {
    config: {
        name: "بيست",
        aliases: ["بيثتو", "best"],
        version: "1.0",
        author: "zach",
        countDown: 5,
        role: 0,
        shortDescription: "اهدي اقتباس للبيست🌝",
        longDescription: "",
        category: "تسليه",
        guide: ""
    },



    onStart: async function ({ message, event, args }) {
        const mention = Object.keys(event.mentions);
        if (mention.length == 0) return message.reply("تاغ للمعاق/ة🤣");
        else if (mention.length == 1) {
            const one = event.senderID, two = mention[0];
            bal(one, two).then(ptth => { message.reply({ body:"أحيانا يكون تواجدك مع صديقك المفضل هو كل العلاج الذي تحتاجه.🖤🎶🥀🧸
‏𝒔𝒐𝒎𝒆𝒕𝒊𝒎𝒆𝒔 𝒃𝒆𝒊𝒏𝒈 𝒘𝒊𝒕𝒉 𝒚𝒐𝒖𝒓 𝒃𝒆𝒔𝒕 𝒇𝒓𝒊𝒆𝒏𝒅 𝒊𝒔 𝒂𝒍𝒍 𝒕𝒉𝒆 𝒕𝒉𝒆𝒓𝒂𝒑𝒚 𝒚𝒐𝒖 𝒏𝒆𝒆𝒅", attachment: fs.createReadStream(ptth) }) })
        } else {
            const one = mention[1], two = mention[0];
            bal(one, two).then(ptth => { message.reply({ body: "بيت مال وعيال وربنا يخليكم لبعض🥺💙", attachment: fs.createReadStream(ptth) }) })
        }
    }


};

async function bal(one, two) {

    let avone = await jimp.read(`https://graph.facebook.com/${one}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)
    avone.circle()
    let avtwo = await jimp.read(`https://graph.facebook.com/${two}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)
    avtwo.circle()
    let pth = "abcd.png"
    let img = await jimp.read("https://i.ibb.co/JH7nqxh/xva213.jpg")

    img.resize(700, 450).composite(avone.resize(255, 255), 300, 40).composite(avtwo.resize(255, 255), 150, 50);

    await img.writeAsync(pth)
    return pth
}