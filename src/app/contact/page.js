import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="container">
        <div className="row my-5">
          <div className="col-lg-6 english-font">
            <div style={{ borderBottom: "2px solid var(--secondary)" }}>
              <h1 className="fw-bold secondary-color">Contact Us</h1>
            </div>
            {/* Content In English */}
            <div className="pt-5">
              <h4 className="english-font">Head Office</h4>
              <p>71-16 35th Ave, Jackson Heights,NY 11372, USA</p>
              <ul>
                <li>
                  Office: <Link href={'/'}>+1646 267-7751</Link>
                </li>
                <li>
                  Advertisement: <Link href={'/'}>+1646 267-7751</Link>
                </li>
                <li>
                  Fax: <Link href={'/'}>718-865-9130</Link>
                </li>
                <li>
                  ePaper: <Link href={'/'}>+1646 267-7751</Link> (10am-6pm, Phone &
                  WhatsApp)
                </li>
              </ul>
              <h4 className="english-font">Email</h4>
              <p>info@ajkalusa.com</p>
              <ul>
                <li>
                  Print Ad Sales: <Link href={'/'}>ad@ajkalusa.com</Link>
                </li>
                <li>
                  Digital Ad Sales: <Link href={'/'}>adsales@ajkalusa.com</Link>
                </li>
                <li>Fax: +1646 267-7751</li>
                <li>
                  ePaper: <Link href={'/'}>epaper@ajkalusa.com</Link>
                </li>
              </ul>
              <h4 className="english-font">Follow us on</h4>
              <p>info@ajkalusa.com</p>
              <ul>
                <li>
                  <Link href={'/'}>facebook.com/Dailyajkalusa</Link>
                </li>
                <li>
                  <Link href={'/'}>twitter.com/ajkalusa</Link>
                </li>
                <li>
                  <Link href={'/'}>instagram.com/ajkalusa</Link>
                </li>
                <li>
                  <Link href={'/'}>youtube.com/ajkalusa</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div style={{ borderBottom: "2px solid var(--secondary)" }}>
              <h1 className="text-muted fw-bold secondary-color">যোগাযোগ</h1>
            </div>
            {/* Content Start In Bangla */}
            <div className="pt-5">
              <h4 className="english-font">প্রধান কার্যালয়</h4>
              <p>১৯ কারওয়ান বাজার, ঢাকা ১২১৫, বাংলাদেশ।</p>
              <strong>ফোন</strong>
              <ul>
                <li>
                  <Link href={'/'}>+1646 267-7751</Link>
                </li>
              </ul>
              <h4 className="english-font">ইমেইল</h4>
              <p>info@ajkalusa.com</p>
              <ul>
                <li>
                  অফিস: <Link href={'/'}>info@ajkalusa.com</Link>
                </li>
                <li>
                  বার্তা বিভাগ: <Link href={'/'}>adsales@ajkalusa.com</Link>
                </li>
                <li>
                  সম্পাদকীয় বিভাগ: <Link href={'/'}>adsales@ajkalusa.com</Link>
                </li>
                <li>
                  পত্রিকা বিজ্ঞাপন বিভাগ: <Link href={'/'}>adsales@ajkalusa.com</Link>
                </li>
                <li>
                  ডিজিটাল বিজ্ঞাপন বিভাগ: <Link href={'/'}>adsales@ajkalusa.com</Link>
                </li>
                <li>Fax: 02 55012200, 02 55012211</li>
              </ul>
              <h4>ওয়েবসাইট</h4>
              <Link href={'/'}>ajkalusa.com</Link>
              <h4 className="english-font pt-3">Follow us on</h4>
              <p>info@ajkalusa.com</p>
              <ul>
                <li>
                  <Link href={'/'}>facebook.com/Dailyajkalusa</Link>
                </li>
                <li>
                  <Link href={'/'}>twitter.com/ajkalusa</Link>
                </li>
                <li>
                  <Link href={'/'}>instagram.com/ajkalusa</Link>
                </li>
                <li>
                  <Link href={'/'}>youtube.com/ajkalusa</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
