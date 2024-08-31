const { getMessage } = require("./getMessage");

type PositionOption = "end" | "except first";

export const filter = {
  position: async (msg: any, p: PositionOption): Promise<string> => {
    const m = await getMessage(msg);

    if (p === "end") {
      const words = m.split(" ");
      return words[words.length - 1];
    } else if (p === "except first") {
      return m.split(" ").slice(1).join(" ");
    }

    return "";
  },

  index: async (msg: any, i: number): Promise<string> => {
    const m = await getMessage(msg);
    return m.split(" ")[i];
  },
};
