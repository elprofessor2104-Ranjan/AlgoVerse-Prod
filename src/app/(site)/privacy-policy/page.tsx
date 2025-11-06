import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | AlgoVerse",
};

export default function Page() {
  return (
    <section>
      <div className="pb-14 md:pb-20 pt-40 flex flex-col gap-8 md:gap-14 dark:bg-baseInk">
        <div className="container relative z-10">
          <div className="flex flex-col gap-8 md:gap-14">
            <div className="flex flex-col items-center gap-2">
              <h1 className="font-semibold">Privacy Policy</h1>
            </div>

            <div>
              <p className="text-navyGray dark:text-white/80 text-justify">
                At <strong>AlgoVerse</strong>, accessible from our official website,
                one of our main priorities is the privacy of our visitors. This
                Privacy Policy document describes the types of information that
                are collected and recorded by AlgoVerse and how we use it.
              </p>

              <div className="my-6">
                <h5 className="font-semibold">Information We Collect</h5>
                <p className="mt-6 text-navyGray dark:text-white/80 text-justify">
                  We may collect limited personal information, such as your name
                  and email address, only when you voluntarily provide it through
                  contact forms or newsletter subscriptions. We do not collect
                  sensitive data or financial details from our users.
                </p>
              </div>

              <div className="my-6">
                <h5 className="font-semibold">How We Use Your Information</h5>
                <p className="mt-6 text-navyGray dark:text-white/80 text-justify">
                  The information we collect is used to improve our website,
                  provide personalized user experiences, respond to your
                  inquiries, and send occasional updates or educational content
                  (only if you have opted in). We do not sell, trade, or rent
                  users’ personal information to others.
                </p>
              </div>

              <div className="my-6">
                <h5 className="font-semibold">Cookies and Log Files</h5>
                <p className="mt-6 text-navyGray dark:text-white/80 text-justify">
                  Like most websites, AlgoVerse uses cookies to store information
                  about visitors’ preferences and the pages they access. This
                  information helps us optimize the user experience and tailor
                  content to visitor interests. You can disable cookies through
                  your browser settings if you prefer not to share this data.
                </p>
              </div>

              <div className="my-6">
                <h5 className="font-semibold">Third-Party Services</h5>
                <p className="mt-6 text-navyGray dark:text-white/80 text-justify">
                  We may use third-party tools such as Google Analytics to
                  understand user behavior and traffic patterns. These services
                  may use cookies and other tracking technologies as per their
                  respective privacy policies. AlgoVerse has no access to or
                  control over these cookies once used by third-party advertisers
                  or analytics providers.
                </p>
              </div>

              <div className="my-6">
                <h5 className="font-semibold">Google AdSense</h5>
                <p className="mt-6 text-navyGray dark:text-white/80 text-justify">
                  Some of our advertising partners may use cookies and web
                  beacons. Google, as a third-party vendor, uses cookies to serve
                  ads on our site. Google’s use of the DART cookie enables it to
                  serve ads to visitors based on their visits to AlgoVerse and
                  other sites on the internet. Visitors may choose to decline the
                  use of DART cookies by visiting Google’s{" "}
                  <a
                    href="https://policies.google.com/technologies/ads"
                    className="text-black dark:text-white hover:text-primary dark:hover:text-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ads Privacy & Terms
                  </a>{" "}
                  page.
                </p>
              </div>

              <div className="my-6">
                <h5 className="font-semibold">Third-Party Privacy Policies</h5>
                <p className="mt-6 text-navyGray dark:text-white/80 text-justify">
                  AlgoVerse’s Privacy Policy does not apply to other advertisers
                  or websites. We recommend you consult the respective privacy
                  policies of third-party ad servers for more detailed
                  information, including their practices and instructions on how
                  to opt out of certain options.
                </p>
              </div>

              <div className="my-6">
                <h5 className="font-semibold">Data Security</h5>
                <p className="mt-6 text-navyGray dark:text-white/80 text-justify">
                  We implement appropriate data collection, storage, and security
                  measures to protect your information against unauthorized
                  access, alteration, or disclosure. However, please note that no
                  transmission over the internet is completely secure.
                </p>
              </div>

              <div className="my-6">
                <h5 className="font-semibold">Children’s Information</h5>
                <p className="mt-6 text-navyGray dark:text-white/80 text-justify">
                  AlgoVerse does not knowingly collect any personal identifiable
                  information from children under the age of 13. If you believe
                  your child provided such information on our website, please
                  contact us immediately and we will promptly remove it from our
                  records.
                </p>
              </div>

              <div className="my-6">
                <h5 className="font-semibold">Changes to This Policy</h5>
                <p className="mt-6 text-navyGray dark:text-white/80 text-justify">
                  We may update this Privacy Policy from time to time. The latest
                  version will always be available on this page with the updated
                  date. Continued use of our website after any changes
                  constitutes your acceptance of the new Privacy Policy.
                </p>
              </div>

              <div className="my-6">
                <h5 className="font-semibold">Contact Us</h5>
                <p className="mt-6 text-navyGray dark:text-white/80 text-justify">
                  If you have any questions about this Privacy Policy, please
                  contact us through our{" "}
                  <Link
                    href="/contact"
                    className="text-black dark:text-white hover:text-primary dark:hover:text-primary"
                  >
                    Contact Page
                  </Link>
                  .
                </p>
              </div>

              <p className="text-navyGray dark:text-white/80 text-justify mt-10">
                <strong>Last updated:</strong> {new Date().getFullYear()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
