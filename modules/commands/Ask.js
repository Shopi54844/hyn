module.exports.config = {
    name: 'ماركو',
    version: '1.1.1',
    hasPermssion: 0,
    credits: 'SMILE',
    description: 'تحدث مع الذكاء الاصطناعي',
    commandCategory: '🤖𝗕𝗢𝗧🤖',
    usages: '[ماركو + اي سؤال]',
    cooldowns: 3
};

let axios = require('axios');

let suffix = '∆∆∆•%';
let getToken = tex=>tex.split(/"/).find($=>/^eyJ/.test($));
let getContent = tex=>tex.split(/data\: /).filter($=>/^\{"i/.test($)).map($=>$ = JSON.parse($.replace(/\n\n$/, ''))).map($=>$.choices[0].delta.content || '').join('');
let ask = (o, b, uri = encodeURI(b))=>axios.get(https://gptgo.ai/?q=${uri}&hl=vi&hlgpt=default#gsc.tab=0&gsc.q=${uri}&gsc.page=1).then(res=>axios.get(https://gptgo.ai/action_ai_gpt.php?token=${getToken(res.data)}).then(res=>o.api.sendMessage(getContent(res.data), o.event.threadID, o.event.messageID))).catch(console.log);

module.exports.run = o=>ask(o, o.event.args.slice(1).join(' '));
module.exports.handleEvent = (o, b = o.event.body, suffixRegEx = RegExp(\\${suffix}))=>suffixRegEx.test(b)?ask(o, b.replace(suffixRegEx, '')): '';
if (ask.length < 2) {
  api.sendMessage("يرجي تقديم السؤال في الوقت الذي يناسبك وسأسعى جاهدا لتقديم رد فعال. رضاكم هو أولويتي القصوى.🕶🔥", event.threadID);
}