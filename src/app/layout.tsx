import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SwitchAppart | Échange ton appart, trouve le bon",
  description: "La première plateforme qui te connecte directement avec d'autres locataires pour échanger vos logements. Publie. Match. Échange.",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "SwitchAppart | Échange ton appart, trouve le bon",
    description: "La première plateforme qui te connecte directement avec d'autres locataires pour échanger vos logements.",
    images: ["/logo.png"],
    siteName: "SwitchAppart",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SwitchAppart | Échange ton appart, trouve le bon",
    description: "La première plateforme qui te connecte directement avec d'autres locataires pour échanger vos logements.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${spaceGrotesk.variable} antialiased h-full`}>
      <body suppressHydrationWarning className="min-h-full flex flex-col bg-background text-foreground font-sans overflow-x-hidden selection:bg-primary-orange/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
