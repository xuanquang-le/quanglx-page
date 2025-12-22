
import React, { useState } from 'react';
import { GoogleGenAI } from '@google/genai';
import { PUBLICATIONS } from '../data';

const AIAssistant: React.FC = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!query.trim()) return;
    
    setLoading(true);
    setResponse('');
    
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const pubSummary = PUBLICATIONS.map(p => `- ${p.title} (${p.venue}, ${p.year})`).join('\n');
      
      const prompt = `
      You are an academic assistant for Dr. Nguyen, a PhD in Computer Science specializing in Low-Light Computer Vision and Robust Perception.
      Based on his publications:
      ${pubSummary}
      
      Answer this visitor's question about his research: "${query}"
      Keep it professional, academic, and concise.
      `;

      const result = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
      });

      setResponse(result.text || "I couldn't generate a summary at this moment.");
    } catch (error) {
      console.error(error);
      setResponse("An error occurred while connecting to the research intelligence system.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
      <h3 className="serif text-2xl mb-4 text-slate-900">AI Research Assistant</h3>
      <p className="text-slate-600 mb-6 text-sm leading-relaxed">
        Curious about Dr. Nguyen's specific contributions? Ask our AI assistant about his papers, methodology, or vision.
      </p>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="e.g., What is his approach to low-light vision?"
          className="flex-1 px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm"
        />
        <button
          onClick={handleAsk}
          disabled={loading}
          className="bg-blue-700 text-white px-6 py-2 rounded-lg text-sm font-semibold hover:bg-blue-800 transition-colors disabled:opacity-50"
        >
          {loading ? 'Thinking...' : 'Analyze'}
        </button>
      </div>
      {response && (
        <div className="mt-4 p-4 bg-slate-50 rounded-lg border border-slate-100 text-sm leading-relaxed text-slate-700 animate-in fade-in slide-in-from-top-1 duration-300">
          <div className="font-semibold text-blue-700 mb-1">AI Insights:</div>
          {response}
        </div>
      )}
    </div>
  );
};

export default AIAssistant;
