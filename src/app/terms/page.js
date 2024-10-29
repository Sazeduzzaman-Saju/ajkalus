import Link from "next/link";
import React from "react";

export const metadata = {
  title: "টার্মস || সাপ্তাহিক আজকাল - Weekly Ajkal",

  openGraph: {
    type: "website",
    url: "https://www.ajkal.us/terms",
    title: "সাপ্তাহিক আজকাল :: Weekly Ajkal",
    description:
      "বাংলাদেশ ও বিশ্বসংবাদ সম্পর্কে সর্বশেষ আপডেট জানুন। এখানে পাবেন খেলাধুলা, রাজনীতি, চাকরি, বিনোদন, স্বাস্থ্য, লাইফস্টাইল এবং আরও অনেক কিছু।",
    images: [
      {
        url: "https://ajkal.us/img/settings/placeholder.jpg",
        width: 1200,
        height: 630,
        alt: "সাপ্তাহিক আজকাল এর চিত্র",
      },
    ],
    site_name: "আজকাল",
  },
  twitter: {
    card: "summary_large_image",
    title: "সাপ্তাহিক আজকাল :: Weekly Ajkal",
    description:
      "বাংলাদেশ ও বিশ্বসংবাদ সম্পর্কে সর্বশেষ আপডেট জানুন। এখানে পাবেন খেলাধুলা, রাজনীতি, চাকরি, বিনোদন, স্বাস্থ্য, লাইফস্টাইল এবং আরও অনেক কিছু।",
    images: ["https://ajkal.us/img/settings/placeholder.jpg"],
  },
  canonicalUrl: "https://www.ajkal.us/terms",
};

const page = () => {
  return (
    <div>
      <div className="container">
        <div className="row my-5">
          <div className="col-lg-6 policy-text">
            <div style={{ borderBottom: "2px solid var(--secondary)" }}>
              <h1 className="fw-bold secondary-color">About Us</h1>
            </div>
            {/* Content In English */}
            <div className="pt-2">
              <h2>
                <strong className="policy-text">Terms and Conditions</strong>
              </h2>

              <div>Welcome to Weekly Ajkal!</div>

              <div>
                These terms and conditions outline the rules and regulations for
                the use of Weekly {"Ajkal's"} Website, located at
                https://ajkalusa.com
              </div>

              <div>
                By accessing this website we assume you accept these terms and
                conditions. Do not continue to use Weekly Ajkal if you do not
                agree to take all of the terms and conditions stated on this
                page.
              </div>

              <div>
                The following terminology applies to these Terms and Conditions,
                Privacy Statement and Disclaimer Notice and all Agreements:
                "Client", "You" and "Your" refers to you, the person log on this
                website and compliant to the Company's terms and conditions.
                "The Company", "Ourselves", "We", "Our" and "Us", refers to our
                Company. "Party", "Parties", or "Us", refers to both the Client
                and ourselves. All terms refer to the offer, acceptance and
                consideration of payment necessary to undertake the process of
                our assistance to the Client in the most appropriate manner for
                the express purpose of meeting the Client's needs in respect of
                provision of the Company's stated services, in accordance with
                and subject to, prevailing law of us. Any use of the above
                terminology or other words in the singular, plural,
                capitalization and/or he/she or they, are taken as
                interchangeable and therefore as referring to same.
              </div>

              <h3>
                <strong className="policy-text">Cookies</strong>
              </h3>

              <div>
                We employ the use of cookies. By accessing Weekly Ajkal, you
                agreed to use cookies in agreement with the Weekly {"Ajkal's"}
                Privacy Policy.{" "}
              </div>

              <div>
                Most interactive websites use cookies to let us retrieve the
                user's details for each visit. Cookies are used by our website
                to enable the functionality of certain areas to make it easier
                for people visiting our website. Some of our
                affiliate/advertising partners may also use cookies.
              </div>

              <h3>
                <strong className="policy-text">License</strong>
              </h3>

              <div>
                Unless otherwise stated, Weekly Ajkal and/or its licensors own
                the intellectual property rights for all material on Weekly
                Ajkal. All intellectual property rights are reserved. You may
                access this from Weekly Ajkal for your own personal use
                subjected to restrictions set in these terms and conditions.
              </div>

              <div>You must not:</div>
              <ul>
                <li>Republish material from Weekly Ajkal</li>
                <li>Sell, rent or sub-license material from Weekly Ajkal</li>
                <li>Reproduce, duplicate or copy material from Weekly Ajkal</li>
                <li>Redistribute content from Weekly Ajkal</li>
              </ul>

              <div>
                This Agreement shall begin on the date hereof. Our Terms and
                Conditions were created with the help of the{" "}
                <Link href="/">Free Terms and Conditions Generator</Link>.
              </div>

              <div>
                Parts of this website offer an opportunity for users to post and
                exchange opinions and information in certain areas of the
                website. Weekly Ajkal does not filter, edit, publish or review
                Comments prior to their presence on the website. Comments do not
                reflect the views and opinions of Weekly Ajkal,its agents and/or
                affiliates. Comments reflect the views and opinions of the
                person who post their views and opinions. To the extent
                permitted by applicable laws, Weekly Ajkal shall not be liable
                for the Comments or for any liability, damages or expenses
                caused and/or suffered as a result of any use of and/or posting
                of and/or appearance of the Comments on this website.
              </div>

              <div>
                Weekly Ajkal reserves the right to monitor all Comments and to
                remove any Comments which can be considered inappropriate,
                offensive or causes breach of these Terms and Conditions.
              </div>

              <div>You warrant and represent that:</div>

              <ul>
                <li>
                  You are entitled to post the Comments on our website and have
                  all necessary licenses and consents to do so;
                </li>
                <li>
                  The Comments do not invade any intellectual property right,
                  including without limitation copyright, patent or trademark of
                  any third party;
                </li>
                <li>
                  The Comments do not contain any defamatory, libelous,
                  offensive, indecent or otherwise unlawful material which is an
                  invasion of privacy
                </li>
                <li>
                  The Comments will not be used to solicit or promote business
                  or custom or present commercial activities or unlawful
                  activity.
                </li>
              </ul>

              <div>
                You hereby grant Weekly Ajkal a non-exclusive license to use,
                reproduce, edit and authorize others to use, reproduce and edit
                any of your Comments in any and all forms, formats or media.
              </div>

              <h3>
                <strong className="policy-text">
                  Hyperlinking to our Content
                </strong>
              </h3>

              <div>
                The following organizations may link to our Website without
                prior written approval:
              </div>

              <ul>
                <li>Government agencies;</li>
                <li>Search engines;</li>
                <li>News organizations;</li>
                <li>
                  Online directory distributors may link to our Website in the
                  same manner as they hyperlink to the Websites of other listed
                  businesses; and
                </li>
                <li>
                  System wide Accredited Businesses except soliciting non-profit
                  organizations, charity shopping malls, and charity fundraising
                  groups which may not hyperlink to our Web site.
                </li>
              </ul>

              <div>
                These organizations may link to our home page, to publications
                or to other Website information so long as the link: (a) is not
                in any way deceptive; (b) does not falsely imply sponsorship,
                endorsement or approval of the linking party and its products
                and/or services; and (c) fits within the context of the linking
                party's site.
              </div>

              <div>
                We may consider and approve other link requests from the
                following types of organizations:
              </div>

              <ul>
                <li>
                  commonly-known consumer and/or business information sources;
                </li>
                <li>dot.com community sites;</li>
                <li>associations or other groups representing charities;</li>
                <li>online directory distributors;</li>
                <li>internet portals;</li>
                <li>accounting, law and consulting firms; and</li>
                <li>educational institutions and trade associations.</li>
              </ul>

              <div>
                We will approve link requests from these organizations if we
                decide that: (a) the link would not make us look unfavorably to
                ourselves or to our accredited businesses; (b) the organization
                does not have any negative records with us; (c) the benefit to
                us from the visibility of the hyperlink compensates the absence
                of Weekly Ajkal; and (d) the link is in the context of general
                resource information.
              </div>

              <div>
                These organizations may link to our home page so long as the
                link: (a) is not in any way deceptive; (b) does not falsely
                imply sponsorship, endorsement or approval of the linking party
                and its products or services; and (c) fits within the context of
                the linking party's site.
              </div>

              <div>
                If you are one of the organizations listed in paragraph 2 above
                and are interested in linking to our website, you must inform us
                by sending an e-mail to Weekly Ajkal. Please include your name,
                your organization name, contact information as well as the URL
                of your site, a list of any URLs from which you intend to link
                to our Website, and a list of the URLs on our site to which you
                would like to link. Wait 2-3 weeks for a response.
              </div>

              <div>
                Approved organizations may hyperlink to our Website as follows:
              </div>

              <ul>
                <li>By use of our corporate name; or</li>
                <li>
                  By use of the uniform resource locator being linked to; or
                </li>
                <li>
                  By use of any other description of our Website being linked to
                  that makes sense within the context and format of content on
                  the linking party's site.
                </li>
              </ul>

              <div>
                No use of Weekly {"Ajkal's"} logo or other artwork will be
                allowed for linking absent a trademark license agreement.
              </div>

              <h3>
                <strong className="policy-text">iFrames</strong>
              </h3>

              <div>
                Without prior approval and written permission, you may not
                create frames around our Webpages that alter in any way the
                visual presentation or appearance of our Website.
              </div>

              <h3>
                <strong className="policy-text">Content Liability</strong>
              </h3>

              <div>
                We shall not be hold responsible for any content that appears on
                your Website. You agree to protect and defend us against all
                claims that is rising on your Website. No link(s) should appear
                on any Website that may be interpreted as libelous, obscene or
                criminal, or which infringes, otherwise violates, or advocates
                the infringement or other violation of, any third party rights.
              </div>

              <h3>
                <strong className="policy-text">Reservation of Rights</strong>
              </h3>

              <div>
                We reserve the right to request that you remove all links or any
                particular link to our Website. You approve to immediately
                remove all links to our Website upon request. We also reserve
                the right to amen these terms and conditions and it's linking
                policy at any time. By continuously linking to our Website, you
                agree to be bound to and follow these linking terms and
                conditions.
              </div>

              <h3>
                <strong className="policy-text">
                  Removal of links from our website
                </strong>
              </h3>

              <div>
                If you find any link on our Website that is offensive for any
                reason, you are free to contact and inform us any moment. We
                will consider requests to remove links but we are not obligated
                to or so or to respond to you directly.
              </div>

              <div>
                We do not ensure that the information on this website is
                correct, we do not warrant its completeness or accuracy; nor do
                we promise to ensure that the website remains available or that
                the material on the website is kept up to date.
              </div>

              <h3>
                <strong className="policy-text">Disclaimer</strong>
              </h3>

              <div>
                To the maximum extent permitted by applicable law, we exclude
                all representations, warranties and conditions relating to our
                website and the use of this website. Nothing in this disclaimer
                will:
              </div>

              <ul>
                <li>
                  limit or exclude our or your liability for death or personal
                  injury;
                </li>
                <li>
                  limit or exclude our or your liability for fraud or fraudulent
                  misrepresentation;
                </li>
                <li>
                  limit any of our or your liabilities in any way that is not
                  permitted under applicable law; or
                </li>
                <li>
                  exclude any of our or your liabilities that may not be
                  excluded under applicable law.
                </li>
              </ul>

              <div>
                The limitations and prohibitions of liability set in this
                Section and elsewhere in this disclaimer: (a) are subject to the
                preceding paragraph; and (b) govern all liabilities arising
                under the disclaimer, including liabilities arising in contract,
                in tort and for breach of statutory duty.
              </div>

              <div>
                As long as the website and the information and services on the
                website are provided free of charge, we will not be liable for
                any loss or damage of any nature.
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div style={{ borderBottom: "2px solid var(--secondary)" }}>
              <h1 className="text-muted fw-bold secondary-color">
                সাপ্তাহিক আজকাল এর নিয়ে
              </h1>
            </div>
            {/* Content Start In Bangla */}
            <div className="pt-5">
              <div>
                ছাপা পত্রিকা, ওয়েব পোর্টাল, দুটি মাসিক ম্যাগাজিন (কিশোর আলো ও
                বিজ্ঞানচিন্তা), নিয়মিত ম্যাগাজিন বর্ণিল এবং ঈদসংখ্যার মতো বিশেষ
                ম্যাগাজিন, প্রথমা প্রকাশন, বছরব্যাপী গোলটেবিল আলোচনা, ইভেন্টস
                (শিক্ষা, সাংস্কৃতিক ও সামাজিক কার্যক্রমসমূহ), সাপ্তাহিক আজকাল এর
                ট্রাস্ট, সাপ্তাহিক আজকাল এর বন্ধুসভা ইত্যাদি উদ্যোগ মিলে এক
                হাজারেরও বেশি কর্মী নিয়ে সাপ্তাহিক আজকাল এর দেশের বৃহত্তম মিডিয়া
                প্রতিষ্ঠান। সাপ্তাহিক আজকাল এর দেশের খ্যাতনামা শিল্পগোষ্ঠী
                ট্রান্সকম গ্রুপের অঙ্গপ্রতিষ্ঠান মিডিয়াস্টার লিমিটেডের
                মালিকানাভুক্ত। ঢাকা, চট্টগ্রাম ও বগুড়া—এই তিন জায়গা থেকে
                প্রতিদিন সাপ্তাহিক আজকাল এর ১০টি সংস্করণ মুদ্রিত হয়। বিচিত্র
                সামাজিক, সাংস্কৃতিক ও শিক্ষামূলক কার্যক্রমের উদ্যোক্তা হিসেবে
                বলা হয়ে থাকে, ‘সাপ্তাহিক আজকাল এর পত্রিকার চেয়ে একটু বেশি’।
                <br />
                <br />
                যুক্তরাজ্যভিত্তিক সমীক্ষাপ্রতিষ্ঠান ক্যান্টার এমআরবি পরিচালিত
                জাতীয় গণমাধ্যম জরিপ ২০২১ অনুসারে, প্রতিদিন ৫০ লাখের বেশি মানুষ
                সাপ্তাহিক আজকাল এর ছাপা পত্রিকা পড়ে থাকেন। এই জরিপে দেখা গেছে,
                প্রথম আলোই বাংলাদেশে সর্বোচ্চ পঠিত পত্রিকা।
                <br />
                পাঠকসংখ্যা ও পেজভিউর হিসাবেও সাপ্তাহিক আজকাল এর পোর্টাল বিশ্বে
                বাংলা ভাষার এক নম্বর ওয়েবসাইট। প্রতি মাসে এর ভিজিটর প্রায় ১ কোটি
                ৬০ লাখ এবং মাসিক পেজভিউ প্রায় ২২ কোটি। ১ কোটি ৯৬ লাখ অনুসারী
                নিয়ে সাপ্তাহিক আজকাল এর ফেসবুক পেজ এখন বাংলাদেশে ব্যক্তি ও
                প্রাতিষ্ঠানিক পেজের মধ্যে সবার শীর্ষে। সাপ্তাহিক আজকাল এর
                আত্মপ্রকাশ ১৯৯৮ সালের ৪ নভেম্বর। বস্তুনিষ্ঠ, স্বাধীন ও
                দলনিরপেক্ষ একটি দৈনিক পত্রিকা হিসেবে এমন এক সময়ে এর যাত্রা শুরু,
                যখন ১৯৯০ সালে সামরিক স্বৈরতন্ত্র উচ্ছেদের এক দশকও পার হয়নি এবং
                বাংলাদেশ নতুন করে তার গণতন্ত্রের পথ রচনার চেষ্টা করছে। পত্রিকার
                পাশাপাশি শুরু থেকেই ডিজিটাল পরিসরে সাপ্তাহিক আজকাল এর সংবাদ
                প্রচার করতে শুরু করে। ২০০৯ সালের ১৭ মে তারিখে হয় এর ওয়েব
                পোর্টালের আনুষ্ঠানিক উদ্বোধন। এর আগে একই বছরের ৫ এপ্রিল চালু হয়
                সাপ্তাহিক আজকাল এর ই–পেপার।
                <br />
                <br />
                <br />
                পত্রিকা প্রকাশের সূচনা থেকেই শ্রেণি, বয়স, লিঙ্গ, সম্প্রদায় ও
                মতবিশ্বাস-নির্বিশেষে সবার তথ্য ও মতামতের চাহিদার প্রতি সাপ্তাহিক
                আজকাল এর সজাগ থেকেছে। এর সম্পাদকীয় নীতির কেন্দ্রে রয়েছে উদার ও
                বহুবাচনিক গণতন্ত্র, অসাম্প্রদায়িকতা, মুক্তিযুদ্ধের চেতনার প্রতি
                অবিচল দায়বদ্ধতা। নারী, শিশু, ধর্মীয় সম্প্রদায় বা ক্ষুদ্র
                জাতিসত্তার আত্মমর্যাদা ও অধিকারে সাপ্তাহিক আজকাল এর বিশ্বাসী। এর
                সাংবাদিকতার লক্ষ্য আপামর জনমানুষের সৃষ্টিশীল উদ্যোগের সহযোগিতা
                এবং ভবিষৎমুখী মঙ্গল ও উন্নয়ন। সম্পাদক মতিউর রহমানের নেতৃত্বে
                একদল সৃষ্টিশীল সাংবাদিক সাপ্তাহিক আজকাল এর প্রতিষ্ঠা করেন এবং
                দ্রুত পত্রিকা, ওয়েবসাইটসহ একে দেশের শীর্ষ গণমাধ্যম ও প্রতিষ্ঠান
                হিসেবে গড়ে তোলেন। প্রচারসংখ্যা, প্রভাব ও মর্যাদায় সাপ্তাহিক
                আজকাল এর বাংলাদেশের গণমাধ্যমের বিভিন্ন মাইলফলক অতিক্রম করে
                গিয়েছে।
                <ul>
                  <li>সাপ্তাহিক আজকাল এর যেভাবে তথ্য সংগ্রহ করে</li>
                  <li>
                    নিম্নোক্ত যেকোনো ক্ষেত্রে পাঠক সাপ্তাহিক আজকাল এরকে তথ্য
                    সংগ্রহের সার্বিক সম্মতি প্রদান করেছেন এবং এই গোপনীয়তা নীতির
                    সব শর্ত মেনে নিয়েছেন বলে ধরে নেওয়া হবে:
                  </li>
                  <li>সাইট বা অ্যাপে নিবন্ধন করলে</li>
                  <li>নিউজলেটার সাবস্ক্রাইব করলে</li>
                  <li>জরিপ বা প্রতিযোগিতায় অংশগ্রহণ করলে</li>
                  <li>সাইট বা পেজে লগইন করলে</li>
                </ul>
                <br />
                <br />
                <strong className="policy-text">ম্যাগাজিন</strong> <br />
                তরুণদের মাসিকপত্র কিশোর আলোর প্রকাশনা শুরু হয় ২০১৩ সালে।
                প্রকাশের সঙ্গে সঙ্গেই হয়ে ওঠে দেশের শীর্ষ কিশোর পত্রিকা। এরপর
                ২০১৬ সালে বিজ্ঞানচিন্তার প্রকাশনা শুরু হয়। সারা বছর ৭টি বর্ণিল
                ম্যাগাজিন ছাপা হয়—বর্ণিল বৈশাখ, বর্ণিল ঈদ, বর্ণিল খাবারদাবার,
                বর্ণিল ভালো থাকুন, বর্ণিল বেড়ানো, বর্ণিল বসত এবং বর্ণিল বিয়ে। এ
                ছাড়া ছাপা হচ্ছে বেসরকারি সংস্থার কার্যক্রম নিয়ে ম্যাগাজিন
                উন্নয়নসঙ্গী। আর প্রতিবছর পবিত্র ঈদুল ফিতরের সময় ঈদসংখ্যা
                প্রকাশিত হয়।
                <br />
                <br />
                <strong className="policy-text">উদ্যোগ ও আয়োজন</strong> <br />
                সাপ্তাহিক আজকাল এর বিভিন্ন সামাজিক, সাংস্কৃতিক ও শিক্ষামূলক
                কার্যক্রম পরিচালনা করে থাকে। এসব কার্যক্রমের একটি বড় অংশ তরুণদের
                সৃষ্টিশীল মানস উন্মুখ করে তোলা। কার্যক্রমগুলোর মধ্যে একদিকে আছে
                নানা প্রতিযোগিতা, অন্যদিকে তেমনি আছে সম্মাননা ও পুরস্কার।
                <br />
                <br />
                <strong className="policy-text">
                  তৃতীয় পক্ষের বিজ্ঞাপন ও লিংক
                </strong>{" "}
                <br />
                সাপ্তাহিক আজকাল এর ওয়েবসাইট ও অ্যাপে তৃতীয় পক্ষের পণ্য ও সেবার
                বিজ্ঞাপন প্রদর্শনের অনুমতি দেওয়া হতে পারে। এই তৃতীয় পক্ষের
                ওয়েবসাইটগুলোর গোপনীয়তার নীতি পৃথক হতে পারে। তবে এটি করা বা না
                করার অধিকার সাপ্তাহিক আজকাল এর হাতে থাকবে। বিজ্ঞাপনের
                বিষয়বস্তুতে কোনো ভুল, অসম্পূর্ণতা, সীমাবদ্ধতা থাকলে তার
                দায়দায়িত্ব সাপ্তাহিক আজকাল এর গ্রহণ করবে না। ভিজিটর বা পাঠক পৃথক
                লিংক, অ্যাপ্লিকেশন (অ্যাপ) বা ওয়েবসাইটে প্রবেশ করার কারণে তার
                তথ্য ফাঁস হলে—সাপ্তাহিক আজকাল এর ওয়েবসাইটের লিংক বা কনটেন্টও যদি
                তার মাধ্যম হয়—তার দায়দায়িত্ব সাপ্তাহিক আজকাল এর নেবে না।
                <br />
                <br />
                <strong className="policy-text">কুকির ব্যবহার</strong> <br />
                সাপ্তাহিক আজকাল এর কুকিভিত্তিক ব্যবহারকারীর উপাত্ত সংগ্রহ করে না
                কিংবা ব্যবহারকারীর ব্যক্তিগত তথ্যও সংরক্ষণ করে না। যদি সাপ্তাহিক
                আজকাল এর ওয়েবসাইটে প্রবেশের মাধ্যমে কোনো ব্যবহারকারীর কুকি তৃতীয়
                পক্ষ সংগ্রহ করে, তার নিয়ন্ত্রণ সাপ্তাহিক আজকাল এর হাতে থাকবে না।
                সে জন্য পাঠকদের তৃতীয় পক্ষের ওয়েবসাইট খতিয়ে দেখা উচিত। জনগোষ্ঠী
                ও ক্রয়সংক্রান্ত তথ্য সুনির্দিষ্ট যোগাযোগ ও প্রচারণার জন্য আমরা
                জনগোষ্ঠীসংক্রান্ত এবং অন্যান্য তথ্য ভিন্ন উৎস থেকে সাপ্তাহিক
                আজকাল এর সংগ্রহ করতে পারে। এসব ক্ষেত্রে ব্যবহারকারীদের আচরণ
                অনুসন্ধানে অন্যান্য উৎসের মধ্যে আমরা গুগল অ্যানালিটিকস ব্যবহার
                করে থাকি। তবে পাঠক গুগলের অ্যাডস সেটিং ব্যবহার করে গুগল
                অ্যানালিটিকসের আওতার বাইরে চলে যেতে পারেন কিংবা গুগল ডিসপ্লে
                নেটওয়ার্ক কাস্টমাইজ করে নিতে পারেন।
                <br />
                <br />
                <strong className="policy-text">
                  সাপ্তাহিক আজকাল এর যোগাযোগ
                </strong>{" "}
                <br />
                সময়ে সময়ে সাপ্তাহিক আজকাল এর ব্যবহারকারীদের সঙ্গে ইমেইল, ফোন বা
                এসএমএসের মাধ্যমে যোগাযোগ করতে পারে। মূলত, বিভিন্ন অনুষ্ঠানে
                যোগদানের আমন্ত্রণ, তথ্য সংগ্রহ এবং জরিপের জন্য সাপ্তাহিক আজকাল
                এর এ যোগাযোগ করবে। ব্যবহারকারীদের কাছ থেকে সংগৃহীত তথ্যের
                ভিত্তিতেই তা করা হবে।
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
