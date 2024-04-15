module.exports.config = {
  name: "فلتر",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "HĐGN", //modules code by NtKhang
  description: "فلتره الرسائل في المحادثات الجماعية",
  commandCategory: "ادمنية الكروبات",
  usages: "<word> => <إجابه>: تستخدم لإضافة مرشح الكلمة: إذا كنت تريد عشوائيًا ، فاملأ النموذج <إجابه 1 | إجابه 2...> أو إعادة إضافته عدة مرات\nفلتر del <الكلمة>: لإزالة مرشح الكلمة\nفلتر list أو تصفية الكل: انظر قائمة التصفية",
  cooldowns: 5
};

module.exports.handleEvent = ({ api, event }) => {
  const { existsSync } = require("fs-extra");
  const { body } = event;
  
  const pathFilter = __dirname + "/noprefix/filterNTK.json";
  
  if (!body || !existsSync(pathFilter)) return;
  const dataFilter = require(pathFilter);
  for (let word of dataFilter) {
    if (body.toLowerCase().indexOf(word.key) != -1) {
       return api.sendMessage(word.value[Math.floor(Math.random()*word.value.length)], event.threadID, event.messageID);
    }
  }
};

module.exports.run = ({ api, event, args }) => {
  const { existsSync, writeFileSync } = require("fs-extra");
  const pathFilter = __dirname + "/noprefix/filterNTK.json";
  if (!existsSync(pathFilter)) writeFileSync(pathFilter, "[]");
  const dataFilter = require(pathFilter);
  
  if (args[0] == "del") {
    const wordDelete = args[1];
    if (!wordDelete) return api.sendMessage("لم تدخل كلمة للحذف", event.threadID, event.messageID); 
    const indexOfFilter = dataFilter.findIndex(item => item.value == wordDelete);
    dataFilter.splice(indexOfFilter, 1);
    api.sendMessage(`إزالة مرشح الكلمة ${wordDelete}`, event.threadID, event.messageID);
  }
  else if (["list", "all"].includes(args[0])) {
    if (dataFilter.length == 0) return api.sendMessage("لا توجد كلمات تصفية حتى الآن ", event.threadID, event.messageID);
    var msg = "";
    for (let item of dataFilter) {
      msg += `• Key: ${item.key}\n• Reply: ${item.value.join(" | ")}\n`;
      return api.sendMessage(msg, event.threadID, event.messageID);
    }
  }
  else {
    if (!args[0] || !args.join(" ").includes("=>")) return global.utils.throwError("filter", event.threadID, event.messageID);
    const content = args.join(" ").split("=>");
    if (!content[0] || !content[1]) return global.utils.throwError("filter", event.threadID, event.messageID);
    const key = content[0].toLowerCase().trim();
    var value = content.slice(1).join("=>").split("|");
    value = value.map(item => item = item.trim());
    if (!dataFilter.some(item => item.key == key)) dataFilter.push({ key, value: [] });
    const data = dataFilter.find(item => item.key == key);
    data.value = [...data.value, ...value];
    const indexOfFilter = dataFilter.findIndex(item => item.value == value);
    dataFilter[indexOfFilter] = data;
    api.sendMessage(`تمت إضافة تصفية الكلمات  "${key}" مع ${value.length > 1 ? "những" : ""} إجابه ${value.length > 1 ? "random" : ""}\n- ${value.join("\n- ")}`, event.threadID, event.messageID);
  }

  writeFileSync(pathFilter, JSON.stringify(dataFilter, null, 2));
};
