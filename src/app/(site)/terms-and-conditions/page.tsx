import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions | AlgoVerse",
};

export default function Page() {
  return (
    <section>
      <div className="pb-14 md:pb-20 pt-40 flex flex-col gap-8 md:gap-14 dark:bg-baseInk">
        <div className="container relative z-10">
          <div className="flex flex-col gap-8 md:gap-14">
            <div className="flex flex-col items-center gap-2">
              <h1 className="font-semibold">Terms & Conditions</h1>
            </div>

            <div>
              <p className="text-navyGray dark:text-white/80 text-justify">
                Welcome to <strong>AlgoVerse</strong>. These Terms & Conditions
                (“Terms”) govern your access to and use of our website, content,
                and services. By visiting or using this website, you agree to
                comply with these Terms. If you do not agree, please refrain
                from using the site.
              </p>

              <div className="my-6">
                <h5 className="font-semibold">Use of Content</h5>
                <p className="mt-6 text-navyGray dark:text-white/80 text-justify">
                  All content published on AlgoVerse, including articles,
                  images, tools, and graphics, is provided for educational and
                  informational purposes only. You may read, share, or cite our
                  content for personal learning or non-commercial use. However,
                  reproduction, modification, or redistribution of any material
                  without prior written permission is strictly prohibited.
                </p>
              </div>

              <div className="my-6">
                <h5 className="font-semibold">Educational Purpose</h5>
                <p className="mt-6 text-navyGray dark:text-white/80 text-justify">
                  AlgoVerse is designed as an educational platform to promote
                  understanding of trading and financial concepts. We do not
                  provide investment advice, brokerage services, or trading
                  recommendations. Any action you take based on our content is
                  solely at your own discretion and risk.
                </p>
              </div>

              <div className="my-6">
                <h5 className="font-semibold">User Responsibilities</h5>
                <p className="mt-6 text-navyGray dark:text-white/80 text-justify">
                  When using our website, you agree not to engage in activities
                  that could harm, disrupt, or compromise the security or
                  functionality of the site. You also agree not to post or share
                  unlawful, offensive, or misleading content in any interactive
                  areas of the platform (if applicable).
                </p>
              </div>

              <div className="my-6">
                <h5 className="font-semibold">Intellectual Property Rights</h5>
                <p className="mt-6 text-navyGray dark:text-white/80 text-justify">
                  All materials on this website, including text, graphics,
                  design, and logos, are the property of AlgoVerse unless
                  otherwise stated. Unauthorized use of our intellectual
                  property is prohibited. You may link to our articles with
                  proper credit and without altering the original content.
                </p>
              </div>

              <div className="my-6">
                <h5 className="font-semibold">Third-Party Links</h5>
                <p className="mt-6 text-navyGray dark:text-white/80 text-justify">
                  Our website may include links to third-party websites for
                  reference or informational purposes. AlgoVerse does not
                  control or endorse the content on these sites and is not
                  responsible for their policies or accuracy. Visiting such
                  links is at your own risk.
                </p>
              </div>

              <div className="my-6">
                <h5 className="font-semibold">Limitation of Liability</h5>
                <p className="mt-6 text-navyGray dark:text-white/80 text-justify">
                  AlgoVerse and its contributors are not liable for any losses,
                  damages, or inconveniences arising from the use or reliance on
                  our website or its content. We do not guarantee specific
                  outcomes from applying the information provided.
                </p>
              </div>

              <div className="my-6">
                <h5 className="font-semibold">Changes to These Terms</h5>
                <p className="mt-6 text-navyGray dark:text-white/80 text-justify">
                  We may update or modify these Terms from time to time to
                  reflect changes in our practices or for legal reasons. The
                  updated version will be posted on this page with a revised
                  date. Continued use of the website after changes indicates
                  your acceptance of the new Terms.
                </p>
              </div>

              <div className="my-6">
                <h5 className="font-semibold">Governing Law</h5>
                <p className="mt-6 text-navyGray dark:text-white/80 text-justify">
                  These Terms are governed by and interpreted in accordance with
                  applicable laws in your country or region. Any disputes will
                  be subject to the jurisdiction of the relevant courts.
                </p>
              </div>

              <div className="my-6">
                <h5 className="font-semibold">Contact Us</h5>
                <p className="mt-6 text-navyGray dark:text-white/80 text-justify">
                  If you have any questions about these Terms & Conditions,
                  please contact us via our{" "}
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
                <strong>Note:</strong> By using AlgoVerse, you acknowledge that
                you have read, understood, and agreed to these Terms &
                Conditions in full.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
