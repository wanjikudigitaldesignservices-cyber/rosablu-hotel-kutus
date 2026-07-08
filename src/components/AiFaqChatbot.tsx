'use client';

import { useState } from 'react';
import { MessageSquare, X, Send, Loader2 } from 'lucide-react';

export default function AiFaqChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'assistant', text: string}[]>([
    { role: 'assistant', text: 'Hello! I am the RosaBlu AI Assistant. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;

    const userText = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setIsLoading(true);

    try {
      // In a real implementation, this would call a Next.js API route that connects to NVIDIA NIM
      // For example:
      // const res = await fetch('/api/chat', { method: 'POST', body: JSON.stringify({ message: userText }) });
      // const data = await res.json();
      
      // Simulating API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      let botResponse = "I'm a prototype chatbot powered by NVIDIA NIM (integration pending). Please contact reception for detailed inquiries.";
      
      if (userText.toLowerCase().includes('wifi') || userText.toLowerCase().includes('internet')) {
        botResponse = "We offer free high-speed Starlink WiFi (25+ Mbps) throughout the hotel property.";
      } else if (userText.toLowerCase().includes('food') || userText.toLowerCase().includes('restaurant')) {
        botResponse = "Our restaurant serves authentic local cuisine, including pure Kienyeji chicken and Mt. Kenya trout. It's open daily from 06:00 to 23:00.";
      }

      setMessages(prev => [...prev, { role: 'assistant', text: botResponse }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'assistant', text: "Sorry, I'm having trouble connecting right now." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <button 
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 p-4 bg-primary text-white rounded-full shadow-xl hover:bg-primary-dark transition-all duration-300 ${isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}
        aria-label="Open AI Assistant"
      >
        <MessageSquare className="w-6 h-6" />
      </button>

      {/* Chat Window */}
      <div 
        className={`fixed bottom-6 right-6 z-50 w-[350px] max-w-[calc(100vw-3rem)] bg-white rounded-2xl shadow-2xl border border-black/10 flex flex-col overflow-hidden transition-all duration-300 origin-bottom-right ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'}`}
        style={{ height: '500px', maxHeight: 'calc(100vh - 6rem)' }}
      >
        {/* Header */}
        <div className="bg-primary p-4 flex justify-between items-center text-white">
          <div>
            <h3 className="font-bold">RosaBlu Assistant</h3>
            <p className="text-xs text-white/80">Powered by NVIDIA NIM</p>
          </div>
          <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-white/20 rounded-lg transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-surface">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div 
                className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                  msg.role === 'user' 
                    ? 'bg-primary text-white rounded-br-sm' 
                    : 'bg-surface-elevated border border-black/5 text-foreground rounded-bl-sm'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-surface-elevated border border-black/5 p-3 rounded-2xl rounded-bl-sm flex gap-2 items-center">
                <Loader2 className="w-4 h-4 text-primary animate-spin" />
                <span className="text-xs text-foreground/60">Thinking...</span>
              </div>
            </div>
          )}
        </div>

        {/* Input Area */}
        <form onSubmit={handleSend} className="p-4 bg-white border-t border-black/5">
          <div className="relative">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question..."
              className="w-full bg-surface-elevated text-foreground text-sm rounded-full pl-4 pr-12 py-3 outline-none focus:ring-2 focus:ring-primary/20 border border-black/5"
            />
            <button 
              type="submit"
              disabled={!input.trim() || isLoading}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-primary text-white rounded-full disabled:opacity-50 disabled:bg-gray-400 transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
