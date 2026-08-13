import { GoogleGenAI } from "@google/genai";

export async function onRequestPost(context: { request: Request; env: Record<string, string> }) {
  try {
    const { request, env } = context;
    const body = (await request.json()) as { message?: string; history?: any[] };
    const { message, history } = body;

    if (!message) {
      return new Response(JSON.stringify({ error: "Message is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const apiKey =
      env.GEMINI_API_KEY ||
      (typeof process !== "undefined" ? process.env?.GEMINI_API_KEY : undefined);

    if (!apiKey) {
      return new Response(
        JSON.stringify({
          error: "GEMINI_API_KEY is not set",
          fallbackText:
            "I'm Balaram's Portfolio Assistant. Balaram specializes in FinTech systems, design tokens, and high-impact enterprise UX. Feel free to explore his selected work, test out the live Design System Explorer, or drop a message in the Contact tab!",
        }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    const ai = new GoogleGenAI({ apiKey });
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
      { role: "user", parts: [{ text: message }] },
    ];

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    return new Response(JSON.stringify({ text: response.text }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error: any) {
    return new Response(
      JSON.stringify({
        error: error.message || "Failed to generate AI response",
        fallbackText:
          "I'm Balaram's Portfolio Assistant. Balaram specializes in FinTech systems, design tokens, and high-impact enterprise UX. Feel free to explore his selected work, test out the live Design System Explorer, or drop a message in the Contact tab!",
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
