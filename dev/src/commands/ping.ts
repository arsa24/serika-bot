const {reply} = require("../lib")

export = {
  name: "Ping",
  triggers: ["ping", "p"],
  code: async (sock: any, msg: any) => {
    await reply(sock, msg, "pong")
  },
};
