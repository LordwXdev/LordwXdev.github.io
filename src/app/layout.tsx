import "./globals.css";
import React from "react";

export const metadata = {
  title: "Lord Portfolio",
  description: "Modern Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}