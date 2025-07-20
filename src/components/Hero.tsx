import { GoogleGenAI } from '@google/genai';
import { useState, FormEvent } from 'react';

// Initialize the GoogleGenAI client with the API key from environment variables.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const Hero = () => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setLoading(true);
    setError(null);
    setResponse('');

    try {
      const result = await ai.models.generateContentStream({
        model: 'gemini-2.5-flash',
        contents: `You are a witty branding expert. Given a project idea, generate a short, catchy tagline for it. Be creative and concise. Idea: "${prompt}"`,
      });

      for await (const chunk of result) {
        setResponse((prev) => prev + chunk.text);
      }
    } catch (err) {
      console.error("Error generating content:", err);
      setError(err instanceof Error ? err.message : "An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 sm:py-32 text-center">
      <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-[size:200%_auto] animate-background-pan">
        Bring Your Ideas to Life.
      </h1>
      <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-400">
        We build stunning websites and high-performance mobile apps for iOS & Android.
        Have an idea? Let our AI generate a tagline for you.
      </p>

      <form onSubmit={handleSubmit} className="mt-10 max-w-xl mx-auto flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="e.g., An app for dog walkers"
          className="flex-grow px-4 py-3 bg-slate-800 text-white rounded-md border border-slate-700 focus:ring-2 focus:ring-cyan-500 focus:outline-none transition-shadow duration-200"
          aria-label="Your project idea"
        />
        <button
          type="submit"
          disabled={loading}
          className="px-6 py-3 font-semibold text-white bg-cyan-600 rounded-md hover:bg-cyan-500 disabled:bg-slate-600 disabled:cursor-not-allowed transition-colors duration-200"
        >
          {loading ? 'Generating...' : 'Generate Tagline'}
        </button>
      </form>

      {(loading || error || response) && (
        <div className="mt-8 max-w-xl mx-auto p-6 bg-slate-800/50 rounded-lg ring-1 ring-slate-700">
          {loading && (
             <div className="flex items-center justify-center space-x-2">
              <div className="w-5 h-5 border-2 border-dashed rounded-full animate-spin border-cyan-400"></div>
              <p className="text-slate-400">Our AI is thinking...</p>
            </div>
          )}
          {error && <p className="text-red-400">Error: {error}</p>}
          {response && !error && (
            <p className="text-xl text-cyan-300 animate-fade-in">{response}</p>
          )}
        </div>
      )}
    </section>
  );
};

export default Hero;
