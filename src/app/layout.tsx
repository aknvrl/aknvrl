import type { Metadata, Viewport } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LanguageProvider } from "@/i18n/LanguageProvider";
import BootstrapClient from "@/hooks/BootstrapClient";
import SmoothScroll from "@/hooks/SmoothScroll";
import "./globals.scss";

export const metadata: Metadata = {
    metadataBase: new URL("https://aknvrl.com.tr"),
    title: "Akın Vural | Yazılım & Yapay Zeka Mühendisi",
    description:
        "Akın Vural'ın yazılım, yapay zeka, RAG, otomasyon, özel web sistemleri, SEO ve GEO projelerini içeren kişisel portföyü.",
    authors: [{ name: "Akın Vural", url: "https://www.linkedin.com/in/aknvrl/" }],
    keywords: [
        "Akın Vural",
        "yazılım mühendisi",
        "yapay zeka mühendisi",
        "RAG",
        "LLM",
        "özel yazılım",
        "GEO",
        "SEO",
    ],
    openGraph: {
        title: "Akın Vural | Yazılım & Yapay Zeka Mühendisi",
        description: "Yazılım, yapay zeka ve dijital büyüme sistemleri üzerine seçili çalışmalar.",
        type: "website",
        locale: "tr_TR",
        images: [{ url: "/assets/images/avatar/aknvrl.png", alt: "Akın Vural" }],
    },
    icons: {
        icon: "/assets/images/logo/av-favicon.svg",
        apple: "/assets/images/logo/av-favicon.svg",
    },
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="tr" suppressHydrationWarning>
            <body>
                <BootstrapClient />
                <SmoothScroll>
                    <LanguageProvider>
                        <ThemeProvider>{children}</ThemeProvider>
                    </LanguageProvider>
                </SmoothScroll>
            </body>
        </html>
    );
}
