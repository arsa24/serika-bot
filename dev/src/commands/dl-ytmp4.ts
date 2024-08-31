const { progress, reply, y2mate, filter, youtube } = require("../lib");

export = {
  name: "Youtube MP4",
  triggers: ["yt"],
  code: async (sock: any, msg: any) => {
    try {
      progress.waiting(sock, msg);
      const url = await filter.position(msg, "except first");
      const data: any = await youtube(url);

      const result = await y2mate(await data.vid, await data.links.mp4.auto.k);

      const res = await result.data;
      await reply(sock, msg, {
        video: {
          url: res.dlink,
        },
        gifPlayback: false,
        caption: `Judul: ${res.title}\nKualitas: ${res.fquality}`,
      });
      progress.done(sock, msg);
    } catch (e) {
      await reply(sock, msg, `[ ! ] ${e}`);
      progress.fail(sock, msg);
    }
  },
};
