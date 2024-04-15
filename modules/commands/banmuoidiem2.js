module.exports.config = {
    name: "ازعاج",
    version: "1.0.2",
    hasPermssion: 1,
    credits: "Dk amine",
    description: "Tag 10 times continuously",
    commandCategory: "اشياء",
    usages: "banmuoidiem",
    cooldowns: 5,
    dependencies: { }
}
 
module.exports.run = async function({ api, args, Users, event}) {
const { threadID, messageID, senderID, mentions } = event;
var mention = Object.keys(mentions)[0];
setTimeout(() =>
api.sendMessage({
   body:"انت جاهز? " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID, messageID), 1000)
setTimeout(() =>
api.sendMessage("سنبدا الان :3", threadID), 2000)
 
setTimeout(() =>
api.sendMessage("انطلاق", threadID), 3000)

var a = Math.floor(Math.random() * 7);
if ( a==0 ) {
setTimeout(() =>
api.sendMessage({
   body:"استدعاء " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 5000)
setTimeout(() =>
api.sendMessage({
   body:"ابراكادابرا " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 9000)
setTimeout(() =>
api.sendMessage({
   body:"الرذاذ السحري " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 13000)
setTimeout(() =>
api.sendMessage({
   body: "يوهو "+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 17000)
setTimeout(() =>
api.sendMessage({
   body: "كيموتشي هاه? "+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 21000)
setTimeout(() =>
api.sendMessage({
   body: "احبك"+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 25000)
setTimeout(() =>
api.sendMessage({
   body:"eh eh eh eh eh? " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 29000)
setTimeout(() =>
api.sendMessage({
   body: "ياميتي "+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 32000)
setTimeout(() =>
api.sendMessage({
   body: "احب ازعاجك... "+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 36000)
setTimeout(() =>
api.sendMessage({
   body:"اسفة لفعل هذا! " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 40000)
}
if (a==1) {
setTimeout(() =>
api.sendMessage({
   body:"انتظر الى اين انت ذاهب " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 5000)
setTimeout(() =>
api.sendMessage({
   body:"قم باعادة اطفالي الي " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 9000)
setTimeout(() =>
api.sendMessage({
   body:"عد ارجوك " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 13000)
setTimeout(() =>
api.sendMessage({
   body: "هيا استطيع سماعك تبكي "+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 17000)
setTimeout(() =>
api.sendMessage({
   body: "كيموتشي "+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 21000)
setTimeout(() =>
api.sendMessage({
   body: "اكرهك "+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 25000)
setTimeout(() =>
api.sendMessage({
   body:"فقط عد " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 29000)
setTimeout(() =>
api.sendMessage({
   body: "عد يا ايها الاحمق "+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 32000)
setTimeout(() =>
api.sendMessage({
   body: "ياميتي "+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 36000)
setTimeout(() =>
api.sendMessage({
   body:"عد امي تنتظر " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 40000)
}
if (a==2) {
setTimeout(() =>
api.sendMessage({
   body:"احمل الفراشة الذهبية " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 5000)
setTimeout(() =>
api.sendMessage({
   body:"احمل الفراشة الذهبية " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 9000)
setTimeout(() =>
api.sendMessage({
   body:"واطلق اجنحتك " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 13000)
setTimeout(() =>
api.sendMessage({
   body: "واطلق اجنحتك "+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 17000)
setTimeout(() =>
api.sendMessage({
   body: "الفراشات تطير "+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 21000)
setTimeout(() =>
api.sendMessage({
   body: "ثلاث جولات مزدوجة "+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 25000)
setTimeout(() =>
api.sendMessage({
   body:"الفراشات تطير " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 29000)
setTimeout(() =>
api.sendMessage({
   body: "ثلاث جولات مزدوجة "+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 32000)
setTimeout(() =>
api.sendMessage({
   body: "أجلس وأشاهد "+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 36000)
setTimeout(() =>
api.sendMessage({
   body:"أجلس وأشاهد " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 40000)
}
if (a==3) {
setTimeout(() =>
api.sendMessage({
   body:"شقيق يبلغ من العمر الجاموس يحب العشب الصغير ويلعب بالتحف " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 5000)
setTimeout(() =>
api.sendMessage({
   body:"أنا العاصفة ، أنت الشجرة ، أنا الشجرة عندما ألتقي بك ، أنا السقوط" + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 9000)
setTimeout(() =>
api.sendMessage({
   body:"أحب أن ألعب مع Re Mi Pha Son La Si Do" + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 13000)
setTimeout(() =>
api.sendMessage({
   body: "دونغ دونغ أنت الفائز ، تفضل خذ جائزتك : 2536$"+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 17000)
setTimeout(() =>
api.sendMessage({
   body: "أنا ماري عندما أكون متعبة ، أنت تكون الخاسر"+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 21000)
setTimeout(() =>
api.sendMessage({
   body: "هل أنت خنزير مال ؟ ، المال ليس كل شيء فالحياة حاول أن تربح ما هو أكبر أي الجنة ❤️"+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 25000)
setTimeout(() =>
api.sendMessage({
   body:"نحيف بعض الشيء لكنهم يقولون أنك مجنون " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 29000)
setTimeout(() =>
api.sendMessage({
   body: "احبك "+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 32000)
setTimeout(() =>
api.sendMessage({
   body: "في كل مرة افكر فيك اريد التقيء"+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 36000)
setTimeout(() =>
api.sendMessage({
   body:"انت مثل الشمس " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 40000)
}
if (a==4) {
setTimeout(() =>
api.sendMessage({
   body:"انت الافضل افضل للافضل. " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 5000)
setTimeout(() =>
api.sendMessage({
   body:" الكل يخسر امامك. " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 9000)
setTimeout(() =>
api.sendMessage({
   body:"انت جيد في كل شيء. " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 13000)
setTimeout(() =>
api.sendMessage({
   body: "اذا كنت على خطأ فلا احد على صواب. "+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 17000)
setTimeout(() =>
api.sendMessage({
   body: " اتفقنا? "+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 21000)
setTimeout(() =>
api.sendMessage({
   body: "انت الزعيم لا احد يقدر عليك . "+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 25000)
setTimeout(() =>
api.sendMessage({
   body:"أي ما قلته سيكون صحيحا. " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 29000)
setTimeout(() =>
api.sendMessage({
   body: "والكل يعلم انك دوما على حق =)) "+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 32000)
setTimeout(() =>
api.sendMessage({
   body: "انت دوما الرقم واحد "+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 36000)
setTimeout(() =>
api.sendMessage({
   body:"لحد الساعة ما زلت اخاف منك 👏 " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 40000)
}
if (a==5){
setTimeout(() =>
api.sendMessage({
   body:"دراج كالشهاب" + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 5000)
setTimeout(() =>
api.sendMessage({
   body:"دراج لا يهاب صخور التلال" + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 9000)
setTimeout(() =>
api.sendMessage({
   body:"حينا يغوص في الماء" + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 13000)
setTimeout(() =>
api.sendMessage({
   body: "وتارة في الفضاء "+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 17000)
setTimeout(() =>
api.sendMessage({
   body: "للشجاعة مثال "+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 21000)
setTimeout(() =>
api.sendMessage({
   body: "طموحه هو الكمال "+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 25000)
setTimeout(() =>
api.sendMessage({
   body:"مصمما يحطم الحجر " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 29000)
setTimeout(() =>
api.sendMessage({
   body: "كالصاعقة كالبرق حين يخطف البصر"+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 32000)
setTimeout(() =>
api.sendMessage({
   body: "رياااح اعصار تلبد السماء "+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 36000)
setTimeout(() =>
api.sendMessage({
   body:"خلاص اشوفك عشت الدور " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 40000)
}
}
