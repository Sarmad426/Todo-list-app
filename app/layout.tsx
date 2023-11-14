import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import ToastProvider from "@/components/ui/Toaster";

const font = Montserrat({ subsets: ["vietnamese"] });

export const metadata: Metadata = {
  title: "Todo App",
  description: "Manage Tasks with Todo App.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="png" href="logo.png" />
      </head>
      <body className={font.className}>
        <ToastProvider />
        {children}
      </body>
    </html>
  );
}
