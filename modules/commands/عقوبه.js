module.exports.config = {
	name: "إزالة",
	version: "2.0.5",
	hasPermssion: 1,
	credits: "زعيم الاحمر",
	description: "طرد اعظاء  وحظرهم من كروب مع كتابه السبب ضع تاك او رد ع رساله الشخص واكتب طرد\nالمطور: زعيم الاحمر",
	commandCategory: "⭐️𝗔𝗗𝗠𝗜𝗡⭐️",
	usages: "[رد على رساله وطرد مع كتابه سبب]",
	cooldowns: 5,
	info: [
		{
			key: '[tag] or [reply message] "reason"',
			prompt: '1 more warning user',
			type: '',
			example: 'ban [tag] "reason for warning"'
  		},

		{
			key: 'listban',
			prompt: 'see the list of users banned from the group',
			type: '',
			example: 'ban listban'
  		},

		{
			key: 'uban',
			prompt: 'remove the user from the list of banned groups',
			type: '',
			example: 'ban unban [id of user to delete]'
  		},
		{
			key: 'view',
			prompt: '"tag" or "blank" or "view all", respectively used to see how many times the person tagged or yourself or a member of the box has been warned ',
			type: '',
			example: 'ban view [@tag] / warns view'
  		},

		{
			key: 'reset',
			prompt: 'Reset all data in your group',
			type: '',
			example: 'ban reset'
  		}

  		]
};

module.exports.run = async function({ api, args, Users, event, Threads, utils, client }) {
	let {messageID, threadID, senderID} = event;
	var info = await api.getThreadInfo(threadID);
	if (!info.adminIDs.some(item => item.id == api.getCurrentUserID())) return api.sendMessage('ارفعني ادمن حتى تستعمل هذا امر\nلايمكن استعمال اذا البوت مو ادمن!', threadID, messageID);
	var fs = require("fs-extra");
	
	if (!fs.existsSync(__dirname + `/cache/bans.json`)) {
			const dataaa = {warns: {}, banned: {}};
			fs.writeFileSync(__dirname + `/cache/bans.json`, JSON.stringify(dataaa));
					}
  var bans = JSON.parse(fs.readFileSync(__dirname + `/cache/bans.json`)); //read file contents
  /*
  {warns: {}, banned: {tid: []}};
  */
  if(!bans.warns.hasOwnProperty(threadID)) {
			bans.warns[threadID] = {}; 
			fs.writeFileSync(__dirname + `/cache/bans.json`, JSON.stringify(bans, null, 2));
  	
  }

  
  if(args[0] == "اظهار") {
  	if(!args[1]) {
  		var msg = "";
  		var mywarn = bans.warns[threadID][senderID];
  		if(!mywarn) return api.sendMessage('✅ليس لديك عقوبات', threadID, messageID);
  		var num = 1;
  		for(let reasonwarn of mywarn) {
  			msg += `سبب عقوبه\n`;
  		}
  		api.sendMessage(`❎تم عقابك بسبب : ${msg}`, threadID, messageID);
  	}
  	else if(Object.keys(event.mentions).length != 0) {
  		var message = "";
  		var mentions = Object.keys(event.mentions);
  		for(let id of mentions) {
  			var name = (await api.getUserInfo(id))[id].name;
  			var msg = "";
  			var so = 1;
  			var reasonarr = bans.warns[threadID][id];
  			if(typeof reasonarr != "object") {
  				msg += " لم يتم عقابه\n"
  			} else {
  			for(let reason of reasonarr) {
  				msg += ""+reason+"\n";
  			}
  			}
  			message += "⭐️"+name+" :"+msg+"";
  		}
  		api.sendMessage(message, threadID, messageID);
  	}
  	
  	else if(args[1] == "الكل") {
  		var dtwbox = bans.warns[threadID];
  		var allwarn = "";
  		for(let idtvw in dtwbox) {
  			var name = (await api.getUserInfo(idtvw))[idtvw].name, msg = "", solan = 1;
  			for(let reasonwtv of dtwbox[idtvw]) {
  				msg += `${reasonwtv}`
  			}
  			allwarn += `${name} : ${msg}\n`;
  		}
  		allwarn == "" ? api.sendMessage("✅لم يتم عقوبه احد بعد", threadID, messageID) : api.sendMessage("قائمة اعظاء تم عقابهم:\n"+allwarn, threadID, messageID);
  	}
  }
  
  else if(args[0] == "unban") {
  	var id = parseInt(args[1]), mybox = bans.banned[threadID];
  	var info = await api.getThreadInfo(threadID);
	if (!info.adminIDs.some(item => item.id == senderID) && !(global.config.ADMINBOT).includes(senderID)) return api.sendMessage('❎Right cunt border!', threadID, messageID);
	
  	if(!id) return api.sendMessage("❎تحتاج ID العظور الذي تريد حذفه من حظر", threadID, messageID);
  	bans.banned;
  	if(!mybox.includes(id)) return api.sendMessage("✅العظو لم يتم حظره", threadID, messageID);
			api.sendMessage(`✅تم حذف  ${id} حظر الكروب`, threadID, messageID);
			mybox.splice(mybox.indexOf(id), 1);
			delete bans.warns[threadID][id]
			fs.writeFileSync(__dirname + `/cache/bans.json`, JSON.stringify(bans, null, 2));
  }
  
  else if(args[0] == "listban") {
  	var mybox = bans.banned[threadID];
  	var msg = "";
  	for(let iduser of mybox) {
  		var name = (await api.getUserInfo(iduser))[iduser].name;
  		msg += "╔Name: " + name + "\n╚ID: " + iduser + "\n";
  	}
  	msg == "" ? api.sendMessage("✅No one in your group has been banned from the group yet", threadID, messageID) : api.sendMessage("❎Members who have been banned from the group:\n"+msg, threadID, messageID);
  }
  else if(args[0] == "reset") {
  	var info = await api.getThreadInfo(threadID);
	if (!info.adminIDs.some(item => item.id == senderID) && !(global.config.ADMINBOT).includes(senderID)) return api.sendMessage('❎Right cunt border!', threadID, messageID);
  	
  	bans.warns[threadID] = {};
  	bans.banned[threadID] = [];
  	fs.writeFileSync(__dirname + `/cache/bans.json`, JSON.stringify(bans, null, 2));
  	api.sendMessage("Reset all data in your group", threadID, messageID);
  }
  	 //◆━━━━━━━━━◆WARN◆━━━━━━━━━◆\\
  	 else{ 
  	 	   if (event.type != "message_reply" && Object.keys(event.mentions).length == 0)	return utils.throwError(this.config.name, threadID, messageID);
   
       //◆━━━━━━◆get iduser and reason<<<<<<<<\\
       var info = await api.getThreadInfo(threadID);
	if (!info.adminIDs.some(item => item.id == senderID) && !(global.config.ADMINBOT).includes(senderID)) return api.sendMessage('Right cunt border!', threadID, messageID);
  var reason = "";
		  if (event.type == "message_reply") {
		  	var iduser = [];
		  	iduser.push(event.messageReply.senderID);
		  	reason = (args.join(" ")).trim();
		  }
		  
		  else if (Object.keys(event.mentions).length != 0) {
		  	var iduser = Object.keys(event.mentions);
		  	var stringname = "";
		  	var nametaglength = (Object.values(event.mentions)).length;
		  	var namearr = Object.values(event.mentions);
		  	for(let i = 0; i < nametaglength; i++) {
		  		stringname += (Object.values(event.mentions))[i];
		  	}
		  	var message = args.join(" ");
		  	//var reason = (message.slice(stringname.length + nametaglength -1)).trim();
		  	for(let valuemention of namearr) {
		  		console.log(namearr);
		  		console.log(message);
		  		vitrivalue = message.indexOf(valuemention);
		  		console.log(vitrivalue);
		  		message = message.replace(valuemention,"");
		  	}
		 	var reason = message.replace(/\s+/g, ' ');
		  }
		  var arraytag = [];
		  var arrayname = [];
		  //Check xem đã bị cảnh cáo lần nào chưa
		for(let iid of iduser) {
			var id = parseInt(iid);
			var nametag = (await api.getUserInfo(id))[id].name;
			arraytag.push({id: id, tag: nametag});
			
			if(!reason) reason += "No reason was given";
			/*if(!bans.warns.hasOwnProperty(threadID)) {
			bans.warns[threadID] = {}; 
			}*/
			var dtwmybox = bans.warns[threadID];
			if(!dtwmybox.hasOwnProperty(id)) { 
			dtwmybox[id] = [];
			}
			var solan = (bans.warns[threadID][id]).length;
			arrayname.push(nametag);
			var pushreason = bans.warns[threadID][id];
			pushreason.push(reason);
			if(!bans.banned[threadID]) {
				bans.banned[threadID] = [];
			}
			if((bans.warns[threadID][id]).length > 0) {
				
				api.removeUserFromGroup(parseInt(id), threadID)
				var banned = bans.banned[threadID];
				    banned.push(parseInt(id));
				fs.writeFileSync(__dirname + `/cache/bans.json`, JSON.stringify(bans, null, 2));
			}
		
		}//for

		api.sendMessage({body: `العظو ${arrayname.join(", ")} تم طرده وحظره من كروب بسبب: ${reason}`, mentions: arraytag}, threadID, messageID);
		fs.writeFileSync(__dirname + `/cache/bans.json`, JSON.stringify(bans, null, 2));
}
  
};
