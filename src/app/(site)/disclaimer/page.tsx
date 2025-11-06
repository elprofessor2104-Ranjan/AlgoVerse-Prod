import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Disclaimer | AlgoVerse",
};

export default function Page() {
  return (
    <section>
      <div className="pb-14 md:pb-20 pt-40 flex flex-col gap-8 md:gap-14 dark:bg-baseInk">
        <div className="container relative z-10">
          <div className="flex flex-col gap-8 md:gap-14">
            <div className="flex flex-col items-center gap-2">
              <h1 className="font-semibold">Disclaimer</h1>
            </div>

            <div>
              <p className="text-navyGray dark:text-white/80 text-justify">
                The information provided on <strong>AlgoVerse</strong> is for
                general informational and educational purposes only. All content
                — including articles, guides, analysis, and other materials —
                is created to help readers understand the basics of trading,
                finance, and market trends. We do not provide financial,
                investment, or trading advice.
              </p>

              <div className="my-6">
                <h5 className="font-semibold">No Financial Advice</h5>
                <p className="mt-6 text-navyGray dark:text-white/80 text-justify">
                  The content on this website should not be interpreted as a
                  recommendation to buy, sell, or hold any financial asset or
                  security. Always do your own research and consult with a
                  qualified financial advisor before making any investment
                  decisions. AlgoVerse and its contributors are not responsible
                  for any financial losses incurred based on information
                  provided on this site.
                </p>
              </div>

              <div className="my-6">
                <h5 className="font-semibold">Accuracy of Information</h5>
                <p className="mt-6 text-navyGray dark:text-white/80 text-justify">
                  While we strive to ensure that all content is accurate and
                  up-to-date, the financial markets are dynamic and may change
                  rapidly. We make no guarantees regarding the completeness,
                  reliability, or accuracy of the information provided.
                  Information may be updated, edited, or removed at any time
                  without notice.
                </p>
              </div>

              <div className="my-6">
                <h5 className="font-semibold">External Links</h5>
                <p className="mt-6 text-navyGray dark:text-white/80 text-justify">
                  Our website may contain links to third-party websites or
                  services. These links are provided for convenience and
                  informational purposes only. AlgoVerse has no control over
                  the content or practices of those sites and assumes no
                  responsibility for them. We encourage you to review the
                  privacy and disclaimer policies of any external sites you
                  visit.
                </p>
              </div>

              <div className="my-6">
                <h5 className="font-semibold">Educational Purpose</h5>
                <p className="mt-6 text-navyGray dark:text-white/80 text-justify">
                  All information on AlgoVerse is intended purely for
                  educational use. Our articles, strategies, and examples are
                  shared to promote better understanding of trading concepts
                  and financial literacy. We do not guarantee specific outcomes
                  or profits from applying any concepts discussed here.
                </p>
              </div>

              <div className="my-6">
                <h5 className="font-semibold">Limitation of Liability</h5>
                <p className="mt-6 text-navyGray dark:text-white/80 text-justify">
                  AlgoVerse, its team members, and content creators are not
                  liable for any direct, indirect, or incidental damages arising
                  from the use of our website or reliance on the information
                  provided. Users are solely responsible for how they interpret
                  and use the content published on this platform.
                </p>
              </div>

              <div className="my-6">
                <h5 className="font-semibold">Changes to This Disclaimer</h5>
                <p className="mt-6 text-navyGray dark:text-white/80 text-justify">
                  We may update or modify this Disclaimer at any time without
                  prior notice. The updated version will be posted on this page
                  with a revised date. By continuing to use our website, you
                  agree to the latest version of this Disclaimer.
                </p>
              </div>

              <div className="my-6">
                <h5 className="font-semibold">Contact Us</h5>
                <p className="mt-6 text-navyGray dark:text-white/80 text-justify">
                  If you have any questions about this Disclaimer or our
                  website’s content, please reach out to us through our{" "}
                  <Link
                    href="/contact"
                    className="text-black dark:text-white hover:text-primary dark:hover:text-primary"
                  >
                    contact page
                  </Link>
                  .
                </p>
              </div>

              <p className="text-navyGray dark:text-white/80 text-justify mt-10">
                <strong>Note:</strong> AlgoVerse is an independent educational
                platform and is not affiliated with any brokerage firm, trading
                platform, or financial institution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
