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
exports.getMessage = void 0;
const getMessage = (msg) => __awaiter(void 0, void 0, void 0, function* () {
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
});
exports.getMessage = getMessage;
