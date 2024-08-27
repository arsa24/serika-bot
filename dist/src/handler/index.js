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
const { prefix } = require("../../config/bot");
const fs = require("fs");
const path = require("path");
// const {filterMessage} = require("../lib/filter")
const { simulate } = require("../lib/simulate");
const { getMessage } = require("../lib/getMessage");
module.exports = {
    commandHandler: (sock, msg) => __awaiter(void 0, void 0, void 0, function* () {
        const message = yield getMessage(msg);
        const pathCmds = path.join(__dirname, "../commands");
        const commands = fs.readdirSync(pathCmds);
        const cmd = msg.messages[0].message;
        commands === null || commands === void 0 ? void 0 : commands.forEach((cmd) => {
            var _a;
            const pathCmd = path.join(pathCmds, cmd);
            const re = require(pathCmd);
            (_a = re === null || re === void 0 ? void 0 : re.triggers) === null || _a === void 0 ? void 0 : _a.forEach((trigger) => {
                if (message.split(" ")[0].toLowerCase() == prefix + trigger) {
                    simulate.typing(sock, msg);
                    return re.code(sock, msg);
                }
            });
        });
    })
};
