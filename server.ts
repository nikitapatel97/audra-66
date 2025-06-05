import express, { Request, Response } from "express";
import { config } from "dotenv";
import { run } from "@openai/agents";
import { relationshipAgent } from "./agent.js";

config();
const app = express();
app.use(express.json());

// 🔸 In-memory message history per session (simplified for demo)
let messageHistory: { role: "user" | "assistant"; content: string }[] = [];

app.post("/message", async (req: Request, res: Response): Promise<void> => {
  const { userMessage } = req.body;

  if (!userMessage || typeof userMessage !== "string") {
    res.status(400).json({ error: "Missing or invalid 'userMessage'." });
    return;
  }

  // Add Alyssa's message to the history
  messageHistory.push({ role: "user", content: userMessage });

  try {
    const result = await run(relationshipAgent, messageHistory);
    const reply = result.finalOutput;

    if (!reply || typeof reply !== "string") {
      res.status(500).json({ error: "Agent did not return a response." });
      return;
    }

    // Add Audra's reply to the history
    messageHistory.push({ role: "assistant", content: reply });

    res.json({ reply });
  } catch (err) {
    console.error("Agent error:", err);
    res.status(500).json({ error: "Internal agent error." });
  }
});

// Optional: reset history route for testing
app.post("/reset", (_req: Request, res: Response) => {
  messageHistory = [];
  res.json({ message: "Message history reset." });
});

app.listen(3000, () => {
  console.log("🟢 Audra AI chat server running at http://localhost:3000");
});
