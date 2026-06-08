import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Featured } from "@/components/site/Featured";
import { MissionVision } from "@/components/site/MissionVision";
import { About } from "@/components/site/About";
import { Features } from "@/components/site/Features";
import { Simulator } from "@/components/site/Simulator";
import { Staging } from "@/components/site/Staging";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { Chatbot } from "@/components/site/Chatbot";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nice Moraes Imobiliária · Seu novo lar começa aqui" },
      { name: "description", content: "Consultoria imobiliária ética e de dupla mão: tour 360°, simulador de financiamento, decoração com IA e segurança jurídica em cada negócio." },
      { property: "og:title", content: "Nice Moraes Imobiliária" },
      { property: "og:description", content: "Negócios imobiliários com tecnologia e cuidado. Seu novo lar começa aqui." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Inter:wght@300;400;500;600&display=swap" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="bg-background">
      <Navbar />
      <main>
        <Hero />
        <Featured />
        <About />
        <MissionVision />
        <Features />
        <Simulator />
        <Staging />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}
