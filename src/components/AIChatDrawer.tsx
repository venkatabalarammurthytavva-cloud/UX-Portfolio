import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../types';
import { PROFILE_IMAGE } from '../data/portfolioData';

interface AIChatDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AIChatDrawer: React.FC<AIChatDrawerProps> = ({ isOpen, onClose }) => {
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
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  const suggestedPrompts = [
    "What is Balaram's FinTech experience?",
    "Tell me about the Architect Design System",
    "How does Balaram approach WCAG accessibility?",
    "Is Balaram available for design roles?",
  ];

  useEffect(() => {
    if (!isOpen) return;

    closeBtnRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  if (!isOpen) return null;

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
    <div 
      role="dialog"
      aria-modal="true"
      aria-labelledby="chat-drawer-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 z-50 flex justify-end bg-black/70 backdrop-blur-sm animate-fadeIn"
    >
      <div className="w-full max-w-md bg-[#141313] border-l border-[#27272A] h-full flex flex-col shadow-2xl text-[#e5e2e1]">
        {/* Top Header */}
        <div className="p-4 sm:p-6 border-b border-[#27272A] bg-[#1A1A1C] flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="relative">
              <img src={PROFILE_IMAGE} alt="" aria-hidden="true" className="w-9 h-9 rounded-full object-cover border border-emerald-400" />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border border-[#1A1A1C]" aria-hidden="true"></span>
            </div>
            <div>
              <h3 id="chat-drawer-title" className="font-display font-bold text-sm text-white flex items-center gap-1">
                Balaram's AI Twin
                <span className="material-symbols-outlined text-emerald-400 text-sm" aria-hidden="true">verified</span>
              </h3>
              <p className="font-label-caps text-[10px] text-emerald-400 uppercase">Powered by Gemini 2.5 Flash</p>
            </div>
          </div>

          <button 
            ref={closeBtnRef}
            type="button"
            onClick={onClose} 
            aria-label="Close AI Chat Drawer"
            className="text-zinc-300 hover:text-white p-2 rounded-full focus:ring-2 focus:ring-emerald-400"
          >
            <span className="material-symbols-outlined text-xl" aria-hidden="true">close</span>
          </button>
        </div>

        {/* Message Container */}
        <div role="log" aria-live="polite" aria-relevant="additions" className="flex-1 p-4 overflow-y-auto space-y-4">
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
              <span className="font-label-caps text-[9px] text-zinc-300 mt-1 px-1">
                {msg.timestamp}
              </span>
            </div>
          ))}

          {isLoading && (
            <div className="flex items-center gap-2 p-3 bg-[#1A1A1C] border border-[#27272A] rounded-2xl w-fit text-xs text-emerald-400 font-label-caps" aria-live="polite">
              <span className="material-symbols-outlined text-sm animate-spin" aria-hidden="true">auto_awesome</span>
              <span>Thinking...</span>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Suggested Prompts */}
        <div className="px-4 py-2 border-t border-[#27272A] bg-[#0D0D0E]">
          <div className="text-[10px] font-label-caps text-zinc-400 uppercase mb-1.5">Suggested Questions:</div>
          <div className="flex gap-1.5 overflow-x-auto pb-1 no-scrollbar">
            {suggestedPrompts.map((p, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => sendMessage(p)}
                className="whitespace-nowrap px-2.5 py-1 bg-[#1A1A1C] hover:bg-[#27272A] border border-[#27272A] rounded-full text-[10px] font-label-caps text-emerald-300 transition-colors focus:ring-1 focus:ring-emerald-400"
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
            <label htmlFor="ai-chat-input" className="sr-only">
              Ask Balaram's AI Twin
            </label>
            <input
              id="ai-chat-input"
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Ask Balaram's AI Twin..."
              className="flex-1 px-4 py-2.5 bg-[#0D0D0E] border border-[#3F3F46] rounded-xl text-xs text-white placeholder-zinc-400 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400"
            />
            <button
              type="submit"
              disabled={isLoading || !inputText.trim()}
              aria-label="Send message"
              className="p-2.5 bg-emerald-500 hover:bg-emerald-400 disabled:opacity-50 text-black rounded-xl transition-all focus:ring-2 focus:ring-emerald-400"
            >
              <span className="material-symbols-outlined text-lg" aria-hidden="true">send</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
