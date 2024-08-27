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
const { pino } = require("pino");
const { makeWASocket, useMultiFileAuthState, } = require("@whiskeysockets/baileys");
const { pairingCode, botNumber } = require("./config/bot");
const { commandHandler } = require("./src/handler/index");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const { state, saveCreds } = yield useMultiFileAuthState("state");
        const sock = makeWASocket({
            printQRInTerminal: true,
            logger: pino({ level: "silent" }),
            // browser: ["", "", ""],
            auth: state,
            defaultQueryTimeoutMs: undefined,
            syncFullHistory: false,
        });
        sock.ev.on("connection.update", (m) => {
            var _a;
            const { connection, lastDisconnect } = m;
            if (connection === "close") {
                console.log(lastDisconnect);
                main();
            }
            if (connection === "open") {
                console.log(`Connected at ${(_a = sock.user) === null || _a === void 0 ? void 0 : _a.id}`);
            }
        });
        sock.ev.on("creds.update", saveCreds);
        sock.ev.on("messages.upsert", (msg) => __awaiter(this, void 0, void 0, function* () {
            const key = {
                remoteJid: msg.messages[0].key.remoteJid,
                id: msg.messages[0].key.id,
                participant: msg.messages[0].key.participant,
            };
            yield sock.readMessages([key]);
            yield commandHandler(sock, msg);
        }));
    });
}
main();
