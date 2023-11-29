import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import Recoilroot from "@/components/RecoilRoot";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "InstagramClone",
  description: "A Next.js Instagram Clone app",
  applicationName: "InstagramClone",
  referrer: "origin-when-cross-origin",
  keywords: ["Next.js", "React", "JavaScript", "InstagramClone"],
  creator: "Taraneh Mohebi asar",
  publisher: "Taraneh Mohebi asar",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Recoilroot>{children}</Recoilroot>
        </Providers>
      </body>
    </html>
  );
}
