import React from 'react';

import Header from '../partials/Header';
import PageIllustration from '../partials/PageIllustration';
import CtaContact from '../partials/CtaContact';
import Footer from '../partials/Footer';

function Contact() {
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

        <section className="relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">

              {/* Page header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                <h1 className="h1 mb-4" data-aos="fade-up">How can we help you?</h1>
                <p className="text-xl text-gray-400" data-aos="fade-up" data-aos-delay="200">We have custom plans to power your business. Tell us your needs, and we’ll contact you shortly.</p>
              </div>

              {/* Contact form */}
              <form className="max-w-xl mx-auto">
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                    <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="first-name">First Name <span className="text-red-600">*</span></label>
                    <input id="first-name" type="text" className="form-input w-full text-gray-300 border-red-500 focus:border-red-500" placeholder="Enter your first name" required />
                    <p className="text-red-500 text-sm mt-2">This field is required</p>
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="last-name">Last Name <span className="text-red-600">*</span></label>
                    <input id="last-name" type="text" className="form-input w-full text-gray-300" placeholder="Enter your last name" required />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full px-3">
                    <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="email">Email <span className="text-red-600">*</span></label>
                    <input id="email" type="email" className="form-input w-full text-gray-300" placeholder="Enter your email address" required />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full px-3">
                    <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="subject">Subject <span className="text-red-600">*</span></label>
                    <input id="subject" type="text" className="form-input w-full text-gray-300" placeholder="How can we help you?" required />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full px-3">
                    <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="country">Country</label>
                    <select id="country" className="form-select w-full text-gray-300">
                      <option>United States</option>
                      <option>United Kingdom</option>
                      <option>Germany</option>
                    </select>
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full px-3">
                    <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="message">Message</label>
                    <textarea id="message" rows="4" className="form-textarea w-full text-gray-300" placeholder="Write your message"></textarea>
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full px-3">
                    <label className="flex items-center">
                      <input type="checkbox" className="form-checkbox" />
                      <span className="text-gray-400 ml-2">I agree to the privacy policy</span>
                    </label>
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mt-6">
                  <div className="w-full px-3">
                    <button className="btn text-white bg-purple-600 hover:bg-purple-700 w-full">Send</button>
                  </div>
                </div>
              </form>

            </div>
          </div>
        </section>

        {/*  Bottom CTA */}
        <CtaContact />

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default Contact;