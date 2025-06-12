
import React, { useState, useCallback, useRef, useEffect, useContext } from 'react';
import { generateChatResponse } from '../services/geminiService';
import { ChatMessage } from '../types';
import LoadingSpinner from './LoadingSpinner';
import Card from './Card';
import { PaperAirplaneIcon, UserCircleIcon, SparklesIcon, MicrophoneIcon } from './Icons';
import { AppContext } from '../AppContext';
import { TEXTS } from '../constants';


const AIChatbot: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const context = useContext(AppContext);
  const lang = context?.language || 'en';
  const texts = TEXTS[lang];

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSend = useCallback(async () => {
    if (input.trim() === '' || isLoading) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      text: input,
      sender: 'user',
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    setError(null);

    try {
      const aiResponseText = await generateChatResponse(input, messages.filter(m => m.sender === 'ai').map(m => m.text)); // Pass previous AI messages as history
      const aiMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: aiResponseText,
        sender: 'ai',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, aiMessage]);
    } catch (err) {
      console.error("AIChatbot Error:", err);
      setError('Failed to get response from AI. Please check your API key and network connection.');
      const errorMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: 'Sorry, I encountered an error. Please try again.',
        sender: 'ai',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  }, [input, isLoading, messages]);

// through the voice
const SpeechRecognition = window.SpeechRecognition || (window as any).webkitSpeechRecognition;
const recognitionRef = useRef<any>(null);
const [isListening, setIsListening] = useState(false);

useEffect(() => {
  if (!SpeechRecognition) {
    console.warn('Speech Recognition not supported in this browser.');
    return;
  }

  const recognition = new SpeechRecognition();
  recognition.lang = 'en-US';
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  recognition.onresult = (event: SpeechRecognitionEvent) => {
    const transcript = event.results[0][0].transcript;
    setInput(prev => `${prev} ${transcript}`);
    setIsListening(false);
  };

  recognition.onerror = () => {
    setIsListening(false);
  };

  recognition.onend = () => {
    setIsListening(false);
  };

  recognitionRef.current = recognition;
}, []);

const handleVoiceInput = () => {
  if (!recognitionRef.current) {
    alert('Voice recognition not supported in your browser.');
    return;
  }

  if (isListening) {
    recognitionRef.current.stop();
    setIsListening(false);
  } else {
    recognitionRef.current.start();
    setIsListening(true);
  }
};



  // const handleVoiceInput = () => {
  //   // Placeholder for voice input functionality
  //   // Web Speech API integration would go here.
  //   alert("Voice input feature is under development.");
  // };

  return (
    <Card title={texts.askAgriExpert} className="bg-gradient-to-br from-green-50 to-emerald-100 dark:from-gray-700 dark:to-gray-800">
      <div className="flex flex-col h-[500px]">
        <div className="flex-grow overflow-y-auto p-4 space-y-4 bg-white dark:bg-gray-700 rounded-lg shadow-inner mb-4">
          {messages.map(msg => (
            <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[70%] p-3 rounded-xl shadow ${
                msg.sender === 'user' 
                  ? 'bg-primary text-white rounded-br-none' 
                  : 'bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-100 rounded-bl-none'
              }`}>
                <div className="flex items-start space-x-2">
                  {msg.sender === 'ai' && <SparklesIcon className="w-5 h-5 text-yellow-500 flex-shrink-0" />}
                  {msg.sender === 'user' && <UserCircleIcon className="w-5 h-5 text-white flex-shrink-0" />}
                  <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
                </div>
                <p className={`text-xs mt-1 ${msg.sender === 'user' ? 'text-green-200 text-right' : 'text-gray-500 dark:text-gray-400 text-left'}`}>
                  {msg.timestamp.toLocaleTimeString()}
                </p>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-center py-2">
              <LoadingSpinner size="sm" text="Krishi Mitra AI is thinking your Query..." />
            </div>
          )}
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          <div ref={chatEndRef} />
        </div>
        <div className="flex items-center space-x-2 p-2 border-t border-gray-200 dark:border-gray-600">
          <button 
            onClick={handleVoiceInput}
            className="p-2 text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-green-400 rounded-full hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
            title="Voice Input (coming soon)"
          >
            <MicrophoneIcon className="w-6 h-6" />
          </button>
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyPress={e => e.key === 'Enter' && handleSend()}
            placeholder="Click here to more information..."
            className="flex-grow p-3 border border-gray-300 dark:border-gray-500 rounded-lg focus:ring-2 focus:ring-primary dark:focus:ring-green-400 outline-none bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            disabled={isLoading}
          />
          <button
            onClick={handleSend}
            disabled={isLoading || input.trim() === ''}
            className="bg-primary hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700 text-white p-3 rounded-lg disabled:opacity-50 transition-colors"
          >
            <PaperAirplaneIcon className="w-6 h-6" />
          </button>
        </div>
      </div>
    </Card>
  );
};

export default AIChatbot;
    