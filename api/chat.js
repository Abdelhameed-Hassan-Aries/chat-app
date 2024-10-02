import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");

  if (req.method !== "POST") {
    res.status(405).json({ error: "Only POST requests are allowed." });
    return;
  }

  const { message } = req.body;

  try {
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: message }],
    });

    res.json({ reply: completion.choices[0].message.content.trim() });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error generating response." });
  }
}
