import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { GallerySection } from "@/components/GallerySection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { BottomCTA } from "@/components/BottomCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full bg-white">
      <Navbar />
      <Hero />
      <Features />
      <GallerySection />
      <HowItWorksSection />
      <TestimonialsSection />
      <BottomCTA />
      <Footer />
    </main>
  );
}
