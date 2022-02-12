const fetch = require('node-fetch');
const fs = require('fs');
module.exports = (themeConfig = {}) => {
    if(
        require('discord-dashboard').startWith('1')
        ||
        require('discord-dashboard').startWith('2.0')
        ||
        require('discord-dashboard').startWith('2.1')
        ||
        require('discord-dashboard').startWith('2.2')
    )throw new TypeError("This theme supports only discord-dashboard@>2.3 # Please update your discord-dashboard module.");
    
    return {
        themeCodename: 'dbddrk',
        viewsPath: require('path').join(__dirname, '/views'),
        staticPath: require('path').join(__dirname, '/views/src'),
        themeConfig: themeConfig,
        embedBuilderComponent: require('fs').readFileSync(require('path').join(__dirname, '/embedBuilderComponent.txt'), 'utf8'),
        init: (app, config) => {
            app.use('/commands', (req, res) => {
                res.render('commands', {req: req, config: config, themeConfig: themeConfig});
            });
            app.use('/close', (req, res) => {
                res.render('close', {req: req, config: config, themeConfig: themeConfig});
            });
            app.use('/privacy-policy', (req, res) => {
                res.render('pp', {req: req, config: config, themeConfig: themeConfig});
            });
            app.use('/debug', async(req, res) => {
                /*
                If you are modifying the theme, please do not remove this page.
                It will be used with support in the discord server.
                */
                
                let onlineFiles = {
                    index: await fetch(`https://adn.siondevelopment.xyz/dbd-dark/src/ejs/index.ejs`),
                    guild: await fetch(`https://adn.siondevelopment.xyz/dbd-dark/src/ejs/guild.ejs`),
                    guilds: await fetch(`https://adn.siondevelopment.xyz/dbd-dark/src/ejs/guilds.ejs`)
                }
                
                onlineFiles.index = await onlineFiles.index.text();
                onlineFiles.guild = await onlineFiles.guild.text();
                onlineFiles.guilds = await onlineFiles.guilds.text();

                let localFiles = {
                    index: await fs.readFileSync(__dirname + '/views/index.ejs', 'utf-8'),
                    guild: await fs.readFileSync(__dirname + '/views/guild.ejs', 'utf-8'),
                    guilds: await fs.readFileSync(__dirname + '/views/guilds.ejs', 'utf-8')
                }
                
                
                res.render('debug', {bot: config.bot, req, config, rawUptime: process.uptime(), onlineFiles, localFiles, nodeVersion: process.version, themeConfig: themeConfig, discordVersion: require('discord.js').version, dbdVersion: require('discord-dashboard').version, themeVersion: require('./package.json').version});
            });
        }
    };
};
