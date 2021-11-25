# DarkDashboard

DarkDashboard is a completely free theme.
This is nearly completed. Message me on discord if you find any bugs, iMidnight#3611.
Most of the variables are not the same as Capriham theme so you may need to change them.
This theme was heavily based on Capriham and credit goes to breftejk.

# Install

```
npm i dbd-dark-dashboard
```

# Docs

Add `http[s]://[yourdomain]/close` and `http[s]://[yourdomain]` to your https://discord.com/developers redirect oAuth.

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
    invite: {
      client_id: "[Client ID]",
      redirectUri: "http://localhost:3000/close",
      permissions: "8",
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
    guilds: {
      cardTitle: "Guilds",
      cardDescription: "Here are all the guilds you currenly have permissions for:",
    },
    //If guildSettings is removed the text will not be visible.
    guildSettings: {
      cardTitle: "Guild Settings",
      cardDescription: "Here you can manage all the settings for your guild:",
    },
    commands: {
      categoryOne: {
        category: `Starting Up`,
        subTitle: `All helpful commands`,
        list: [
          {
            commandName: "Test command",
            commandUsage: "prefix.test <arg> [op]",
            commandDescription: "Lorem ipsum dolor sth",
            commandAlias: "Alias",
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
    },
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
```


Command Categories (Keep inside commands section)
```js
...

    categoryTwo: {
      category: `Moderation Commands`,
      subTitle: `All Moderation commands`,
      list: [
        {
          commandName: "Test command",
          commandUsage: "prefix.test <arg> [op]",
          commandDescription: "Lorem ipsum dolor sth",
          commandAlias: "Alias",
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
    categoryThree: {
      category: `Miscellaneous Commands`,
      subTitle: `All Miscellaneous commands`,
      list: [
        {
          commandName: "Test command",
          commandUsage: "prefix.test <arg> [op]",
          commandDescription: "Lorem ipsum dolor sth",
          commandAlias: "Alias",
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
    categoryFour: {
      category: `List`,
      subTitle: `All commands`,
      list: [],
    },
    categoryFive: {
      category: `List`,
      subTitle: `All commands`,
      list: [],
    },
...
```
Guild Information 
```js
...
    guildInfo: {
        cardTitle: "Server Information",
        cardDescription: "An overview about your server",
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

