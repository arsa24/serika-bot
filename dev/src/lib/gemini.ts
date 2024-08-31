const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");
const fs = require("fs");
const { GEMINI_APIKEY } = require("../../config/apikey");

export const gemini: any = async (prompt: string) => {
  const historyPath: string = "./log/geminiHistory.json";
  const genAI: any = new GoogleGenerativeAI(GEMINI_APIKEY);

  if(!fs.existsSync("./log/geminiHistory.json")) fs.writeFileSync("./log/geminiHistory.json", "[]")

  let dataHistory: any = fs.readFileSync(historyPath);
  if(dataHistory == "") dataHistory = "[]"
  const history: any = JSON.parse(dataHistory);

  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash-latest",
    systemInstruction: "Namamu adalah Serika, balas dengan tsundere",
    safetySettings: [
      {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.BLOCK_NONE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
        threshold: HarmBlockThreshold.BLOCK_NONE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
        threshold: HarmBlockThreshold.BLOCK_NONE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
        threshold: HarmBlockThreshold.BLOCK_NONE,
      },
    ],
  });

  const chat = model.startChat({
    history: history,
  });

  let result = await chat.sendMessage(prompt);

  saveHistory("user", prompt);
  saveHistory("model", result.response.text());
  
  return result;
};

export const saveHistory: any = async (role: string, text: string) => {
  const historyPath: string = "./log/geminiHistory.json";
  let history = [];
  if (fs.existsSync(historyPath)) {
    try {
      const data = fs.readFileSync(historyPath, "utf8");
      if (data) {
        history = JSON.parse(data);
      }
    } catch (e) {
      console.error(e);
      history = []
    }
  }
  history.push({
    role: role,
    parts: [{ text: text }],
  });

  fs.writeFileSync(historyPath, JSON.stringify(history, null, 2));
};
