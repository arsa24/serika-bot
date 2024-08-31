const { reply } = require("./reply");

export const progress = {
  waiting: async (sock: any, msg: any) => {
    const reaction = {
      react: {
        text: "⏳",
        key: msg.messages[0].key,
      },
    };
    await reply(sock, msg, reaction);
  },
  done: async (sock: any, msg: any) => {
    const reaction = {
      react: {
        text: "✅",
        key: msg.messages[0].key,
      },
    };
    await reply(sock, msg, reaction);
  },
  fail: async (sock: any, msg: any) => {
    const reaction = {
      react: {
        text: "❎",
        key: msg.messages[0].key,
      },
    };
    await reply(sock, msg, reaction);
  },
};
