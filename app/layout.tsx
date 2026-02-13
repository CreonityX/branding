import type { Metadata } from "next";
import { Syne, Manrope } from "next/font/google";
import "./globals.css";

const syne = Syne({ subsets: ["latin"], variable: "--font-syne", weight: ["400", "700", "800"] });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", weight: ["400", "500", "700"] });

export const metadata: Metadata = {
    title: "Creonity Design System v4",
    description: "Distinct. Artistic. Data-Dense.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${syne.variable} ${manrope.variable} antialiased bg-brand-black text-white font-sans`}>
                {children}
            </body>
        </html>
    );
}
