"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.simulate = void 0;
exports.simulate = {
    typing: (sock, msg) => {
        sock.sendPresenceUpdate("composing", msg.messages[0].key.remoteJid);
    },
    recording: (sock, msg) => {
        sock.sendPresenceUpdate("recording", msg.messages[0].key.remoteJid);
    }
};
