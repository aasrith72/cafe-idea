import React, { useState, useRef, useEffect } from 'react';
import { HfInference } from "@huggingface/inference";

// Local fallback: answers common cafe questions without needing an API
function getLocalFallback(userMsg) {
  const msg = userMsg.toLowerCase();
  if (/(hour|open|close|time|when)/.test(msg))
    return 'We are open Mon–Fri 7:30 AM – 10 PM and Sat–Sun 8 AM – 11 PM. Hope to see you soon! ☕';
  if (/(address|location|where|find|directions?)/.test(msg))
    return 'You can find us at 12, Cafe Lane, Jubilee Hills, Hyderabad — 500033. We are easy to spot!';
  if (/(menu|food|eat|drink|coffee|latte|espresso|toast|tiramisu|brew|avocado|brioche|dalgona|cold brew|specialt)/.test(msg))
    return 'Our specialties include Cold Brew Float, Brioche French Toast, Signature Espresso, Classic Tiramisu, Dalgona Latte, and Smashed Avocado Toast. Any of those tempt you? 😊';
  if (/(founded|history|old|started|since|year)/.test(msg))
    return 'Noir & Roast was founded in 2018 with a passion for great coffee and cozy vibes!';
  if (/(price|cost|cheap|expensive|afford)/.test(msg))
    return 'Our menu is priced to offer great value! Swing by or give us a call for the full price list.';
  if (/(wifi|work|laptop|study)/.test(msg))
    return 'Yes, we have free Wi-Fi — perfect for working or studying over a great cup of coffee!';
  if (/(park|parking)/.test(msg))
    return 'There is ample street parking near us in Jubilee Hills. Welcome!';
  if (/(reservation|book|reserve|table)/.test(msg))
    return 'We welcome walk-ins! For large groups, feel free to call ahead and we will do our best to accommodate you.';
  if (/(hi|hello|hey|howdy|greet)/.test(msg))
    return 'Hello! 👋 Welcome to Noir & Roast. Ask me anything about our menu, hours, or location!';
  if (/(thank|thanks|great|perfect|awesome)/.test(msg))
    return 'You\'re very welcome! Looking forward to brewing something special for you. ☕';
  return null; // no local match — let the API handle it
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', content: 'Hi there! I am the Noir & Roast Virtual Assistant. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  
  const SYSTEM_PROMPT = `You are a helpful and polite virtual assistant for 'Noir & Roast' Cafe in Hyderabad, India. 
You answer questions about the cafe, its menu, hours, and location.
- Founded: 2018
- Address: 12, Cafe Lane, Jubilee Hills, Hyderabad — 500033
- Hours: Mon–Fri: 7:30 AM – 10 PM. Sat–Sun: 8 AM – 11 PM.
- Specialties: Cold Brew Float, Brioche French Toast, Signature Espresso, Classic Tiramisu, Dalgona Latte, Smashed Avocado Toast.
- Be friendly, brief, and welcoming. Do not answer questions completely unrelated to a cafe context unless pivoting back. Keep responses to a couple of sentences maximum.`;

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const apiKey = import.meta.env.VITE_HF_API_KEY;
      
      if (!apiKey || apiKey === "YOUR_HUGGINGFACE_API_KEY_HERE") {
        setTimeout(() => {
          setMessages(prev => [...prev, { 
            role: 'bot', 
            content: 'Please enter your Hugging Face API key inside the local `.env` file first!' 
          }]);
          setIsLoading(false);
        }, 1000);
        return;
      }

      const hf = new HfInference(apiKey);
      
      const mappedMessages = [
        { role: "system", content: SYSTEM_PROMPT }
      ];
      
      messages.forEach(msg => {
        mappedMessages.push({
          role: msg.role === 'user' ? 'user' : 'assistant',
          content: msg.content
        });
      });
      mappedMessages.push({ role: "user", content: userMessage });

      // Check local fallback first — avoids an API call for simple cafe questions
      const localAnswer = getLocalFallback(userMessage);
      if (localAnswer) {
        setMessages(prev => [...prev, { role: 'bot', content: localAnswer }]);
        setIsLoading(false);
        return;
      }

      const response = await hf.chatCompletion({
        model: "Qwen/Qwen2.5-72B-Instruct",
        messages: mappedMessages,
        max_tokens: 200,
      });

      const responseText = response.choices[0].message.content;
      setMessages(prev => [...prev, { role: 'bot', content: responseText }]);
    } catch (error) {
      console.error("Hugging Face API Error:", error);
      // Last-resort: try the local fallback before showing an error
      const localAnswer = getLocalFallback(userMessage);
      if (localAnswer) {
        setMessages(prev => [...prev, { role: 'bot', content: localAnswer }]);
      } else {
        setMessages(prev => [...prev, { 
          role: 'bot', 
          content: 'I\'m having a little trouble with my AI right now, but I can still help! Ask me about our menu, hours, or location. 😊' 
        }]);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[100] flex flex-col items-end">
      {isOpen && (
        <div className="bg-white border border-[#4A2C1A]/20 shadow-2xl w-[90vw] sm:w-[320px] md:w-[350px] rounded-lg overflow-hidden mb-4 flex flex-col h-[70vh] sm:h-[450px]">
          {/* Header */}
          <div className="bg-[#2C1810] text-[#C9944A] p-4 flex justify-between items-center shadow-md z-10">
            <h3 className="font-['Cormorant_Garamond',serif] font-semibold text-lg tracking-wide">Noir & Roast Assistant</h3>
            <button onClick={() => setIsOpen(false)} className="text-[#C9944A] hover:text-white transition-colors">
              ✕
            </button>
          </div>
          
          {/* Messages */}
          <div className="flex-1 p-4 pt-6 overflow-y-auto bg-[#FDF6EC] flex flex-col gap-3 font-['DM_Sans',sans-serif]">
            {messages.map((msg, index) => (
              <div key={index} className={`max-w-[85%] p-3 rounded-lg text-[0.88rem] leading-[1.5] shadow-sm ${msg.role === 'user' ? 'bg-[#C9944A] text-white self-end rounded-br-none' : 'bg-white border border-[#4A2C1A]/10 text-[#2C1810] self-start rounded-bl-none'}`}>
                {msg.content}
              </div>
            ))}
            {isLoading && (
              <div className="bg-white border border-[#4A2C1A]/10 text-[#2C1810] self-start p-3 rounded-lg rounded-bl-none shadow-sm text-[0.88rem] flex gap-1">
                <span className="animate-bounce inline-block w-1 h-1 bg-[#2C1810] rounded-full mr-1 mt-2"></span>
                <span className="animate-bounce inline-block w-1 h-1 bg-[#2C1810] rounded-full mr-1 mt-2" style={{ animationDelay: '100ms' }}></span>
                <span className="animate-bounce inline-block w-1 h-1 bg-[#2C1810] rounded-full mt-2" style={{ animationDelay: '200ms' }}></span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          
          {/* Input Area */}
          <form onSubmit={handleSend} className="p-3 bg-white border-t border-[#4A2C1A]/10 flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me about the cafe..." 
              className="flex-1 px-3 py-2 border border-[#4A2C1A]/20 outline-none focus:border-[#C9944A] rounded-md font-['DM_Sans',sans-serif] text-[0.88rem]"
              disabled={isLoading}
            />
            <button 
              type="submit" 
              className="bg-[#2C1810] text-[#C9944A] px-4 py-2 font-medium tracking-wide rounded-md hover:bg-[#4A2C1A] transition-colors disabled:opacity-50 font-['DM_Sans',sans-serif] text-[0.85rem]"
              disabled={isLoading || !input.trim()}
            >
              Send
            </button>
          </form>
        </div>
      )}
      
      {/* Floating Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] rounded-full bg-[#C9944A] text-white shadow-xl flex items-center justify-center hover:-translate-y-1 transition-all duration-300 hover:shadow-2xl border-2 border-white ${isOpen ? 'rotate-90 bg-[#2C1810]' : ''}`}
        aria-label="Toggle Chat"
      >
        {isOpen ? (
          <span className="text-2xl font-bold font-['DM_Sans',sans-serif] leading-none mb-1">✕</span>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
      </button>
    </div>
  );
}
