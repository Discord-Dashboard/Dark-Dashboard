# DarkDashboard

DarkDashboard is a completely free theme.
If you find any issues, join the discord-dashboard [Discord Server](https://discord.gg/CHbfcSbEgd)!
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
      pagestylebg: "linear-gradient(to #2CA8FF, pink 0%, #155b8d 100%)",
      main_color: "#2CA8FF",
      sub_color: "#ebdbdb",
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
});

Dashboard.init();
```
# Optional 
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

