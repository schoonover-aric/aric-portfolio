import type { Metadata } from "next";
import "./globals.css";
import AIChatbot from "@/components/ai-chatbot";

export const metadata: Metadata = {
  title: "Aric Schoonover | Full-Stack TypeScript Developer",
  description: "Next.js 15 • TypeScript • AI-Powered Portfolio",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="min-h-screen bg-background font-sans antialiased">
        {children}
        <AIChatbot />
      </body>
    </html>
  );
}