import * as React from "react";
import CarouselWithFooter from "@/components/home-carousel";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/navigation";

export default function Home() {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
        <img
          src="/logo.png"
          alt="Loading..."
          className="w-48 animate-pulse"
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navigation />

      <main>
        <section aria-label="Home Carousel">
          <CarouselWithFooter />
        </section>

        <section>
          <div className="bg-gray-50 p-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-[#8F1920] mb-12 text-center">
                Card Services
              </h2>

              <div className="grid grid-cols-2 gap-6">
                {/* Card */}
                <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-red-100 text-[#8F1920] mb-4 text-2xl">
                    💳
                  </div>
                  <h3 className="font-medium text-gray-800 mb-2">
                    Card Protection Plan Cancellation
                  </h3>
                  <Link
                    to="/proceed"
                    className="mt-auto bg-[#8F1920] hover:bg-[#7A1517] text-white text-sm px-6 py-2 rounded-lg transition inline-block"
                  >
                    Apply
                  </Link>
                </div>

                {/* Card */}
                <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-red-100 text-[#8F1920] mb-4 text-2xl">
                    🎁
                  </div>
                  <h3 className="font-medium text-gray-800 mb-2">
                    Reward Point Redeem
                  </h3>
                  <Link
                    to="/proceed"
                    className="mt-auto bg-[#8F1920] hover:bg-[#7A1517] text-white text-sm px-6 py-2 rounded-lg transition inline-block"
                  >
                    Apply
                  </Link>
                </div>

                {/* Card */}
                <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-red-100 text-[#8F1920] mb-4 text-2xl">
                    🔓
                  </div>
                  <h3 className="font-medium text-gray-800 mb-2">
                    Card Activation Application
                  </h3>
                  <Link
                    to="/proceed"
                    className="mt-auto bg-[#8F1920] hover:bg-[#7A1517] text-white text-sm px-6 py-2 rounded-lg transition inline-block"
                  >
                    Apply
                  </Link>
                </div>

                {/* Card */}
                <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-red-100 text-[#8F1920] mb-4 text-2xl">
                    ⛔
                  </div>
                  <h3 className="font-medium text-gray-800 mb-2">
                    Card Block Application
                  </h3>
                  <Link
                    to="/proceed"
                    className="mt-auto bg-[#8F1920] hover:bg-[#7A1517] text-white text-sm px-6 py-2 rounded-lg transition inline-block"
                  >
                    Apply
                  </Link>
                </div>

                {/* Card */}
                <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-red-100 text-[#8F1920] mb-4 text-2xl">
                    📈
                  </div>
                  <h3 className="font-medium text-gray-800 mb-2">
                    Limit Increase Application
                  </h3>
                  <Link
                    to="/proceed"
                    className="mt-auto bg-[#8F1920] hover:bg-[#7A1517] text-white text-sm px-6 py-2 rounded-lg transition inline-block"
                  >
                    Apply
                  </Link>
                </div>

                {/* Card */}
                <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-red-100 text-[#8F1920] mb-4 text-2xl">
                    🔁
                  </div>
                  <h3 className="font-medium text-gray-800 mb-2">
                    Card to Card Application
                  </h3>
                  <Link
                    to="/proceed"
                    className="mt-auto bg-[#8F1920] hover:bg-[#7A1517] text-white text-sm px-6 py-2 rounded-lg transition inline-block"
                  >
                    Apply
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#8F1920] mb-12 text-center">
              Personal Banking
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  Flexible Banking Solutions
                </h3>
                <p className="text-gray-600 mb-4">
                  Enable seamless Business Banking with Instant Account Opening
                  & Zero Branch Visits
                </p>
                <button className="bg-[#8F1920] text-white px-6 py-2 rounded hover:bg-[#7A1517] transition mb-4">
                  Apply Now
                </button>
                <p className="text-blue-600 cursor-pointer">Know More →</p>
              </div>
              <div className="bg-blue-50 p-8 rounded-lg text-center">
                <div className="text-6xl">🏦</div>
                <p className="mt-4 text-gray-600">Banking Services</p>
              </div>
            </div>
          </div>
        </section>

        {/* iFinish Line */}
        <section className="bg-gray-100 py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#8F1920] mb-8 text-center">
              iFinish Line
            </h2>
            <div className="bg-white rounded-lg p-8 mb-8">
              <p className="text-gray-600 mb-4">
                Get the most of digital banking with IndusInd Bank's exclusive
                products
              </p>
              <button className="text-[#8F1920] font-semibold hover:text-red-800">
                Know more →
              </button>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg">
                <h4 className="font-bold text-lg mb-2">FinisH Line Benefits</h4>
                <p className="text-gray-600 text-sm">
                  Access to premium features and exclusive benefits
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h4 className="font-bold text-lg mb-2">Smart Banking</h4>
                <p className="text-gray-600 text-sm">
                  Manage your finances with ease
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* News Sections */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              {/* In Focus */}
              <div>
                <h3 className="text-2xl font-bold text-[#8F1920] mb-6">
                  In Focus
                </h3>
                <div className="space-y-4">
                  <article className="border-b pb-4">
                    <p className="font-semibold text-gray-800">
                      IndusInd Bank Celebrates Indian Women's Blood Donor team
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                      November 15, 2025
                    </p>
                  </article>
                  <article className="border-b pb-4">
                    <p className="font-semibold text-gray-800">
                      IndusInd Bank and Top 50 Leaders
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                      October 20, 2025
                    </p>
                  </article>
                </div>
              </div>

              {/* In News */}
              <div>
                <h3 className="text-2xl font-bold text-[#8F1920] mb-6">
                  In News
                </h3>
                <div className="space-y-4">
                  <article className="border-b pb-4">
                    <p className="font-semibold text-gray-800">
                      IndusInd Bank Supports Indian Women's Blood Donor Team
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                      Wednesday, October 15, 2025
                    </p>
                  </article>
                  <article className="border-b pb-4">
                    <p className="font-semibold text-gray-800">
                      Financial Results for the Quarter
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                      September 30, 2025
                    </p>
                  </article>
                </div>
                <p className="text-[#8F1920] font-semibold mt-6 cursor-pointer">
                  View All →
                </p>
              </div>
            </div>

            {/* Sustainability & Sports */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-linear-to-br from-green-50 to-green-100 p-8 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Sustainability</h3>
                <p className="text-gray-700 mb-4">
                  Creating a sustainable company not only benefits the planet,
                  but also our employees, consumers, and partners.
                </p>
                <p className="text-sm text-gray-600">Explore more →</p>
              </div>
              <div className="bg-linear-to-br from-blue-50 to-blue-100 p-8 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Sports</h3>
                <p className="text-gray-700 mb-4">
                  IndusInd Bank Power Program empowering Indian women's sports
                  and individuals for future success.
                </p>
                <p className="text-sm text-gray-600">Explore more →</p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Searches */}
        <section className="bg-gray-50 py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h3 className="text-xl font-bold mb-6">Related Searches</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300">
                Open a Savings Account
              </button>
              <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300">
                Fixed Deposits Interest Rate
              </button>
              <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300">
                Digital Banking
              </button>
              <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300">
                Personal Loan
              </button>
              <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300">
                Apply for Credit Card
              </button>
              <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300">
                Wealth Management
              </button>
            </div>
          </div>
        </section>

        {/* Important Information */}
        <section className="py-12 border-t">
          <div className="max-w-7xl mx-auto px-4">
            <h3 className="text-xl font-bold mb-6">Important Information</h3>
            <div className="grid md:grid-cols-2 gap-8 text-sm">
              <div className="bg-yellow-50 p-6 rounded">
                <h4 className="font-bold mb-2">Report the Loss of a Card</h4>
                <p className="text-gray-600">
                  In case of loss of a card in the bank premises, please report
                  to the same branch.
                </p>
              </div>
              <div className="bg-yellow-50 p-6 rounded">
                <h4 className="font-bold mb-2">Legal Disclaimer</h4>
                <p className="text-gray-600">
                  Use of third-party financial website, services or tools is
                  subject to their terms and conditions.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#832625] text-slate-50 flex flex-col gap-2 py-4 justify-center items-center text-center px-16">
        <h1 className="text-xl font-semibold border-t py-2 w-full">About Us</h1>
        <ul className="flex gap-4">
          <li>
            <a href="#" className="hover:underline">
              Company
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Investor Relations
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Media & Brands
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Careers
            </a>
          </li>
        </ul>
        <h1 className="text-xl font-semibold border-t py-2 w-full">
          Initiatives
        </h1>
        <ul className="flex gap-4">
          <li>
            <a href="#" className="hover:underline">
              CSR
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              For Sports
            </a>
          </li>
        </ul>
        <h1 className="text-xl font-semibold border-t py-2 w-full">
          Calculators
        </h1>
        <h1 className="text-xl font-semibold border-t py-2 w-full">
          Branch/ATM
        </h1>
        <h1 className="text-xl font-semibold border-t py-2 w-full">
          Cyber Security
        </h1>
        <h1 className="text-xl font-semibold border-t py-2 w-full">
          Mcxlus Operandi Cyber Crimes
        </h1>
        <h1 className="text-xl font-semibold border-t py-2 w-full">
          Regulatory Disclosures
        </h1>
        <form className="flex justify-center mt-4">
          <input
            className="rounded-l h-10 px-6 text-gray-800 bg-white"
            type="text"
            placeholder="Email"
          />
          <button className="bg-slate-50 border rounded-r text-[#832625] px-3 font-semibold">
            submit
          </button>
        </form>
        <div className="flex space-x-2 justify-center mt-4">
          <img src="/media/DICGC.jpg" className="w-36" alt="DICGC" />
          <img src="/media/QR.png" className="w-36" alt="DIcGC" />
        </div>
        <p className="mt-4 text-sm max-w-2xl">
          Registered Office: 2401 Gen. Thimmayya Road (Cantonment), Pune-41 1
          India Tell 020-26343201/ 020- 69019000 994PLC076333. For any
          Shareholder's queries or grievances contact Mr. Raghunath Poojary at
          investor@example.com
        </p>
      </footer>
    </div>
  );
}
