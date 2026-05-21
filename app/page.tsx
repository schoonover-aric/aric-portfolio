import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Mail, ExternalLink } from 'lucide-react';
import AIChatbot from '@/components/ai-chatbot';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 border-b bg-background/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="font-semibold text-xl">Aric Schoonover</div>
          <div className="flex gap-8 text-sm">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
            <a href="#experience" className="hover:text-primary transition-colors">Experience</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-background to-muted/50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 inline-flex items-center gap-2 bg-muted px-4 py-1.5 rounded-full text-sm">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            Available for Freelance • Next.js Specialist
          </div>

          <h1 className="text-6xl md:text-7xl font-bold tracking-tight mb-6">
            Full-Stack TypeScript<br />
            Developer
          </h1>

          <p className="text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            I build fast, modern, AI-powered web applications with Next.js 15, TypeScript, and edge deployment.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              <a href="#projects">View My Projects</a>
            </Button>
            <Button size="lg" variant="outline">
              <a href="#contact">Let&apos;s Work Together</a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mt-12 text-muted-foreground">
            <a 
                href="https://github.com/yourusername" 
                target="_blank" 
                className="hover:text-foreground transition-colors flex items-center gap-2"
            >
                <span className="font-medium">GitHub</span>
                <ExternalLink className="w-5 h-5" />
            </a>
            <a 
                href="https://linkedin.com/in/aric-schoonover" 
                target="_blank" 
                className="hover:text-foreground transition-colors flex items-center gap-2"
            >
                <span className="font-medium">LinkedIn</span>
                <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">About Me</h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-xl leading-relaxed">
              I&apos;m a Full-Stack TypeScript Developer with over 12 years of experience building web applications. 
              I specialize in modernizing legacy systems and creating high-performance Next.js applications with 
              integrated AI capabilities.
            </p>
            <p className="text-xl leading-relaxed mt-6">
              From PHP/Laravel/WordPress projects to cutting-edge TypeScript + Next.js 15 solutions, 
              I focus on clean code, exceptional user experience, and measurable business results.
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-20 px-6 bg-muted/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-10 text-center">Current Tech Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              'Next.js 15', 'TypeScript', 'Tailwind CSS', 'React Server Components', 
              'Vercel AI SDK', 'Grok / xAI', 'Prisma', 'TanStack Query', 
              'Edge Deployment', 'Docker', 'shadcn/ui', 'PostgreSQL'
            ].map((skill) => (
              <Badge key={skill} variant="secondary" className="text-base py-3 justify-center text-center">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">Featured Projects</h2>
          <p className="text-center text-muted-foreground mb-12">Live demos with real AI integration</p>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="group hover:shadow-xl transition-all">
              <CardHeader>
                <CardTitle>This Portfolio Site</CardTitle>
                <CardDescription>Next.js 15 + Live Grok AI Assistant</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Built with App Router, Server Components, TypeScript, and real-time AI chat powered by xAI Grok.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge>Next.js</Badge>
                  <Badge>AI</Badge>
                  <Badge>TypeScript</Badge>
                  <Badge>Tailwind</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all">
              <CardHeader>
                <CardTitle>Next.js Dashboard</CardTitle>
                <CardDescription>Recent Practice Project</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Modern admin dashboard built during my Next.js refresher.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge>Next.js</Badge>
                  <Badge>Dashboard</Badge>
                  <Badge>TypeScript</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Teaser */}
      <section id="experience" className="py-20 px-6 bg-muted/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">12+ Years Delivering Results</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Self-employed Full-Stack Developer since 2012. Previously: R&amp;D Engineer, Construction Company Owner, 
            and Semiconductor Equipment Technician.
          </p>
          <Button variant="outline" className="mt-8">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              Download Full Resume
            </a>
          </Button>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Let&apos;s Build Something Great</h2>
          <p className="text-muted-foreground mb-8">
            Open to freelance opportunities — especially Next.js, TypeScript, and AI-powered projects.
          </p>
          
          <div className="space-y-4">
            <Button size="lg" className="w-full">
              <a href="mailto:schoonover.aric@gmail.com">
                <Mail className="mr-2 w-5 h-5" /> Email Me
              </a>
            </Button>
            
            <Button size="lg" variant="outline" className="w-full">
              <a href="https://linkedin.com/in/aric-schoonover" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 w-5 h-5" /> Connect on LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </section>

      <footer className="border-t py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Aric Schoonover • Built with Next.js 15 + Grok AI
      </footer>
    </main>
  );
}