const { filter, youtube, reply, y2mate, progress } = require("../lib");

export = {
  name: "Youtube MP3",
  triggers: ["ytmp3"],
  code: async (sock: any, msg: any) => {
    try {
      progress.waiting(sock, msg);
      const url = await filter.position(msg, "except first");
      const data: any = await youtube(url);
      const result = await y2mate(
        await data.vid,
        await data.links.mp3.mp3128.k
      );
      await reply(sock, msg, {
        audio: {
          url: await result.data.dlink,
        },
        mimetype: "audio/mp4",
      });
      progress.done(sock, msg);
    } catch (e) {
      await reply(sock, msg, `[ ! ] ${e}`);
      progress.fail(sock, msg);
    }
  },
};
