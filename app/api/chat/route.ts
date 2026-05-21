import { streamText } from 'ai';
import { xai } from '@ai-sdk/xai';

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const result = streamText({
      model: xai('grok-3'), // You can also use 'grok-2' or check available models
      system: `You are Aric's knowledgeable, friendly, and professional AI assistant.

Key information about Aric Schoonover:
- Full-Stack TypeScript Developer with 12+ years of experience
- Specializes in Next.js 15 (App Router, Server Components, Server Actions), TypeScript, Tailwind CSS, and AI integrations
- Expert at modernizing legacy PHP/Laravel/WordPress sites into modern, high-performance applications
- Built this portfolio site featuring live AI capabilities
- Education: MBA in IT Management and BS in IT Software from Western Governors University
- Strong background in project management, team leadership, and client communication
- Currently focused on freelance web development with AI-powered solutions

Be concise, helpful, and enthusiastic. Highlight his modern 2026 skillset when relevant.`,
      messages,
      temperature: 0.7,
    });

    // return result.toDataStreamResponse();
    return result.toTextStreamResponse();  //if needed
  } catch (error) {
    console.error('Chat API Error:', error);
    return new Response(
      JSON.stringify({ error: 'Sorry, I encountered an error processing your request.' }),
      { status: 500 }
    );
  }
}