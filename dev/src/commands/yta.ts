const {reply} = require("../lib/reply")

export = {
    name: "Youtube Audio",
    triggers: ["ytmp3", "yta"],
    code: async (sock: any, msg: any) => {
        await reply(sock, msg, "dalam pengembangan")
    }
}