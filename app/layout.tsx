import type { Metadata } from "next";
import "./globals.css";
import './cursor.css'

export const metadata: Metadata = {
  title: "Joswin John",
  description: "Joswin's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
