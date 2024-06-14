import type { Metadata } from "next";
import { Nunito } from "next/font/google";

import "./globals.css";
import { NextAuthSessionProvider, ReactQueryProvider } from "@/providers";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fountain",
  description: "Buy the best stationary in Fountain",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <NextAuthSessionProvider>
          <ReactQueryProvider>{children}</ReactQueryProvider>
        </NextAuthSessionProvider>
      </body>
    </html>
  );
}
