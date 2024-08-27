"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.reply = void 0;
const reply = (sock, msg, content, options) => __awaiter(void 0, void 0, void 0, function* () {
    if (typeof content == "string")
        content = { text: content };
    yield sock.sendMessage(msg.messages[0].key.remoteJid, content, Object.assign({ quoted: msg.messages[0] }, options));
});
exports.reply = reply;
