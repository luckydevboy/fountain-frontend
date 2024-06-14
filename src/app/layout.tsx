import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import resolveConfig from "tailwindcss/resolveConfig";
import NextTopLoader from "nextjs-toploader";

import "./globals.css";
import tailwindConfig from "../../tailwind.config";
import { NextAuthSessionProvider, ReactQueryProvider } from "@/providers";

const nunito = Nunito({ subsets: ["latin"] });

const fullConfig = resolveConfig(tailwindConfig);

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
        <NextTopLoader
          shadow={false}
          color={fullConfig.theme.colors.indigo["600"]}
          showSpinner={false}
        />
        <NextAuthSessionProvider>
          <ReactQueryProvider>{children}</ReactQueryProvider>
        </NextAuthSessionProvider>
      </body>
    </html>
  );
}
