const {Client, MessageEmbed} = require('discord.js');

const client = new Client();
client.on('ready', () => {
    console.log(`Bot is ready as ${client.user.tag}`);
    //user is the bot
    client.user.setStatus('online');
    console.log(client.user.presence.status);

    //const owlFriends = client.channels.find(channel => channel.name === 'owlfriends');
    //console.log(owlFriends)
});

client.on('message', async message => {

    console.log(message.content);
    if(message.content === 'buen dia'){
        message.reply('Muy buen día! Bienvenid@ a Owl house');
    }
    if(message.content === "hello"){
        message.channel.send(`Hi, welcome to the house ${message.author}!`);
    }

    if(message.content.includes('!test')) {
        message.channel.send("Glad you're testing")
    }
    if(message.content.includes('cv')) {
        message.channel.send("https://agusprats.github.io/agustinaPrats");
        message.channel.send("https://www.linkedin.com/in/agustina-prats-1157a916")
    }

    if(message.content.includes('portfolio')) {
        message.channel.send("https://agusprats.github.io/agustinaPrats");
        message.channel.send("https://www.linkedin.com/in/agustina-prats-1157a916")
    }

    if(message.content === 'Hola' ){
        const embed = new MessageEmbed()
        .setTitle('Bienvenid@ a Owl Chat')
        .setColor('DARK_VIVID_PINK')
        .addField('Hola cómo estás?', "Espero que super!")
        .setAuthor('The Owl', 'https://media1.tenor.com/images/472c194c10d6d6d7eeed3a61e62dbf06/tenor.gif?itemid=12429723');
    message.channel.send(embed);
    }
    if(message.content === 'Buenas' ){
        const embed = new MessageEmbed()
        .setTitle('Bienvenid@ a Owl Chat')
        .setColor('DARK_VIVID_PINK')
        .addField('Muy buenas, cómo estás?', "Espero que super!")
        .setAuthor('The Owl', 'https://media1.tenor.com/images/472c194c10d6d6d7eeed3a61e62dbf06/tenor.gif?itemid=12429723');
    message.channel.send(embed);
    }

    if(message.content === '!clear'){
        const fetched = await message.channel.fetchMessages({limit: 50});
        message.channel.bulkDelete(fetched);
        console.log('Messages Deleted');
    }

    if(message.content === '!ping') {
        message.reply('PONG!');
    }
});

client.login('#')
