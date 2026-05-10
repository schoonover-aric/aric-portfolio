import { streamText } from 'ai';
import { xai } from '@ai-sdk/xai';

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: xai('grok-3'), // or grok-2, etc.
    messages: [
      {
        role: 'system',
        content: `You are Aric's friendly AI assistant. You know his full experience... [paste key details from your resume here or load from a JSON/MDX file]`,
      },
      ...messages,
    ],
  });

//   return result.toDataStreamResponse();
//   OR
  return result.toTextStreamResponse();
}