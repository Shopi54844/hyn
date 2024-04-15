module.exports.config = {
  name: "resetmoney",
  version: "1.0.2",
  hasPermssion: 2,
  credits: "Horizon Team",
  description: " حذف أموال المجموعة او حذف جميع الأموال",
  commandCategory: "المطور و ادمنية البوت",
  usages: "",
  cooldowns: 5
};

module.exports.run = async function ({ api,event,Currencies,Users,args }) {
    	if(args[0]=="UID"){
		var id = args[1];
		var cut = args[2];
		let nameeee = (await Users.getData(id)).name
		   return api.sendMessage(`[𝐇𝐓🐧] => تم تغيير رصيد
 من ${nameeee} الى ${cut} دولار`, event.threadID, () => Currencies.setData(id, { money:parseInt(cut)}), event.messageID)	

		}
     var x = global.data.allCurrenciesID;
      for (let ex of x) {
            await Currencies.setData(ex, { money: parseInt(0) });
            var eheh = (await Currencies.getData(ex)).money;
            console.log(eheh)
         }
    return api.sendMessage("[𝐇𝐓🐧] => نم حذف كل الأموال الموجودة على النظام",event.threadID);
}