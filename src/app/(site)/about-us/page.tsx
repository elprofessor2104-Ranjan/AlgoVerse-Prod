import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | AlgoVerse",
};

export default function Page() {
  return (
    <section>
      <div className="pb-14 md:pb-20 pt-40 flex flex-col gap-8 md:gap-14 dark:bg-baseInk">
        <div className="container relative z-10">
          <div className="flex flex-col gap-8 md:gap-14">
            <div className="flex flex-col items-center gap-2">
              <h1 className="font-semibold">About Us</h1>
            </div>

            <div>
              <p className="text-navyGray dark:text-white/80 text-justify">
                Welcome to <strong>AlgoVerse</strong> — a platform built to make
                understanding trading and financial markets easier for everyone.
                Our mission is to provide clear, informative, and unbiased
                insights into market trends, trading strategies, and financial
                education. We believe that learning about the markets should be
                accessible, reliable, and free from unnecessary complexity.
              </p>

              <p className="text-navyGray dark:text-white/80 text-justify mt-6">
                At AlgoVerse, we focus on delivering educational content and
                analytical tools that empower individuals to make informed
                trading decisions. Whether you’re a beginner exploring market
                basics or an experienced trader seeking algorithmic insights, we
                aim to create content that adds real value to your journey.
              </p>

              <div className="my-6">
                <h5 className="font-semibold">Our Vision</h5>
                <p className="mt-6 text-navyGray dark:text-white/80 text-justify">
                  Our vision is to build a trusted and transparent learning space
                  where people can explore trading concepts with confidence. We
                  strive to simplify complex topics like algorithmic trading,
                  market indicators, and risk management through easy-to-read
                  blogs, guides, and tutorials.
                </p>
              </div>

              <div className="my-6">
                <h5 className="font-semibold">What We Do</h5>
                <p className="mt-6 text-navyGray dark:text-white/80 text-justify">
                  We publish articles, insights, and explainers that cover topics
                  across financial markets — from technical analysis and trading
                  tools to algorithmic strategies and global market trends. Our
                  content is designed for educational purposes and aims to help
                  readers improve their understanding of the trading ecosystem.
                </p>
              </div>

              <div className="my-6">
                <h5 className="font-semibold">Our Commitment</h5>
                <p className="mt-6 text-navyGray dark:text-white/80 text-justify">
                  We are committed to accuracy, transparency, and ethical
                  publishing practices. Every article or resource on AlgoVerse
                  is created with the goal of educating and informing our
                  audience. We do not offer financial advice or promote any
                  get-rich schemes — our focus is purely educational.
                </p>
              </div>

              <div className="my-6">
                <h5 className="font-semibold">Why Choose AlgoVerse</h5>
                <p className="mt-6 text-navyGray dark:text-white/80 text-justify">
                  The online trading world can be overwhelming, filled with
                  information that’s either too technical or too promotional.
                  AlgoVerse bridges that gap by presenting genuine, easy-to-grasp
                  explanations written by enthusiasts who understand both
                  beginners’ curiosity and professionals’ depth of need.
                </p>
              </div>

              <div className="my-6">
                <h5 className="font-semibold">Join Our Community</h5>
                <p className="mt-6 text-navyGray dark:text-white/80 text-justify">
                  We invite you to explore our blog, engage with our resources,
                  and grow your trading knowledge. Stay connected with us for
                  updates, educational guides, and informative content that helps
                  you stay ahead in the ever-evolving financial world.
                </p>
              </div>

              <div className="my-6">
                <h5 className="font-semibold">Contact Us</h5>
                <p className="mt-6 text-navyGray dark:text-white/80 text-justify">
                  If you have any questions, suggestions, or collaboration ideas,
                  feel free to reach out via our{" "}
                  <Link
                    href="/contact"
                    className="text-black dark:text-white hover:text-primary dark:hover:text-primary"
                  >
                    contact page
                  </Link>
                  . We’d love to hear from you!
                </p>
              </div>

              <p className="text-navyGray dark:text-white/80 text-justify mt-10">
                <strong>Disclaimer:</strong> AlgoVerse provides content for
                educational purposes only. We do not offer financial or
                investment advice. Always do your own research or consult a
                licensed professional before making any trading decisions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
