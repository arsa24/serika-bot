const {reply} = require("../lib/reply")

export = {
    name: "Youtube Video",
    triggers: ["ytmp4", "ytv", "yt"],
    code: async (sock: any, msg: any) => {
        await reply(sock, msg, "dalam pengembangan")
    }
}