export const getMessage = async (msg: any): Promise<string> => {
  const messageType = Object.keys(msg.messages[0].message)[0];

  return messageType === "conversation"
    ? msg.messages[0].message.conversation
    : messageType === "extendedTextMessage"
    ? msg.messages[0].message.extendedTextMessage.text
    : messageType === "imageMessage"
    ? msg.messages[0].message.imageMessage.caption
    : messageType === "videoMessage"
    ? msg.messages[0].message.videoMessage.caption
    : "";
};
