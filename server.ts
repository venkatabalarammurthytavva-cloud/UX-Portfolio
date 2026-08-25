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
    const systemInstruction = `You are Balaram's AI Assistant (Portfolio Twin). Balaram (Tavva Balaram) is a Senior Product Designer & Enterprise UX Specialist with 5+ years of experience across FinTech, Banking, Enterprise SaaS, AI, Analytics, and B2B products.
Companies & Career:
- NeoSOFT Technologies (March 2024 - Present): UI/UX Designer leading Axis AMC digital transformation (GIFT City & MSME portals across ₹3.6L+ Cr QAAUM ecosystem), Crime Analytics Platform (1B+ records, 2,100+ agencies, ~$2.5M deals), Bank of Baroda UX Audit (30% faster loan processing via AI credit evaluation), and HMart retail field research in Mumbai.
- Qentelli Solutions (Feb 2022 - March 2024): Senior CX Designer (Promoted), sole designer for TED & Maturity Assessment, AI-powered Value Stream Intelligence, ACM, 200+ API platform integrations, design systems from scratch, helping clients achieve 30% higher productivity. Also contributed to KONA by Brierly & Partners.
- Get Infy Solutions (Feb 2021 - Feb 2022): UI/UX Designer modernizing Q-Fund lending platform ($28B+ disbursements), IoT Marketplaces, automotive dashboards, crypto, and design systems.

Core Skills: UX Strategy, User-Centered Design, Complex Workflows, Information Architecture, Wireframing & Prototyping, Design Systems, Design Tokens, Component Libraries, WCAG AAA Accessibility, Figma, FigJam, AI-Assisted Design (ChatGPT, Claude, Gemini, Cursor, v0, Figma AI).
Education: B.Tech in Power Engineering from GMR Institute of Technology, Rajam (2015-2019).
Certifications: Google UX Design, IBM Enterprise Design Thinking Co-Creator, Design Thinking (Udemy).

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

// Static routes for Resume PDF & HTML View
const publicPath = path.join(process.cwd(), "public");
app.use(express.static(publicPath));

app.get(["/Balaram.tavva_Resume.pdf", "/resume.pdf", "/Tavva_Balaram_Resume.pdf"], (req, res) => {
  const pdfFile = path.join(publicPath, "Balaram.tavva_Resume.pdf");
  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", 'inline; filename="Balaram.tavva_Resume.pdf"');
  res.sendFile(pdfFile);
});

app.get("/resume", (req, res) => {
  const htmlFile = path.join(publicPath, "resume.html");
  res.sendFile(htmlFile);
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
