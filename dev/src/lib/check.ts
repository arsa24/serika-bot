const { ownerPhoneNumber } = require("../../config/bot");

export const check: any = {
  isGroup: async (msg: any) => {
    return await msg.messages[0].key.remoteJid?.endsWith("@g.us");
  },
  isFromMe: async (msg: any) => {
    return await msg.messages[0].key.fromMe;
  },
  messageType: async (msg: any) => {
    return Object.keys(await msg.messages[0].message)[0];
  },
  isQuotedMediaMsg: async (msg: any) => {
    const messageType = (await msg.messages[0].message?.extendedTextMessage
      ?.contextInfo?.quotedMessage?.imageMessage?.url)
      ? true
      : (await msg.messages[0].message?.extendedTextMessage?.contextInfo
          ?.quotedMessage?.videoMessage?.url)
      ? true
      : false;
    return messageType;
  },
  isOwner: async (msg: any) => {
    let number =
      (await msg.messages[0].key.participant) == undefined
        ? msg.messages[0].key.remoteJid
        : await msg.messages[0].key.participant;
    return (await number.split("@")[0]) == ownerPhoneNumber ? true : false;
  },
};
