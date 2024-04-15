
const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "الردود",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Mod by John Lester",
  description: " ",
  commandCategory: "𝔻𝔼𝕍𝔼𝕃𝕆ℙ𝔼ℝ",
  usages: " ",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Manila").format("HH:MM:ss L");
  var idgr = ${event.threadID};
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["hello friend, I'm Hai's bot", "what are you asking me to do?", "I love you shoulder lon", "Love you <3", "Hi, hello baby wife :3", "My wife called for a job.  what?", "Use callad to contact admin!", "You're the cutest bot on the planet", "What are you talking about pig", "It's me~~~~"];
  var rand = tl[Math.floor(Math.random() * tl.length)]

    if ((event.body.toLowerCase() == "احبك") || (event.body.toLowerCase() == "أحبك")) {
     return api.sendMessage("ها يمعود مو هنا", threadID);
   };

    if ((event.body.toLowerCase() == "شنوهاي") || (event.body.toLowerCase() == "شنو هاي")) {
     return api.sendMessage("سلامتك", threadID);
   };
   
    if ((event.body.toLowerCase() == "عضمة") || (event.body.toLowerCase() == "عضمه")) {
     return api.sendMessage("ماكس التميت سوبر عضمة", threadID);
   };

   if ((event.body.toLowerCase() == "صباح الخير") || (event.body.toLowerCase() == "صباح")) {
     return api.sendMessage("أنت الخير حياتي", threadID);
   };
  
   if ((event.body.toLowerCase() == "شونكم") || (event.body.toLowerCase() == "شلونكم")) {
     return api.sendMessage("بخير ححياتي !", threadID);
   };

   if ((event.body.toLowerCase() == "اتفق") || (event.body.toLowerCase() == "أتفق")) {
     return api.sendMessage("اطلق من يتفق", threadID);
   };

  if ((event.body.toLowerCase() == "الو") || (event.body.toLowerCase() == "ألو")) {
     return api.sendMessage("طيزك حلو", threadID);
   };

   if ((event.body.toLowerCase() == "كسمك") || (event.body.toLowerCase() == "كسختك")) {
     return api.sendMessage("عيييييب", threadID);
   };

   if ((event.body.toLowerCase() == "هلو") || (event.body.toLowerCase() == "هلا")) {
     return api.sendMessage("هلاوات ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "بوت زربة") || (event.body.toLowerCase() == "بوت زربه")) {
     return api.sendMessage("اته زربة ع الاقل اني بوت اته شمسوي بحياتك ؟", threadID);
   };

   if ((event.body.toLowerCase() == "جميل") || (event.body.toLowerCase() == "راقي")) {
     return api.sendMessage("حبيبي اته الارقة والأجمل ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "بوسة") || (event.body.toLowerCase() == "اريد بوسه")) {
     return api.sendMessage("استحي ع روحك بكد المطي تدور بوس", threadID);
   };


   if ((event.body.toLowerCase() == "يوجع") || (event.body.toLowerCase() == "اي يوجع")) {
     return api.sendMessage("️كلش", threadID);
   };

   if ((event.body.toLowerCase() == "let's go") || (event.body.toLowerCase() == "let's go")) {
     return api.sendMessage("️1 is interaction, 2 is kick :))))", threadID);
   };

   if ((event.body.toLowerCase() == "طيزج") || (event.body.toLowerCase() == "طيزك")) {
     return api.sendMessage("️شبي ؟", threadID);
   };

   if ((event.body.toLowerCase() == "ثباحو") || (event.body.toLowerCase() == "ثباحوو")) {
     return api.sendMessage("️ثباحوات <3/", threadID);
   };

   if ((event.body.toLowerCase() == "تصفيق") || (event.body.toLowerCase() == "tt go mn")) {
     return api.sendMessage("️:))))", threadID);
   };

   if ((event.body.toLowerCase() == "السلام عليكم") || (event.body.toLowerCase() == "سلام")) {
     return api.sendMessage("️وعليكم السلام ورحمة الله وبركاته", threadID);
   };

   if ((event.body.toLowerCase() == "clmm bot") || (event.body.toLowerCase() == "clmm bot")) {
     return api.sendMessage("️Swear something dog :) you've been holding on to you for a long time", threadID);
   };

if ((event.body.toLowerCase() == "bot cc") || (event.body.toLowerCase() == "bot cc")) {
     return api.sendMessage("️Swear something dog :) you've been holding on to you for a long time", threadID);
   };

   if ((event.body.toLowerCase() == "cc bot") || (event.body.toLowerCase() == "cc bot")) {
     return api.sendMessage("️Swear something dog :) you've been holding on to you for a long time", threadID);
   };

   if ((event.body.toLowerCase() == "bot dthw too") || (event.body.toLowerCase() == "bot dthw over")) {
     return api.sendMessage("️ that's very commendable hihi :>", threadID);
   };
  
   if ((event.body.toLowerCase() == "dm bot") || (event.body.toLowerCase() == "dm bot")) {
     return api.sendMessage("️Swear something to your dad :), you're a kid but you like to be alive :)", threadID);
   };

   if ((event.body.toLowerCase() == "nobody loves me") || (event.body.toLowerCase() == "nobody loves me")) {
     return api.sendMessage("️Come on, the bot loves you <3 <3", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot love the admin bot") || (event.body.toLowerCase() == "does the bot love the admin bot")) {
     return api.sendMessage("Yes, love him the most, don't try to rob me", threadID);
   };
   
   if ((event.body.toLowerCase() == "bot im going") || (event.body.toLowerCase() == "bot im di")) {
     return api.sendMessage("Im cc :))) m stop barking for me, but tell me im :>>", threadID);
   };

   if ((event.body.toLowerCase() == "bot go away") || (event.body.toLowerCase() == "bot cut di")) {
     return api.sendMessage("You're gone, your dad's gone, don't make you speak :))))", threadID);
   };

   if ((event.body.toLowerCase() == "What's the bot swearing") || (event.body.toLowerCase() == "bot cursing")) {
     return api.sendMessage("Damn you, shame on hahaha :>>, still asking", threadID);
   };

   if ((event.body.toLowerCase() == "is the bot sad") || (event.body.toLowerCase() == "is the bot sad")) {
     return api.sendMessage("Why can't I be sad because of everyone <3 love you <3", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot love you") || (event.body.toLowerCase() == "does the bot love you")) {
     return api.sendMessage("Yes I love you and everyone so much", threadID);
   };

   if ((event.body.toLowerCase() == "bot goes to sleep") || (event.body.toLowerCase() == "bot goes to sleep")) {
     return api.sendMessage("I'm a bot, you're the one who should go to sleep <3", threadID);
   };

   if ((event.body.toLowerCase() == "has the bot eaten yet") || (event.body.toLowerCase() == "bot an comrade")) {
     return api.sendMessage("I'm full when I see you eat <3", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot love me") || (event.body.toLowerCase() == "does the bot love me")) {
     return api.sendMessage("Yes <3", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot have a brand") || (event.body.toLowerCase() == "does the bot fall")) {
     return api.sendMessage("Yes <3", threadID);
   };
  
  if (event.body.indexOf("bot") == 0 || (event.body.indexOf("Bot") == 0)) {
    var msg = {
      body: ${name}, ${rand}
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }