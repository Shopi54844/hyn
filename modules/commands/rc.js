module.exports.config = {
  name: "مجهول",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "mindat",
  description: "تسولف وي ناس بطريقه مجهوله ",
  commandCategory: "خدمات",
  usages: "[random/id/check/end] \n - random = يعني تسولف وي ناس عشوائيين بشكل مجهول عن طريق حساب البوت \n - id = تسولف وي شخص عن طريق الايدي بشكل مجهول عن طريق حساب البوت \n - end = تنهي المحادثة",
  cooldowns: 0
}

const fs = require('fs-extra');
const axios = require('axios');
const rcp = require('path').resolve(__dirname, 'cache', 'rcp.json');
module.exports.onLoad = function () {
  if (!fs.existsSync(rcp)) fs.writeFileSync(rcp, '[]');
}

module.exports.run = async function ({ api, event, Users, args }) {
  const { messageID, threadID, isGroup } = event;
  const o = (m, c = () => { }, id = threadID) => api.sendMessage(m, id, c, messageID);
  const s = api.sendMessage;
  if (isGroup) return o("متكدر تستخدم هذا الامر اله بخاص البوت.");
  var rc = {};
  rc.root = threadID;
  rc.head = null;
  rc.isWaiting = false;
  rc.isStarted = false;
  rc.isError = false;
  rc.rootIsIncognito = true;
  rc.headIsIncognito = true;
  rc.isRandom = false;

  switch (args[0]) {
    case 'random':
      var data = require(rcp);
      if (data.some(e => (e.root == threadID || e.head == threadID))) return o("أنت تنتظر الاتصال بشخص واحد آخر. غير قادر على تلبية هذا الطلب.");
      rc.isRandom = true;
      o("لقد حددت بحثًا عشوائيًا. \n هل تريد إخفاء هويتك؟ \n \n رد بـ 0 لإخفاء اسم حسابك ، و 1 لعرض الاسم", (_, i) => global.client.handleReply.push({ type: 'incognitoRootRandomHead', name: this.config.name, author: threadID, messageID: i.messageID, data: rc }));
      break;
    case 'reject':
      var data = require(rcp);
      if (data.some(e => e.head == threadID && e.isWaiting)) {
        let rj = data.findIndex(e => e.head == threadID);
        o("لقد رفضت الاتصال بجهة الاتصال.", () => {
          s("جهة الاتصال رفضت الرد.", data[rj].root);
          data.splice(rj, 1);
          fs.writeFileSync(rcp, JSON.stringify(data, null, 4));
        });
      } else o("لا توجد جهات اتصال في انتظار اتصالك.");
      break;
    case 'accept':
      var data = require(rcp);
      if (data.some(e => e.head == threadID && e.isWaiting)) {
        let ac = data.find(e => e.head == threadID && e.isWaiting);
        o("لقد قبلت التواصل مع هذا الشخص. \n هل تريد إخفاء هويتك؟ \n \n قم بالرد بـ 0 للإخفاء ، و 1 للعرض", (_, i) => global.client.handleReply.push({ type: 'incognitoHead', name: this.config.name, author: threadID, messageID: i.messageID, data: ac }))
      }
      break;
    case 'end':
    case 'leave':
    case '-l':
      var data = require(rcp);
      if (data.some(e => (e.root == threadID || e.head == threadID))) {
        var end = data.findIndex(e => (e.root == threadID || e.head == threadID));
        var endData = data[end];
        var enderId = endData.root == threadID ? endData.root : endData.head;
        var remain = endData.root == threadID ? endData.head : endData.root;
        var enderIncognito = endData.root == threadID ? endData.rootIsIncognito : endData.headIsIncognito;
        o("لقد أنهيت المحادثة.", async (er) => {
          var enderName = await Users.getNameUser(enderId);
          var msg = enderIncognito == false ? `${enderName} غادر الدردشة.` : "غادر جهة الاتصال الدردشة.";
          return s(msg, remain);
        });
        data.splice(end, 1);
        fs.writeFileSync(rcp, JSON.stringify(data, null, 4));
      } else o("لا توجد محادثة جارية .");
      break;
    case "data":
      var data = require(rcp);
      console.log(JSON.stringify(data));
      break;
    case "check":
    case "info":
    case "-i":
      var data = require(rcp);
      if (data.some(e => (e.root == threadID || e.head == threadID))) {
        var rcData = data.find(e => (e.root == threadID || e.head == threadID));
        var incognito = rcData.root == threadID ? rcData.headIsIncognito : rcData.rootIsIncognito;
        var msg = 'معلومات :';
        msg += '\n\n- ايديك : ' + threadID;
        if (incognito == true) msg += '\n- الشخص : الايدي مخفي';
        else {
          var name = await Users.getNameUser((rcData.head == threadID ? rcData.root : rcData.head));
          msg += '\n- الاخر: ' + (rcData.head == threadID ? rcData.root : rcData.head) + ' - ' + name;
        }
        msg += '\n- الحالة ' + (rcData.isWaiting ? 'في انتضار القبول .' : rcData.isStarted ? 'Be chatting.' : '???');
        return o(msg);
      } else o("لا توجد محادثة جارية .");
    default:
      var data = require(rcp);
      if (data.some(e => (e.root == threadID || e.head == threadID))) return o("لديك اتصال آخر ، لذا لا يمكنك تقديم هذا الطلب .");
      if (!args[0] || isNaN(args[0])) return o("الرجاء إدخال معرف الشخص الذي تريد الدردشة معه بشكل مجهول .");
      rc.head = args[0];
      if (data.some(e => (e.root == rc.head || e.head == rc.head))) return o('الشخص الذي تريد الاتصال به موجود على اتصال آخر ، يرجى المحاولة مرة أخرى لاحقًا.')
      o(`طلبت ${args[0]} اتصال الدردشة.\nهل تريد إخفاء هويتك؟\n\nقم بالرد بـ 0 للإخفاء ، و 1 للعرض `, (_, i) => global.client.handleReply.push({ type: 'incognitoRoot', name: this.config.name, author: threadID, messageID: i.messageID, data: rc }));
      break;
  }
}

module.exports.handleReply = async function ({ handleReply, api, event, Users }) {
  const { threadID, messageID, body } = event;
  const o = (m, c = () => { }, id = threadID) => api.sendMessage(m, id, c, messageID);
  const s = api.sendMessage;
  switch (handleReply.type) {
    case 'incognitoRootRandomHead':
      var rcData = require(rcp);
      var rc = handleReply.data;
      var headID;
      if (body == 0) {
        rc.rootIsIncognito = true;
        o("اخترت إخفاء هويتك.");
      } else if (body == 1) {
        rc.rootIsIncognito = false;
        o("لقد اخترت إظهار هويتك .");
      }
      const userID = global.data.allUserID;
      headID = userID[Math.floor(Math.random() * userID.length)];
      var rootName = await Users.getNameUser(rc.root);
      var fbUrl = 'https://facebook.com/' + rc.root;
      s((rc.rootIsIncognito ? "هناك جهة اتصال مجهولة تريد الدردشة معك " : `شخص اسمه ${rootName} - ${fbUrl} يريد الدردشة معك.`) + `\nإذا كنت تريد الرفض ، أدخل الأمر: ${global.config.PREFIX}مجهول reject\nإذا كنت تريد القبول ، أدخل الأمر: ${global.config.PREFIX}مجهول accept`, headID, (er, i) => {
        if (er) o("حدث خطأ أثناء محاولة الاتصال بجهة الاتصال. \n الرجاء المحاولة مرة أخرى لاحقًا.");
        else {
          o("نجح البحث ! \n في انتظار أمر الاتصال من الجانب الآخر!");
          rc.isWaiting = true;
          rc.head = headID;
          rcData.push(rc);
          fs.writeFileSync(rcp, JSON.stringify(rcData, null, 4));
        }
      });
      break;

    case 'incognitoHead':
      var rcData = require(rcp);
      var ac = handleReply.data;
      if (body == 1) {
        ac.headIsIncognito = true;
        o(`اخترت إخفاء هويتك.\nلإنهاء المحادثة أدخل الأمر: ${global.config.PREFIX}مجهول end`);
      } else if (body == 0) {
        ac.headIsIncognito = false;
        o(`لقد اخترت إظهار هويتك.\nلإنهاء المحادثة أدخل الأمر: ${global.config.PREFIX}مجهول end`);
      }
      ac.isWaiting = false;
      ac.isStarted = true;
      var nameHead = await Users.getNameUser(ac.head);
      var fbUrl = 'fb.com/' + ac.head;
      var msg = (ac.headIsIncognito ? "شخص مجهول" : `${nameHead} - ${fbUrl}`) + ` قبل الاتصال بك.\nلإنهاء المحادثة أدخل الأمر: ${global.config.PREFIX}مجهول end`;
      await s(msg, ac.root);
      var prevData = rcData.find(e => e.root = ac.root);
      Object.keys(prevData).map((v) => prevData[v] = ac[v]);
      fs.writeFileSync(rcp, JSON.stringify(rcData, null, 4));
      break;

    case 'incognitoRoot':
      var rcData = require(rcp);
      var rc = handleReply.data;
      if (body == 1) {
        rc.rootIsIncognito = true;
        o("اخترت إخفاء هويتك ");
      } else if (body == 0) {
        rc.rootIsIncognito = false;
        o(" لقد اخترت إظهار هويتك.");
      }
      var rootName = await Users.getNameUser(rc.root);
      var fbUrl = 'fb.com/' + rc.root;
      s((rc.rootIsIncognito ? "هناك جهة اتصال مجهولة تريد الدردشة معك" : `شخص اسمه ${rootName} - ${fbUrl} يريد الدردشة معك.`) + `\nإذا كنت تريد الرفض ، أدخل الأمر: ${global.config.PREFIX}مجهول reject\nإذا كنت تريد القبول ، أدخل الأمر: ${global.config.PREFIX}مجهول accept`, rc.head, (er, i) => {
        if (er) o("حدث خطأ أثناء محاولة الاتصال بجهة الاتصال. \n الرجاء المحاولة مرة أخرى لاحقًا.");
        else {
          o("نجح الطلب! \n في انتظار أمر اتصال من الجانب الآخر
!");
          rc.isWaiting = true;
          rcData.push(rc);
          fs.writeFileSync(rcp, JSON.stringify(rcData));
        }
      });
      break;
  }
}

module.exports.handleEvent = async function ({ event, api, Users }) {
  var { threadID, isGroup, body } = event;
  var tiny = async function (url) {
    const { data } = await axios.get('https://tinyurl.com/api-create.php?url=' + encodeURIComponent(url));
    return data;
  }
  if (isGroup == false) {
    if (body.startsWith(global.config.PREFIX)) return;
    const rcData = require(rcp);
    const o = (msg, id) => api.sendMessage(msg, id || threadID);
    if (rcData.some(e => (e.head == threadID || e.root == threadID))) {
      var data = rcData.find(e => (e.head == threadID || e.root == threadID));
      if (data.isStarted == true) {
        var sender = data.root == threadID ? data.root : data.head;
        var receiver = data.root == threadID ? data.head : data.root;
        var senderIncognito = data.root == threadID ? data.rootIsIncognito : data.headIsIncognito;
        if (senderIncognito == false) {
          var name = await Users.getNameUser(sender);
          body = `${name} أجاب:\n` + body;
        } else body = "رد الشخص المسؤول:\n" + body;
        if (event.attachments.length != 0) {
          body += '\nالمرفقات :'
          for (var e of event.attachments) {
            var u = await tiny(e.url);
            body += '\n- ' + u;
          }
        }
        return o(body, receiver);
      }
    }
  }
}
