const {reply, gemini, progress, filter} = require("../lib")


export = {
  name: "Gemini",
  triggers: ["gemini", "g"],
  code: async (sock: any, msg: any) => {
    const prompt = await filter.position(msg, "except first");
    try {
      await progress.waiting(sock, msg);
      const data: any = await gemini(prompt);
      await reply(sock, msg, await data.response.text());
      await progress.done(sock, msg);
    } catch (e) {
      await reply(sock, msg, `[ ! ] ${e}`)
      progress.fail(sock, msg);
    }
  },
};
