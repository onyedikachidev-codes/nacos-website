import QueryProvider from "@/components/providers/QueryProvider";
import "./globals.css";
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";

const dm_sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm_sans",
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "NACOS",
    template: "%s | NACOS",
  },
  description: "Welcome to NACOS.",
  openGraph: {
    title: "NACOS",
    description: "Welcome to NACOS.",
    url: "https://nacos.example.com",
    siteName: "NACOS",
    images: [
      {
        url: "https://nacos.example.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "NACOS Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dm_sans.className} antialiased overflow-y-auto`}>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
