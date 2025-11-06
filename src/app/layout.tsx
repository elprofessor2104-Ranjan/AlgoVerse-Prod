import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/layout/header";
import Footer from "@/app/components/layout/footer";
import { Providers } from "@/providers/sessionProviders";
import ScrollToTop from "./components/ScrollToTop";

// Font configuration
const manrope = Manrope({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// ✅ Add metadata for title and more
export const metadata = {
  title: "AlgoVerse – Empowering Algorithmic Trading & Insights",
  description:
    "AlgoVerse brings you algorithmic trading tools, insights, and content for smart investors and developers.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={manrope.className}>
        <Providers>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}
