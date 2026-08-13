import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../types';
import { PROFILE_IMAGE } from '../data/portfolioData';

interface AIChatDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AIChatDrawer: React.FC<AIChatDrawerProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'assistant',
      text: "Hi! I'm Balaram's AI Assistant. Ask me anything about Balaram's 5+ years in product design, FinTech loan workflows, design systems, or availability!",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const suggestedPrompts = [
    "What is Balaram's FinTech experience?",
    "Tell me about the Architect Design System",
    "How does Balaram approach WCAG accessibility?",
    "Is Balaram available for design roles?",
  ];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const sendMessage = async (textToSend?: string) => {
    const query = textToSend || inputText;
    if (!query.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputText('');
    setIsLoading(true);

    try {
      const formattedHistory = messages
        .filter((m) => m.id !== 'welcome')
        .map((m) => ({
          role: m.sender === 'user' ? 'user' : 'model',
          parts: [{ text: m.text }],
        }));

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: query, history: formattedHistory }),
      });

      const data = await res.json();
      const replyText = data.text || data.fallbackText || "I'm Balaram's AI Assistant. Balaram specializes in enterprise FinTech systems, tokenized design systems, and responsive UX.";

      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: 'assistant',
          text: replyText,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: 'assistant',
          text: "Balaram is a Senior Product & Systems Designer with 5+ years of experience across NeoSOFT, Qentelli, and Get Infy Solutions. He has shipped enterprise loan platforms, wealth portals, and multi-brand design systems.",
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div className="w-full max-w-md bg-[#141313] border-l border-[#27272A] h-full flex flex-col shadow-2xl text-[#e5e2e1]">
        {/* Top Header */}
        <div className="p-4 sm:p-6 border-b border-[#27272A] bg-[#1A1A1C] flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="relative">
              <img src={PROFILE_IMAGE} alt="Balaram AI" className="w-9 h-9 rounded-full object-cover border border-emerald-400" />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border border-[#1A1A1C]"></span>
            </div>
            <div>
              <h3 className="font-display font-bold text-sm text-white flex items-center gap-1">
                Balaram's AI Twin
                <span className="material-symbols-outlined text-emerald-400 text-sm">verified</span>
              </h3>
              <p className="font-label-caps text-[10px] text-emerald-400 uppercase">Powered by Gemini 2.5 Flash</p>
            </div>
          </div>

          <button onClick={onClose} className="text-[#c5c6ca] hover:text-white p-1">
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </div>

        {/* Message Container */}
        <div className="flex-1 p-4 overflow-y-auto space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
            >
              <div
                className={`max-w-[85%] p-3.5 rounded-2xl text-sm leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-emerald-500 text-black font-medium rounded-tr-none'
                    : 'bg-[#1A1A1C] border border-[#27272A] text-white rounded-tl-none'
                }`}
              >
                {msg.text}
              </div>
              <span className="font-label-caps text-[9px] text-[#c5c6ca] mt-1 px-1">
                {msg.timestamp}
              </span>
            </div>
          ))}

          {isLoading && (
            <div className="flex items-center gap-2 p-3 bg-[#1A1A1C] border border-[#27272A] rounded-2xl w-fit text-xs text-emerald-400 font-label-caps">
              <span className="material-symbols-outlined text-sm animate-spin">auto_awesome</span>
              <span>Thinking...</span>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Suggested Prompts */}
        <div className="px-4 py-2 border-t border-[#27272A] bg-[#0D0D0E]">
          <div className="text-[10px] font-label-caps text-gray-500 uppercase mb-1.5">Suggested Questions:</div>
          <div className="flex gap-1.5 overflow-x-auto pb-1 no-scrollbar">
            {suggestedPrompts.map((p, idx) => (
              <button
                key={idx}
                onClick={() => sendMessage(p)}
                className="whitespace-nowrap px-2.5 py-1 bg-[#1A1A1C] hover:bg-[#27272A] border border-[#27272A] rounded-full text-[10px] font-label-caps text-emerald-300 transition-colors"
              >
                {p}
              </button>
            ))}
          </div>
        </div>

        {/* Input Bar */}
        <div className="p-4 border-t border-[#27272A] bg-[#1A1A1C]">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              sendMessage();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Ask Balaram's AI Twin..."
              className="flex-1 px-4 py-2.5 bg-[#0D0D0E] border border-[#27272A] rounded-xl text-xs text-white placeholder-gray-500 focus:outline-none focus:border-emerald-400"
            />
            <button
              type="submit"
              disabled={isLoading || !inputText.trim()}
              className="p-2.5 bg-emerald-500 hover:bg-emerald-400 disabled:opacity-50 text-black rounded-xl transition-all"
            >
              <span className="material-symbols-outlined text-lg">send</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
