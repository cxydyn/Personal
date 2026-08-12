import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Personal Coach",
  description: "Personal coaching, nutrition and finance dashboard",
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#0b0f14",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}