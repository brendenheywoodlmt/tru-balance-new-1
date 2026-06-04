import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "@/app/globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LocalBusinessSchema from '@/components/LocalBusinessSchema';

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "400", // Regular weight
  variable: "--font-montserrat",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://trubalance.life";

export const metadata: Metadata = {
  title: {
    default: "Tru Balance | Massage Therapy & Reiki in Utah",
    template: "%s | Tru Balance",
  },
  description: "Experience transformative healing through compassionate, trauma-informed massage therapy and reiki in Utah. Find balance for your body and spirit.",
  keywords: "Sports Massage Orem, Massage for Runners Orem, Running Recovery Massage, Marathon Recovery Massage, Trigger Point Therapy Orem, Myofascial Release Orem, Reiki Orem Utah, Therapeutic Massage Orem, Customized Massage Orem, Recovery Massage Orem",
  metadataBase: new URL(siteUrl),
  robots: {
    index: true,
    follow: true,
    googleBot: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Tru Balance | Massage Therapy & Reiki in Utah",
    description: "Experience transformative healing through compassionate, trauma-informed massage therapy and reiki in Utah.",
    siteName: "Tru Balance",
    images: [
      {
        url: `${siteUrl}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Tru Balance - Massage & Reiki",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tru Balance | Massage Therapy & Reiki in Utah",
    description: "Experience transformative healing through compassionate, trauma-informed massage therapy and reiki.",
    images: [`${siteUrl}/images/og-image.jpg`],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className={`${montserrat.variable} font-sans`}>
        <LocalBusinessSchema />
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}