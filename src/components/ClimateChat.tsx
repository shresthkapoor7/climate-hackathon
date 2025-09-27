"use client";

import { useState } from 'react';
import { chatWithGemini } from '@/lib/gemini';

export default function ClimateChat() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [conversationHistory, setConversationHistory] = useState<string[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    setIsLoading(true);
    try {
      const aiResponse = await chatWithGemini(message, conversationHistory);
      setResponse(aiResponse);
      setConversationHistory(prev => [...prev, `User: ${message}`, `AI: ${aiResponse}`]);
      setMessage('');
    } catch (error) {
      console.error('Error:', error);
      setResponse('Sorry, I encountered an error. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Climate Assistant</h2>

      <form onSubmit={handleSubmit} className="mb-6">
        <div className="flex gap-2">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ask me about climate, sustainability, or environmental topics..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading || !message.trim()}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Thinking...' : 'Ask'}
          </button>
        </div>
      </form>

      {response && (
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold text-gray-900 mb-2">Climate Assistant:</h3>
          <p className="text-gray-700 whitespace-pre-wrap">{response}</p>
        </div>
      )}

      {conversationHistory.length > 0 && (
        <div className="mt-6">
          <h3 className="font-semibold text-gray-900 mb-2">Conversation History:</h3>
          <div className="space-y-2 max-h-60 overflow-y-auto">
            {conversationHistory.map((entry, index) => (
              <div
                key={index}
                className={`p-2 rounded ${
                  entry.startsWith('User:')
                    ? 'bg-blue-100 text-blue-900'
                    : 'bg-green-100 text-green-900'
                }`}
              >
                <strong>{entry.startsWith('User:') ? 'You' : 'Assistant'}:</strong>{' '}
                {entry.replace(/^(User:|AI:)\s*/, '')}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
