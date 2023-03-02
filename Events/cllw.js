const Discord = require("discord.js");
const client = global.client;

exports.execute = async (message) => {
  
 var JoinChannel = client.channels.cache.get("Ses ID");
 
 const { joinVoiceChannel } = require('@discordjs/voice');

 if(JoinChannel){
const connection = joinVoiceChannel({
	channelId: JoinChannel.id,
	guildId: JoinChannel.guild.id,
	adapterCreator: JoinChannel.guild.voiceAdapterCreator,
});
 } else {
   console.log("Go To cllw.js , 6"),
     console.log("Events/cllw.js , 6  ")
 }
    
 };
exports.conf = {
  event: "ready"
};
