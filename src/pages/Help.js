import React, { useState } from 'react';

import Header from '../partials/Header';
import PageIllustration from '../partials/PageIllustration';
import Footer from '../partials/Footer';

function Help() {

  const [page, setPage] = useState(1);

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page illustration */}
        <div className="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
          <PageIllustration />
        </div>

        {/*  Page sections */}
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            <div className="flex flex-col md:flex-row">

              {/* Main content */}
              <main className="md:flex-auto md:pl-10 order-1" data-aos="fade-up">

                {/* FAQ’s – Frequently Asked Questions */}
                <div className={page !== 1 ? 'hidden' : undefined}>
                  <div className="mb-8">
                    <h2 className="h2 mb-4">FAQ’s – Frequently Asked Questions</h2>
                    <p className="text-gray-400">Last updated - <span className="text-purple-600">June 30, 2020</span></p>
                  </div>
                  <ul className="-my-4">
                    <li className="py-4">
                      <h4 className="text-xl font-medium mb-2">How can I use Open PRO without registration?</h4>
                      <p className="text-lg text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis enim lobortis scelerisque fermentum.</p>
                    </li>
                    <li className="py-4">
                      <h4 className="text-xl font-medium mb-2">Can I import my sitemap to Open PRO?</h4>
                      <p className="text-lg text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis enim lobortis scelerisque fermentum.</p>
                    </li>
                    <li className="py-4">
                      <h4 className="text-xl font-medium mb-2">How can I switch my subscription between essential, and premium plans?</h4>
                      <p className="text-lg text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis enim lobortis scelerisque fermentum.</p>
                    </li>
                    <li className="py-4">
                      <h4 className="text-xl font-medium mb-2">Can I cancel my subscription at any time?</h4>
                      <p className="text-lg text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis enim lobortis scelerisque fermentum.</p>
                    </li>
                    <li className="py-4">
                      <h4 className="text-xl font-medium mb-2">Is there an additional discount when paid annually?</h4>
                      <p className="text-lg text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis enim lobortis scelerisque fermentum.</p>
                    </li>
                    <li className="py-4">
                      <h4 className="text-xl font-medium mb-2">What happens if I don’t renew my license after one year?</h4>
                      <p className="text-lg text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis enim lobortis scelerisque fermentum.</p>
                    </li>
                    <li className="py-4">
                      <h4 className="text-xl font-medium mb-2">What kind of payment methods do you provide?</h4>
                      <p className="text-lg text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis enim lobortis scelerisque fermentum.</p>
                    </li>
                  </ul>
                </div>

                {/* What is Open PRO */}
                <div className={page !== 2 ? 'hidden' : undefined}>
                  <div className="mb-8">
                    <h2 className="h2 mb-4">What is Open PRO</h2>
                    <p className="text-gray-400">Last updated - <span className="text-purple-600">June 30, 2020</span></p>
                  </div>
                  <ul className="-my-4">
                    <li className="py-4">
                      <h4 className="text-xl font-medium mb-2">How can I use Open PRO without registration?</h4>
                      <p className="text-lg text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis enim lobortis scelerisque fermentum.</p>
                    </li>
                    <li className="py-4">
                      <h4 className="text-xl font-medium mb-2">Can I import my sitemap to Open PRO?</h4>
                      <p className="text-lg text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis enim lobortis scelerisque fermentum.</p>
                    </li>
                    <li className="py-4">
                      <h4 className="text-xl font-medium mb-2">How can I switch my subscription between essential, and premium plans?</h4>
                      <p className="text-lg text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis enim lobortis scelerisque fermentum.</p>
                    </li>
                    <li className="py-4">
                      <h4 className="text-xl font-medium mb-2">Can I cancel my subscription at any time?</h4>
                      <p className="text-lg text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis enim lobortis scelerisque fermentum.</p>
                    </li>
                    <li className="py-4">
                      <h4 className="text-xl font-medium mb-2">Is there an additional discount when paid annually?</h4>
                      <p className="text-lg text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis enim lobortis scelerisque fermentum.</p>
                    </li>
                    <li className="py-4">
                      <h4 className="text-xl font-medium mb-2">What happens if I don’t renew my license after one year?</h4>
                      <p className="text-lg text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis enim lobortis scelerisque fermentum.</p>
                    </li>
                    <li className="py-4">
                      <h4 className="text-xl font-medium mb-2">What kind of payment methods do you provide?</h4>
                      <p className="text-lg text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis enim lobortis scelerisque fermentum.</p>
                    </li>
                  </ul>
                </div>

                {/* Open PRO plan’s features */}
                <div className={page !== 3 ? 'hidden' : undefined}>
                  <div className="mb-8">
                    <h2 className="h2 mb-4">Open PRO plan’s features</h2>
                    <p className="text-gray-400">Last updated - <span className="text-purple-600">June 30, 2020</span></p>
                  </div>
                  <ul className="-my-4">
                    <li className="py-4">
                      <h4 className="text-xl font-medium mb-2">How can I use Open PRO without registration?</h4>
                      <p className="text-lg text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis enim lobortis scelerisque fermentum.</p>
                    </li>
                    <li className="py-4">
                      <h4 className="text-xl font-medium mb-2">Can I import my sitemap to Open PRO?</h4>
                      <p className="text-lg text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis enim lobortis scelerisque fermentum.</p>
                    </li>
                    <li className="py-4">
                      <h4 className="text-xl font-medium mb-2">How can I switch my subscription between essential, and premium plans?</h4>
                      <p className="text-lg text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis enim lobortis scelerisque fermentum.</p>
                    </li>
                    <li className="py-4">
                      <h4 className="text-xl font-medium mb-2">Can I cancel my subscription at any time?</h4>
                      <p className="text-lg text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis enim lobortis scelerisque fermentum.</p>
                    </li>
                    <li className="py-4">
                      <h4 className="text-xl font-medium mb-2">Is there an additional discount when paid annually?</h4>
                      <p className="text-lg text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis enim lobortis scelerisque fermentum.</p>
                    </li>
                    <li className="py-4">
                      <h4 className="text-xl font-medium mb-2">What happens if I don’t renew my license after one year?</h4>
                      <p className="text-lg text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis enim lobortis scelerisque fermentum.</p>
                    </li>
                    <li className="py-4">
                      <h4 className="text-xl font-medium mb-2">What kind of payment methods do you provide?</h4>
                      <p className="text-lg text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis enim lobortis scelerisque fermentum.</p>
                    </li>
                  </ul>
                </div>

                {/* Get started */}
                <div className={page !== 4 ? 'hidden' : undefined}>
                  <div className="mb-8">
                    <h2 className="h2 mb-4">Get started</h2>
                    <p className="text-gray-400">Last updated - <span className="text-purple-600">June 30, 2020</span></p>
                  </div>
                  <ul className="-my-4">
                    <li className="py-4">
                      <h4 className="text-xl font-medium mb-2">How can I use Open PRO without registration?</h4>
                      <p className="text-lg text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis enim lobortis scelerisque fermentum.</p>
                    </li>
                    <li className="py-4">
                      <h4 className="text-xl font-medium mb-2">Can I import my sitemap to Open PRO?</h4>
                      <p className="text-lg text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis enim lobortis scelerisque fermentum.</p>
                    </li>
                    <li className="py-4">
                      <h4 className="text-xl font-medium mb-2">How can I switch my subscription between essential, and premium plans?</h4>
                      <p className="text-lg text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis enim lobortis scelerisque fermentum.</p>
                    </li>
                    <li className="py-4">
                      <h4 className="text-xl font-medium mb-2">Can I cancel my subscription at any time?</h4>
                      <p className="text-lg text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis enim lobortis scelerisque fermentum.</p>
                    </li>
                    <li className="py-4">
                      <h4 className="text-xl font-medium mb-2">Is there an additional discount when paid annually?</h4>
                      <p className="text-lg text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis enim lobortis scelerisque fermentum.</p>
                    </li>
                    <li className="py-4">
                      <h4 className="text-xl font-medium mb-2">What happens if I don’t renew my license after one year?</h4>
                      <p className="text-lg text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis enim lobortis scelerisque fermentum.</p>
                    </li>
                    <li className="py-4">
                      <h4 className="text-xl font-medium mb-2">What kind of payment methods do you provide?</h4>
                      <p className="text-lg text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis enim lobortis scelerisque fermentum.</p>
                    </li>
                  </ul>
                </div>

                {/* Payments FAQ’s */}
                <div className={page !== 5 ? 'hidden' : undefined}>
                  <div className="mb-8">
                    <h2 className="h2 mb-4">Payments FAQ’s</h2>
                    <p className="text-gray-400">Last updated - <span className="text-purple-600">June 30, 2020</span></p>
                  </div>
                  <ul className="-my-4">
                    <li className="py-4">
                      <h4 className="text-xl font-medium mb-2">How can I use Open PRO without registration?</h4>
                      <p className="text-lg text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis enim lobortis scelerisque fermentum.</p>
                    </li>
                    <li className="py-4">
                      <h4 className="text-xl font-medium mb-2">Can I import my sitemap to Open PRO?</h4>
                      <p className="text-lg text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis enim lobortis scelerisque fermentum.</p>
                    </li>
                    <li className="py-4">
                      <h4 className="text-xl font-medium mb-2">How can I switch my subscription between essential, and premium plans?</h4>
                      <p className="text-lg text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis enim lobortis scelerisque fermentum.</p>
                    </li>
                    <li className="py-4">
                      <h4 className="text-xl font-medium mb-2">Can I cancel my subscription at any time?</h4>
                      <p className="text-lg text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis enim lobortis scelerisque fermentum.</p>
                    </li>
                    <li className="py-4">
                      <h4 className="text-xl font-medium mb-2">Is there an additional discount when paid annually?</h4>
                      <p className="text-lg text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis enim lobortis scelerisque fermentum.</p>
                    </li>
                    <li className="py-4">
                      <h4 className="text-xl font-medium mb-2">What happens if I don’t renew my license after one year?</h4>
                      <p className="text-lg text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis enim lobortis scelerisque fermentum.</p>
                    </li>
                    <li className="py-4">
                      <h4 className="text-xl font-medium mb-2">What kind of payment methods do you provide?</h4>
                      <p className="text-lg text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis enim lobortis scelerisque fermentum.</p>
                    </li>
                  </ul>
                </div>

              </main>

              {/* Nav sidebar */}
              <aside className="md:w-64 mb-16 md:mb-0 md:mr-10 md:flex-shrink-0" data-aos="fade-up" data-aos-delay="200">
                <h4 className="text-lg font-medium px-3 pb-3 border-b border-gray-800">Choose a category</h4>
                <nav>
                  <ul>
                    <li className="py-2 border-b border-gray-800">
                      <a
                        className={`flex items-center px-3 group text-gray-400 hover:text-purple-600 transition duration-150 ease-in-out ${page === 1 && 'text-purple-600'}`}
                        href="#0"
                        onClick={(e) => { e.preventDefault(); setPage(1); }}
                      >
                        <span>Frequently Asked Questions</span>
                        <svg className="w-3 h-3 fill-current flex-shrink-0 ml-2 opacity-0 group-hover:opacity-100 group-hover:text-purple-600 group-hover:translate-x-1 transition duration-150 ease-in-out transform" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" />
                        </svg>
                      </a>
                    </li>
                    <li className="py-2 border-b border-gray-800">
                      <a
                        className={`flex items-center px-3 group text-gray-400 hover:text-purple-600 transition duration-150 ease-in-out ${page === 2 && 'text-purple-600'}`}
                        href="#0"
                        onClick={(e) => { e.preventDefault(); setPage(2); }}
                      >
                        <span>What is Open PRO</span>
                        <svg className="w-3 h-3 fill-current flex-shrink-0 ml-2 opacity-0 group-hover:opacity-100 group-hover:text-purple-600 group-hover:translate-x-1 transition duration-150 ease-in-out transform" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" />
                        </svg>
                      </a>
                    </li>
                    <li className="py-2 border-b border-gray-800">
                      <a
                        className={`flex items-center px-3 group text-gray-400 hover:text-purple-600 transition duration-150 ease-in-out ${page === 3 && 'text-purple-600'}`}
                        href="#0"
                        onClick={(e) => { e.preventDefault(); setPage(3); }}
                      >
                        <span>Open PRO plan’s features</span>
                        <svg className="w-3 h-3 fill-current flex-shrink-0 ml-2 opacity-0 group-hover:opacity-100 group-hover:text-purple-600 group-hover:translate-x-1 transition duration-150 ease-in-out transform" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" />
                        </svg>
                      </a>
                    </li>
                    <li className="py-2 border-b border-gray-800">
                      <a
                        className={`flex items-center px-3 group text-gray-400 hover:text-purple-600 transition duration-150 ease-in-out ${page === 4 && 'text-purple-600'}`}
                        href="#0"
                        onClick={(e) => { e.preventDefault(); setPage(4); }}
                      >
                        <span>Get started</span>
                        <svg className="w-3 h-3 fill-current flex-shrink-0 ml-2 opacity-0 group-hover:opacity-100 group-hover:text-purple-600 group-hover:translate-x-1 transition duration-150 ease-in-out transform" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" />
                        </svg>
                      </a>
                    </li>
                    <li className="py-2 border-b border-gray-800">
                      <a
                        className={`flex items-center px-3 group text-gray-400 hover:text-purple-600 transition duration-150 ease-in-out ${page === 5 && 'text-purple-600'}`}
                        href="#0"
                        onClick={(e) => { e.preventDefault(); setPage(5); }}
                      >
                        <span>Payments FAQ’s</span>
                        <svg className="w-3 h-3 fill-current flex-shrink-0 ml-2 opacity-0 group-hover:opacity-100 group-hover:text-purple-600 group-hover:translate-x-1 transition duration-150 ease-in-out transform" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </nav>
              </aside>

            </div>
          </div>
        </div>

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default Help;