!const MusicBot = require('discord-musicbot');

const config = {
  // these 3 are always required.
  token: 'NDI3NDQ3NDA0ODE2NjI5NzYx.DZvDYQ.jCCe7RdczQLKDfsXT07NYO-G6no',
  serverId: '417051641678790657',
  textChannelId: '421835822711701506',

  // override any default settings.
  // see `src/config/settings.js` for an idea of structure here.
  settings: {
    commandPrefix: '!!!',
  },

  // customize the replies you receive.
  // see `src/config/replies.js` for an idea of structure here.
  replies: {
    general: {
      unknownCommand: 'Looks like I don\'t know that one!',
    },
  },

  // customize log messages... I dunno why you'd want to do it, but I've
  // allowed for it all the same.
  // see `src/config/logging.js` for an idea of structure here.
  logging: {
    connected: 'Bot started and connected.',
  },

  // set up custom user permission groups and assign users to them.
  permissions: {
    groups: {
      // if you provide an already existing group, it will override that
      // groups default permissions.
      admin: {
        disconnect: true,
        setavatar: true,
        setusername: true,
      },

      // you can define new groups and add permissions to them. All groups
      // will still inherit the global permissions though so if you want to
      // restrict a group down you'll need to turn perms off.
      poweruser: {
        disconnect: true,
      },
    },
    // ... and you can define multiple users to a group.
    // note; there is no 'inheritance' between groups, if a group does not
    // have the permission set then it falls back to the global permissions.
    users: {
      '206037786808156160': 'admin',
      '342281001067741184': 'admin',
      '231527605960966144': 'poweruser', // undefined group, will use global perms.
    },
  }
};

const musicBot = new MusicBot(config);

musicBot.run();
