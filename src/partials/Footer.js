import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className= "md:flex mt-10 md:text-baseborder-t-2 pt-2">
      <div className="md:w-2/3 w-1/1 pr-2 md:pr-4  md:border-r-2 md:border-b-0 border-b-2 md:mb-0 mb-2">
        {/* Site branding */}
        <div className="text-center md:text-left">
              {/* Logo */}
            <Link to="/" className="block" aria-label="star">
              <img alt="star"  src={require('../logo/star_logo.png').default} className="md:w-28" width="70" height="auto"/>
          </Link>
        </div>
      
        <div className="md:flex items-end pb-2 border-t-2 md:border-t-0">
        </div>
      </div>
      <div className="md:w-1/3 w-1/1 pl-2 md:pl-4">
        <p className="mb-4 text-sm font-bold text-bold text-black">Liên hệ</p>
        <ul className="flex border-b-2 pb-2 mb-2 px-2 text-xs">
            <li className="mr-4"><a  className="flex items-center  mr-4" href="mailto:ngocphuc.nguyen256@gmail.com " title="Image from freeiconspng.com"><img src="https://www.freeiconspng.com/uploads/black-mail-icon-4.png" width="20" alt="Black mail Icon" />ngocphucnguyen256</a></li>
            <li ><a className="flex items-center" href="# " title="Image from freeiconspng.com"><img className="mr-1" src="https://www.freeiconspng.com/uploads/ad-ads-advertisement-advertising-banner-frame-promotion-icon-5.png" width="18" alt="ad, ads, advertisement, advertising, banner, frame, promotion icon" />Quảng cáo</a></li>
        </ul>
        <p className="mb-4 text-sm font-bold text-bold text-black">Điện thoại</p>
        <ul className="flex border-b-2 pb-2 mb-2 px-2 text-xs">
            <li className="mr-4">0359452734</li>
        </ul>

        <div>
          <ul className="flex px-2 text-xs">
            <li className="mr-4"><a href="https://www.facebook.com/ngocphucnguyen256/ " title="Image from freeiconspng.com" className="mr-2"><img src="https://www.freeiconspng.com/uploads/facebook-logo-3.png" width="18" alt="Facebook Logo HD PNG Pic" /></a></li>

          
          </ul>
        </div>
      </div>
        <div>
        </div>
        <div className="flex flex-col justify-center items-center pt-2">
        </div>
    </footer>

  );
}

export default Footer;
