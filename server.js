import express from "express";
import OpenAI from "openai";
import dotenv from "dotenv";
import path from "node:path";
import { fileURLToPath } from "node:url";

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;
const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.use(express.json({ limit: "1mb" }));
app.use(express.static(__dirname));

app.post("/api/chat", async (req, res) => {
  try {
    const message = String(req.body?.message || "").trim();
    if (!message) return res.status(400).json({ error: "Xabar bo‘sh." });
    if (message.length > 6000) return res.status(400).json({ error: "Xabar juda uzun." });
    if (!process.env.OPENAI_API_KEY) {
      return res.status(503).json({ error: "Serverda OPENAI_API_KEY sozlanmagan." });
    }
    const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    const response = await client.responses.create({
      model: process.env.OPENAI_MODEL || "gpt-6",
      instructions: "Sen SUHROB AI nomli yordamchisan. Foydalanuvchiga o‘zbek tilida, do‘stona, tushunarli va xavfsiz javob ber. Foydalanuvchi boshqa tilda yozsa, o‘sha tilda javob ber. Kerak bo‘lsa, javobni qisqa bo‘limlarga ajrat.",
      input: message
    });
    res.json({ reply: response.output_text || "Kechirasan, javob yaratilmadi." });
  } catch (err) {
    console.error("Chat API error:", err?.message || err);
    res.status(500).json({ error: "AI javobini olishda xatolik. API kaliti, model va hisob sozlamalarini tekshiring." });
  }
});

app.listen(port, () => console.log(`SUHROB AI is running on port ${port}`));
