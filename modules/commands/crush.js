module.exports.config = {
    name: "كراش",
    version: "2.0.0",
    hasPermssion: 0,
    credits: "𝒍𝒊𝒏𝒖𝒙",
    description: "تاق للحب",
    commandCategory: "🎮𝗚𝗔𝗠𝗘🎮",
    usages: `قم بعمل تاق لشخص واحد\n\nكيف تستعمله؟\n${global.config.PREFIX}كراش <@تاق>\n\nمثال:\n${global.config.PREFIX}كراش @اسم\n`,
    cooldowns: 5,
    dependencies: {
        "axios": "",
        "fs-extra": "",
        "path": "",
        "jimp": ""
    }
};

module.exports.onLoad = async() => {
  
    const { resolve } = global.nodemodule["path"];
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { downloadFile } = global.utils;
    const dirMaterial = __dirname + `/cache/canvas/`;
    const path = resolve(__dirname, 'cache/canvas', 'joshua.png');
    if (!existsSync(dirMaterial + "canvas")) mkdirSync(dirMaterial, { recursive: true });
    if (!existsSync(path)) await downloadFile("https://i.imgur.com/ha8gxu5.jpg", path);
}

async function makeImage({ one, two }) {
    const fs = global.nodemodule["fs-extra"];
    const path = global.nodemodule["path"];
    const axios = global.nodemodule["axios"]; 
    const jimp = global.nodemodule["jimp"];
    const __root = path.resolve(__dirname, "cache", "canvas");

    let batgiam_img = await jimp.read(__root + "/joshua.png");
    let pathImg = __root + `/batman${one}_${two}.png`;
    let avatarOne = __root + `/avt_${one}.png`;
    let avatarTwo = __root + `/avt_${two}.png`;
    
    let getAvatarOne = (await axios.get(`https://graph.facebook.com/${one}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: 'arraybuffer' })).data;
    fs.writeFileSync(avatarOne, Buffer.from(getAvatarOne, 'utf-8'));
    
    let getAvatarTwo = (await axios.get(`https://graph.facebook.com/${two}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: 'arraybuffer' })).data;
    fs.writeFileSync(avatarTwo, Buffer.from(getAvatarTwo, 'utf-8'));
    
    let circleOne = await jimp.read(await circle(avatarOne));
    let circleTwo = await jimp.read(await circle(avatarTwo));
    batgiam_img.composite(circleOne.resize(110, 110), 150, 76).composite(circleTwo.resize(100, 100), 238, 305);
    
    let raw = await batgiam_img.getBufferAsync("image/png");
    
    fs.writeFileSync(pathImg, raw);
    fs.unlinkSync(avatarOne);
    fs.unlinkSync(avatarTwo);
    
    return pathImg;
}
async function circle(image) {
    const jimp = require("jimp");
    image = await jimp.read(image);
    image.circle();
    return await image.getBufferAsync("image/png");
}

module.exports.run = async function ({ event, api, args }) {
    const fs = global.nodemodule["fs-extra"];
    const { threadID, messageID, senderID } = event;
    var mention = Object.keys(event.mentions);
    if (!mention[0]) return api.sendMessage(`قم بعمل تاق لشخص واحد\n\nكيف تستعمله؟\n${global.config.PREFIX}كراش <@تاق>\n\nمثال:\n${global.config.PREFIX}كراش @اسم\n\nتم إنشاؤه بواسطة: 𝒍𝒊𝒏𝒖𝒙`, threadID, messageID);
    else {
      let tag = event.mentions[mention].replace("@", "");
        var one = senderID, two = mention;
        return makeImage({ one, two }).then(path => api.sendMessage({ body: "انظر إلى كمية الكياته\nابقى قويا",
            mentions: [{
          tag: tag,
          id: mention
        }],
     attachment: fs.createReadStream(path) }, threadID, () => fs.unlinkSync(path), messageID));
    }
      }