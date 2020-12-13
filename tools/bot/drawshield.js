const Discord = require('discord.js');
const fetch = require('node-fetch');
const querystring = require('querystring');

const client = new Discord.Client();
const prefix = '!';

const helpInfo = {
    define: "*!define <term>*\nProvide a brief definition of a heraldic term (Searches Parker's heraldic dictionary, and Elvins' Heraldic dictionary) and provides a link to the full entry.",
    challenge: `*!challenge*
Shows you a randomly selected image of a coat of arms from somewhere on the internet. Can you reproduce it using DrawShield? Sometimes you will have to guess charges and colours, and sometimes the referenced resource will have disappeared, if  you don't see anything just ask for another challenge.
You can also provide the name of source for the challenges, the currently supported sources are:
coadb - coadb.com catalog of European surnames (32,000 entries, many broken, monochrome)
public - The Book of Public Arms (1,200 entries, monochrome)
wikimedia - Wikimedia commons (243, genuine DrawShield, colour)`,
    catalog: "*!catalog <item>*\nSearch the visual catalog for <item>. If there is an exact match then the relevant image from the catalog is returned. You can also do a wildcard search by putting an asterisk at the end, in which case the names of up to 10 charge names that contain the string <item> will be listed.",
    link: "*!link*\nReturns an invite link to add the bot to another server.",
    draw: "*!draw <blazon>*\nInvoke drawshield to draw the specified blazon. *!draw random* to get a random shield.",
    help: "*!help <command>*\nShow this information"
};

const trim = (str, max) => (str.length > max ? `${str.slice(0, max - 3)}...` : str);

client.once('ready', () => {
    console.log('Ready!');
});

client.on('message', async message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'define') {
        if (!args.length) {
            return message.channel.send('You need to supply a search term!');
        }

        const term = args.join(' ');

        const query = querystring.escape(term);

        // The default search does a fuzzy match, which is sometimes brilliant at resolving spelling
        // errors and sometimes returns nonsense. If you don't want this behaviour add:
        // &match=exact
        // to the query string. For full details of the API see
        // https://github.com/drawshield/drawshield-website/wiki/DrawShield-API
        const definition = await fetch(`https://drawshield.net/api/define/${query}`).then(response => response.json());

        if (definition.hasOwnProperty('error')) {
            return message.channel.send(`Sorry, no results found for **${term}**.`);
        }


        message.channel.send(trim(definition.content, 1024) + " See more: " + definition.URL);
    } else if (command === 'draw') {
        if (!args.length) {
            return message.channel.send('You need to supply a blazon!');
        }

        var term = args.join(' ');
        if (term.startsWith('-')) {
            term = term.slice(1);
        }
        if (term === 'random') {
            const random = await fetch('https://drawshield.net/include/randomblazon.php').then(response => response.text());
            term = random;
            message.channel.send(term);
        }


        const blazon = querystring.escape(term);

        return message.channel.send(`https://drawshield.net/include/drawshield.php?blazon=${blazon}&outputformat=png&dummy=shield.png`);

    } else if (command === 'challenge') {
        var source = 'all';
        if (args.length) {
            source = args[0];
        }

        const image = await fetch(`https://drawshield.net/api/challenge/${source}`).then(response => response.json());

        if (image.hasOwnProperty('error')) {
            return message.channel.send(`Sorry, no challenge found.`);
        }
        message.channel.send("Can you recreate, as closely as possible, the following image\n" + image);
    } else if (command === 'catalog') {
        if (!args.length) {
            return message.channel.send('You need to supply a search term!');
        }

        const term = args.join(' ');

        const query = querystring.escape(term);

        const catalogResponse = await fetch(`https://drawshield.net/api/catalog/${query}`).then(response => response.json());
        return message.channel.send(catalogResponse);
    } else if (command === 'link') {
        return message.channel.send('https://discord.com/oauth2/authorize?client_id=775740113804197888&scope=bot');
    } else if (command === 'help') {
        helpText = "Commands are define, challenge, catalog, link, draw. Use !help <command> for details.";
        helpItem = args.join(' ');
        if (helpItem.startsWith('def')) {
            helpText = helpInfo.define;
        } else if (helpItem.startsWith('cha')) {
            helpText = helpInfo.challenge;
        } else if (helpItem.startsWith('lin')) {
            helpText = helpInfo.link;
        } else if (helpItem.startsWith('cat')) {
            helpText = helpInfo.catalog;
        } else if (helpItem.startsWith('dra')) {
            helpText = helpInfo.draw;
        }
        return message.channel.send(helpText)
    }
});

client.login('your-token-here');
