import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { EmailCapture } from "@/components/EmailCapture";
import { GallerySection } from "@/components/GallerySection";
import { AboutSection } from "@/components/AboutSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FAQSection } from "@/components/FAQSection";
import { BottomCTA } from "@/components/BottomCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full bg-white">
      <Navbar />
      <Hero />
      <Features />
      <EmailCapture />
      <GallerySection />
      <AboutSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <FAQSection />
      <BottomCTA />
      <Footer />
    </main>
  );
}
