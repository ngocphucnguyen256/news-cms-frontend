import React from 'react';

import Header from '../partials/Header';
import Footer from '../partials/Footer';
import BodySection from '../partials/BodySection';
import AdsSlider from '../partials/AdsSlider';
import Darkmode from 'darkmode-js';


new Darkmode().showWidget();
const options = {
  bottom: '0', // default: '32px'
  right: '2.9rem', // default: '32px'
  left: 'unset', // default: 'unset'
  time: '0.5s', // default: '0.3s'
  mixColor: '#fff', // default: '#fff'
  backgroundColor: '#fff',  // default: '#fff'
  buttonColorDark: '#100f2c',  // default: '#100f2c'
  buttonColorLight: '#fff', // default: '#fff'
  saveInCookies: false, // default: true,
  label: '🌓', // default: ''
  autoMatchOsTheme: true // default: true
}

const darkmode = new Darkmode(options);
darkmode.showWidget();

function Home() {
  return (
     <div className="mx-2 md:mx-10 mb-10 md:mb-0" id="top">


      {/*  Site header */}
      <div className="mb-2 ">

         <AdsSlider location="menu"/>
      </div>

      <Header />


      {/*  Page content */}
      <main className="flex-grow">


        <BodySection />

        <a className="fixed bottom-10 right-10" href="#top" title="Image from freeiconspng.com"><img src="https://www.freeiconspng.com/uploads/arrow-icon-clip-art-file-down-arrow-icon-png-balin-icon-arrow-right--32.png" width="50" alt="top" /></a>
      </main>
      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default Home;