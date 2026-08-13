import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

let aiClient: GoogleGenAI | null = null;
function getGenAI() {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY environment variable is not set");
    }
    aiClient = new GoogleGenAI({ apiKey });
  }
  return aiClient;
}

// AI Assistant Endpoint for Portfolio Twin
app.post("/api/chat", async (req, res) => {
  try {
    const { message, history } = req.body;
    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    const ai = getGenAI();
    const systemInstruction = `You are Balaram's AI Assistant (Portfolio Twin). Balaram is a Senior Product & Systems Designer with 5+ years of experience, 10+ completed enterprise projects, and over 15L+ users served with 0 escalations.
He has worked at top tech companies including NeoSOFT, Qentelli, and Get Infy Solutions.
Key Projects:
1. Aether Capital: Enterprise FinTech Loan Management Workflow (Automated underwriting, risk management, loan processing).
2. Investment & Wealth Portal: Premium Wealth Management Dashboard with real-time portfolio tracking and asset allocation.
3. Multi-Brand Design System: 4,000+ Reusable Tokenized Components in Figma & React.
4. Mobile Banking Redesign: Precision UX flows for mobile banking, reducing transaction friction by 34%.
5. E-commerce Checkout Flow: Optimizing conversion for global retail.

Personality: Concise, articulate, professional, technical, friendly, and enthusiastic about design systems, fintech, music production, and UI engineering.
Keep responses clear, well-structured, and concise.`;

    const contents = [
      ...(history || []),
      { role: "user", parts: [{ text: message }] }
    ];

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents,
      config: {
        systemInstruction,
        temperature: 0.7,
      }
    });

    res.json({ text: response.text });
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    res.status(500).json({
      error: error.message || "Failed to generate AI response",
      fallbackText: "I'm Balaram's Portfolio Assistant. Balaram specializes in FinTech systems, design tokens, and high-impact enterprise UX. Feel free to explore his selected work, test out the live Design System Explorer, or drop a message in the Contact tab!"
    });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
