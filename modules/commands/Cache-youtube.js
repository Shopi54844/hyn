module.exports.config = {
  name: "f3",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Unknown",
  description: "يحول ",
  usages: "ارسم [نص]",
  commandCategory:"💗𝗔𝗡𝗜𝗠𝗘💗",
  cooldowns: 0,
};

module.exports.run = async function({ api, event, args }) {
  const axios = require("axios");
  const fs = require("fs-extra");

  let imageUrlInPut;
  let type;
  if (["photo", "sticker"].includes(event.messageReply?.attachments[0]?.type)) {
    imageUrlInPut = event.messageReply.attachments[0].url;
    type = isNaN(args[0]) ? 1 : Number(args[0]);
  }
  else if (args[0]?.match(/(https?:\/\/.*\.(?:png|jpg|jpeg))/g)) {
    imageUrlInPut = args[0];
    type = Math.floor(Math.random() * 10) + 1;
  }
  else {
    return api.sendMessage({body: "قم بالرد على صورة لأقوم بتحويلها."}, event.threadID);
  }

  let res;
  try {
    res = await axios.get("https://goatbotserver.onrender.com/taoanhdep/art", {
      params: {
        image: imageUrlInPut,
        type
      }
    });
  } catch (e) {
    console.log(e);
    return api.sendMessage({body: "حدث خطأ أثناء معالجة الصورة. الرجاء التحقق من صحة الرابط والمحاولة مرة أخرى."}, event.threadID);
  }

  const imageResponse = await axios.get(res.data.data.effect_img, { responseType: 'arraybuffer' });
  fs.writeFileSync(__dirname + "/cache/img1.png", Buffer.from(imageResponse.data, "utf-8"));

  const allimage = [fs.createReadStream(__dirname + "/cache/img1.png")];
  return api.sendMessage({ attachment: allimage }, event.threadID);
}
