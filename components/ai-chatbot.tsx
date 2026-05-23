'use client';

import { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{role: string; content: string}>>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [...messages, { role: 'user', content: userMessage }] }),
      });

      if (!response.ok) throw new Error('Failed');

      const data = await response.json();
      setMessages(prev => [...prev, { role: 'assistant', content: data.response || 'Sorry, I had trouble responding.' }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'assistant', content: 'Sorry, something went wrong. Check your API key.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Button onClick={() => setIsOpen(!isOpen)} className="fixed bottom-6 right-6 z-50 rounded-full w-14 h-14" size="icon">
        <MessageCircle className="w-6 h-6" />
      </Button>

      {isOpen && (
        <Card className="fixed bottom-24 right-6 w-96 h-[500px] flex flex-col shadow-xl">
          <div className="p-4 border-b flex justify-between bg-muted">
            <div>
              <h3 className="font-semibold">Ask Aric AI</h3>
              <p className="text-xs text-muted-foreground">Powered by Grok</p>
            </div>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
              <X className="w-4 h-4" />
            </Button>
          </div>

          <ScrollArea className="flex-1 p-4">
            {messages.length === 0 && <p className="text-center text-muted-foreground py-8">Ask me anything about Aric!</p>}
            {messages.map((m, i) => (
              <div key={i} className={`mb-4 ${m.role === 'user' ? 'text-right' : ''}`}>
                <div className={`inline-block p-3 rounded-2xl ${m.role === 'user' ? 'bg-primary text-white' : 'bg-muted'}`}>
                  {m.content}
                </div>
              </div>
            ))}
            {isLoading && <p className="pl-3">Thinking...</p>}
          </ScrollArea>

          <form onSubmit={onSubmit} className="p-4 border-t flex gap-2">
            <Input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask a question..." disabled={isLoading} />
            <Button type="submit" disabled={isLoading || !input.trim()}>Send</Button>
          </form>
        </Card>
      )}
    </>
  );
}