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
const { getMessage } = require("./getMessage");
module.exports = {
    position: (msg, p) => __awaiter(void 0, void 0, void 0, function* () {
        const m = yield getMessage(msg);
        if (p === "end") {
            const words = m.split(" ");
            return words[words.length - 1];
        }
        else if (p === "except first") {
            return m.split(" ").slice(1).join(" ");
        }
        return "";
    }),
    index: (msg, i) => __awaiter(void 0, void 0, void 0, function* () {
        const m = yield getMessage(msg);
        return m.split(" ")[i];
    }),
};
