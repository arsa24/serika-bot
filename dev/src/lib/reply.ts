export const reply = async (
  sock: any,
  msg: any,
  content: any,
  options: any
) => {
  if (typeof content == "string") content = { text: content };
  await sock.sendMessage(msg.messages[0].key.remoteJid, content, {
    quoted: msg.messages[0],
    ...options,
  });
};
