export const simulate = {
    typing: (sock: any, msg: any) => {
      sock.sendPresenceUpdate("composing", msg.messages[0].key.remoteJid)
    },
    recording: (sock: any, msg: any) => {
      sock.sendPresenceUpdate("recording", msg.messages[0].key.remoteJid)
    }
  }