import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Hunter A's Portfolio",
  description: "Created with the help of Frontend Tribe",
  // Add Open Graph metadata
  openGraph: {
    title: "Hunter A's Portfolio",
    description: "A showcase of my projects and skills.",
    url: "https://hbeeny-personal-portfolio-2.vercel.app/", // Replace with your actual URL
    siteName: "Hunter A's Portfolio",
    images: [
      {
        url: "https://hbeeny-personal-portfolio-2.vercel.app/image/homepage.png", // Replace with the path to your image
        width: 1200,
        height: 630,
        alt: "Hunter A's Portfolio Preview Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  // Add Twitter Card metadata
  twitter: {
    card: "summary_large_image",
    title: "Hunter A's Portfolio",
    description: "A showcase of my projects and skills.",
    images: [
      "https://hbeeny-personal-portfolio-2.vercel.app/image/homepage.png",
    ], // Replace with the path to your image
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          inter.variable,
          calistoga.variable,
          "bg-gray-900 text-white antialiased font-sans"
        )}
      >
        {children}
      </body>
    </html>
  );
}
