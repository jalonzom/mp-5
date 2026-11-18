import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
    title: "CS303 URL Shortener",
    description: "Shorten long URLs into short, shareable links",
};

export default function RootLayout(
    { children }: Readonly<{ children: React.ReactNode }>
) {
    return (
        <html lang="en">
            <body>
                <Header />
                <main>{children}</main>
            </body>
        </html>
    );
}
