import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { GallerySection } from "@/components/GallerySection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FAQSection } from "@/components/FAQSection";
import { BottomCTA } from "@/components/BottomCTA";
import { Footer } from "@/components/Footer";
import FloatingLines from "@/components/FloatingLines";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col w-full" style={{ background: 'white' }}>
      {/* Arrière-plan global animé */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <FloatingLines
          enabledWaves={["top", "middle", "bottom"]}
          lineCount={5}
          lineDistance={5}
          bendRadius={5}
          bendStrength={-0.5}
          interactive={true}
          parallax={true}
          linesGradient={["#00BFFF", "#8A2BE2"]}
          mixBlendMode="normal"
        />
      </div>
      <div className="relative z-10 flex flex-col w-full" style={{ background: 'rgba(255,255,255,0.82)' }}>
        <Navbar />
        <Hero />
        <Features />
        <GallerySection />
        <HowItWorksSection />
        <TestimonialsSection />
        <FAQSection />
        <BottomCTA />
        <Footer />
      </div>
    </main>
  );
}
