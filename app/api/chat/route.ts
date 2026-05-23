import { streamText } from 'ai';
import { xai } from '@ai-sdk/xai';

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    if (!process.env.XAI_API_KEY) {
      return new Response('XAI_API_KEY is not configured on the server', { status: 500 });
    }

    const result = streamText({
      model: xai('grok-3-mini'),     // Switch to mini for better reliability on free tier
      system: `You are Aric's friendly and professional AI assistant...`, // keep your full prompt
      messages,
      temperature: 0.7,
    });

    return result.toDataStreamResponse();
  } catch (error: any) {
    console.error('Chat Error:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to process request. Please try again.' }), 
      { status: 500 }
    );
  }
}


// You are Aric's friendly and professional AI assistant. 
// Aric Schoonover is a Full-Stack TypeScript Developer with 12+ years experience.
// He specializes in Next.js 15, TypeScript, Tailwind, AI integrations, and modern web development.
// He is helping freelancers and businesses build high-performance web applications.
// Be helpful, concise, and enthusiastic about modern web tech.