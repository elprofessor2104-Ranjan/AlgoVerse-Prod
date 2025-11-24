import DiscoverCategory from "@/app/components/home/discover-category";
import HeroSection from "@/app/components/home/hero";
import Link from "next/link";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* 1st Ad */}
      <div id="container-5a3556850b126959b2a3d096ed85e373"></div>

      <Script
        id="ad-script-1"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.atOptions = {
              'key': 'dc125c4095e044230c3c7d13cdf9c447',
              'format': 'iframe',
              'height': 600,
              'width': 160,
              'params': {}
            };
          `,
        }}
      />

      <Script
        id="invoke-1"
        src="//www.highperformanceformat.com/dc125c4095e044230c3c7d13cdf9c447/invoke.js"
        strategy="afterInteractive"
      />

      <Link href="https://www.effectivegatecpm.com/yfewnr9fe?key=6ceaba2bdbe3cb83bca88d1aea203dc3"></Link>

      <DiscoverCategory />

      {/* 2nd Ad */}
      <Script
        id="ad-script-2"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.atOptions = {
              'key': 'e90fb6d1163befa38c229c502a937260',
              'format': 'iframe',
              'height': 90,
              'width': 728,
              'params': {}
            };
          `,
        }}
      />

      <Script
        id="invoke-2"
        src="//www.highperformanceformat.com/e90fb6d1163befa38c229c502a937260/invoke.js"
        strategy="afterInteractive"
      />
    </>
  );
}
