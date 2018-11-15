const Discord = require('discord.js')
const client = new Discord.Client()

console.log('Welcome to Probot Miner !')
console.log('DONT USE THIS CODE ON YOUR REAL ACCOUNT !') // WARNING !

client.on('ready', async() => {
    const server = "492747482942406656"; // ايدي السررفر
const channel = "492747482942406659";//ايدي الروم
        setInterval(()=>{
        client.guilds.get(server).channels.get(channel).send(`*ssssssssssssssssssssdadasdadasidjapoidnadipkandsaidjha0piwdawnidkkkkkdkdkdkdkdkdkmsaddaopidwdmaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaawsakllmdsa;kkkkkdmsdk;samnkcnaksdnaaaaaaaaaasjfakjandjakdnakl
        **`)//spamming message.
    },305);//Delay Time
    })

client.login(process.env.BOT_TOKEN)//Your Token

  
