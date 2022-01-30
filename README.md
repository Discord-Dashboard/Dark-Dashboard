# DarkDashboard

DarkDashboard is a completely free theme. If you find any issues, join the
discord-dashboard [Discord Server](https://discord.gg/CHbfcSbEgd)!
This theme was heavily based on Capriham and credit goes to breftejk.

# Install

```
npm i dbd-dark-dashboard
```

# Look

![image1](https://i.imgur.com/33sk9Gi.png)
![image2](https://imgur.com/2Lu0dtH.png)
![image3](https://imgur.com/cryZKZh.png)
![image4](https://i.imgur.com/BSYQiXW.png)
![image5](https://i.imgur.com/cZmoHl9.png)

# Usage

[discord-dashboard](https://github.com/breftejk/Discord.js-Web-Dashboard) Config Here

Full config example below:

```js
const DBD = require('discord-dashboard');
const DarkDashboard = require('dbd-dark-dashboard');

const Dashboard = new DBD.Dashboard({
    ...
   theme: DarkDashboard({
    information: {
        createdBy: "iMidnight",
        websiteTitle: "iMidnight",
        websiteName: "iMidnight",
        websiteUrl: "https:/www.imidnight.ml/",
        dashboardUrl: "http://localhost:3000/",
        supporteMail: "support@imidnight.ml",
        supportServer: "https://discord.gg/yYq4UgRRzz",
        imageFavicon: "https://www.imidnight.ml/assets/img/logo-circular.png",
        iconURL: "https://www.imidnight.ml/assets/img/logo-circular.png",
        pageBackGround: "linear-gradient(#2CA8FF, #155b8d)",
        loggedIn: "Successfully signed in.",
        mainColor: "#2CA8FF",
        subColor: "#ebdbdb",
    },
    index: {
        card: {
            category: "iMidnight's Panel - The center of everything",
            title: `Welcome to the iMidnight discord where you can control the core features to the bot.`,
            image: "https://i.imgur.com/axnP93g.png",
            footer: "Footer",
        },
        information: {
            category: "Category",
            title: "Information",
            description: `This bot and panel is currently a work in progress so contact me if you find any issues on discord.`,
            footer: "Footer",
        },
        feeds: {
            category: "Category",
            title: "Information",
            description: `This bot and panel is currently a work in progress so contact me if you find any issues on discord.`,
            footer: "Footer",
        },
    },
    commands: [
        {
            category: "Starting Up",
            subTitle: "All helpful commands",
            aliasesDisabled: false,
            list: [{
                commandName: "bug",
                commandUsage: ";bug <bug>",
                commandDescription: "Report a bug to the developers of Wooar.",
                commandAlias: "No aliases"
            },
                {
                    commandName: "2nd command",
                    commandUsage: "oto.nd <arg> <arg2> [op]",
                    commandDescription: "Lorem ipsum dolor sth, arg sth arg2 stuff",
                    commandAlias: "Alias",
                },
                {
                    commandName: "Test command",
                    commandUsage: "prefix.test <arg> [op]",
                    commandDescription: "Lorem ipsum dolor sth",
                    commandAlias: "Alias",
                },
            ],
        },
    ],
}),
...
})
;

Dashboard.init();
```

# Optional

Theme Customisation

```js
...
    //Select old or new guild list type
    guilds: {
        cardTitle: "Guilds",
        cardDescription: "Here are all the guilds you currenly have permissions for:",
        type: "blurlist"
    },
...
...
    //Customise sidebar
    sidebar: {
        //If set to false all default items in sidebar will be removed
        keepDefault: true,
        list: [
        {
            //Icon does not have to be an svg, any html can be used
            icon: `<svg style="position: absolute; margin-left: 8px; margin-top: 2px;" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#2CA8FF">    <path d="M0 0h24v24H0z" fill="none"/> <path d="M20.38 8.57l-1.23 1.85a8 8 0 0 1-.22 7.58H5.07A8 8 0 0 1 15.58 6.85l1.85-1.23A10 10 0 0 0 3.35 19a2 2 0 0 0 1.72 1h13.85a2 2 0  0 0 1.74-1 10 10 0 0 0-.27-10.44z"/> <path d="M10.59 15.41a2 2 0 0 0 2.83 0l5.66-8.49-8.49 5.66a2 2 0 0 0 0 2.83z"/></svg>`,
            title: "Title",
            link: "/commands",
            /*
                    Used for checking current page which is defined as `now`
                    Must be lowercase and no spaces
                */
            id: "commands",
        }]
    },
...
```

Custom HTML

```js
...
custom_html: {
    head: ``, 
    body: ``,
},
...
```

Custom Privacy Policy

```js
...
privacyPolicy: {
    pp: "<span> Use custom html!</span>"
},
...
```

Custom Text

```js
...
popupMsg: {
    savedSettings: "Saved settings", 
    noPerms: "Error",
},
...
...
guildInfo: {
    cardTitle: "Server Information",
        cardDescription: "An overview about your server",
},
...
...
guildSettings: {
    cardTitle: "Guild Settings",
    cardDescription: "Here you can manage all the settings for your guild:",
},
...
```

Popups

```js
...
popupMsg: {
    savedSettings: "Saved settings",
    noPerms: "Error",
},
...
```
