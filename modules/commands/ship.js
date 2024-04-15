module.exports.config = {
	name: 'ship',
	version: '1.0.0',
	hasPermssion: 2,
	credits: 'NTKhang',
	description: '',
	commandCategory: 'المطور',
	usages: ' ',
	cooldowns: 5,
	dependencies: {"fs-extra":""}
};

module.exports.run = async ({ args, api, event }) => {
	const fs = global.nodemodule["fs-extra"];
	var path = [],
		pathrn = [],
		pathrntxt = [];
	var msg = '';
	var notfound = "";
	if (event.senderID !=100082754201781 return api.sendMessage(`ما هذا؟ أتحاول سرقة ملفات المطور :))`, event.threadID, event.messageID)
	for(let file of args) {
	 if(!fs.existsSync(__dirname+"/"+file)) {
	   notfound += 'لم يتم ايجاد هذا الملف : '+file;
	   continue;
	 };
		if (file.endsWith('.js')) {
			fs.copyFile(__dirname + '/'+file, __dirname + '/'+ file.replace(".js",".txt"));
			pathrn.push(
				fs.createReadStream(__dirname + '/' + file.replace('.js', '.txt'))
			);
			pathrntxt.push(file.replace('.js', '.txt'));
		} else {
			path.push(fs.createReadStream(__dirname + '/' + file));
		}
	}
	if(event.type == "message_reply") { uid = event.messageReply.senderID }
	if(event.type != "message_reply") { uid = event.threadID }
	var mainpath = [...path, ...pathrn];
	if (pathrn.length != 0)
		msg +=
			'📌 المشرف شكرا لك على شحن الوحدة ';
  api.sendMessage("⚡ تحقق من رسالة الانتظار لاستلام الوحدة ", event.threadID, event.messageID);
	api.sendMessage({ body: msg+"\n"+notfound, attachment: mainpath }, uid);
	pathrntxt.forEach(file => {
		setTimeout(function(){fs.unlinkSync(__dirname + '/' + file); }, 5000);
		
	});
	return;
};
