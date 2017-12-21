const MusicBot = require('discord-musicbot');

const config = {
  // these 3 are always required.
  token: 'MzkzMzc1ODY0ODE0ODI5NTcw.DR03Vg.F0qZje_7AbaeWtVy-HE5oBFjeUc',
  serverId: '352828258598780931',
  textChannelId: '354277219461234688',

  // permissions is technically optional, but if you want to access to all
  // permissions you'll need to at the very least make yourself an admin.
  permissions: {
    users: {
      '206037786808156160': 'admin',
    },
  }
};

const musicBot = new MusicBot(config);

musicBot.run();