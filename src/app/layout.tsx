/* eslint-disable @next/next/no-sync-scripts */
import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/layout/header";
import Footer from "@/app/components/layout/footer";
import { Providers } from "@/providers/sessionProviders";
import ScrollToTop from "./components/ScrollToTop";
import Script from "next/script";

const manrope = Manrope({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

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
      <head>
        <meta
          name="google-adsense-account"
          content="ca-pub-1961650790168883"
        ></meta>
        {/* ✅ Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-CDP9TRJP5E"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CDP9TRJP5E');
          `}
        </Script>

        {/* ✅ Google AdSense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1961650790168883"
          crossOrigin="anonymous"
        ></script>

        <script
          type="text/javascript"
          src="//pl28124674.effectivegatecpm.com/b6/79/b3/b679b36665dd17795cf35a7217fd0c27.js"
        ></script>
        <script type='text/javascript' src='//flourishexcellent.com/b6/79/b3/b679b36665dd17795cf35a7217fd0c27.js'></script>
      </head>

      <body className={manrope.className}>
         <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              window.atOptions = {
                'key': '7cfc9f717089fffb351d015f6c3746da',
                'format': 'iframe',
                'height': 250,
                'width': 300,
                'params': {}
              };
            `,
          }}
        />
        <script
          type="text/javascript"
          src="//www.highperformanceformat.com/7cfc9f717089fffb351d015f6c3746da/invoke.js"
        />

        
        <script
          async
          data-cfasync="false"
          src="//pl28124693.effectivegatecpm.com/5a3556850b126959b2a3d096ed85e373/invoke.js"
        ></script>
        <script
          async
          data-cfasync="false"
          src="//pl28124693.effectivegatecpm.com/5a3556850b126959b2a3d096ed85e373/invoke.js"
        ></script>
        <Providers>
          <Header />
          {children}
          <script
            type="text/javascript"
            src="//pl28124988.effectivegatecpm.com/c0/0e/f1/c00ef14df342a48656e7296180463ed2.js"
          ></script>
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}
