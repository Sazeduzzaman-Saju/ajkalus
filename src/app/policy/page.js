import React from "react";

export const metadata = {
  title: "Policy || সাপ্তাহিক আজকাল - Weekly Ajkal",

  openGraph: {
    type: "website",
    url: "https://www.ajkal.us/policy",
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
  canonicalUrl: "https://www.ajkal.us/policy",
};

const page = () => {
  return (
    <div>
      <div className="container">
        <div className="row my-5">
          <div className="col-lg-6 policy-text">
            <div style={{ borderBottom: "2px solid var(--secondary)" }}>
              <h1 className="fw-bold secondary-color policy-text">
                Privacy Policy
              </h1>
            </div>
            {/* Content In English */}
            <div
              className="pt-3 policy-text"
              style={{
                textAlign: "justify",
                fontFamily: '"Jost", sans-serif !important',
              }}
            >
              <div className="text-muted">
                This Privacy Policy describes Our policies and procedures on the
                collection, use and disclosure of Your information when You use
                the Service and tells You about Your privacy rights and how the
                law protects You. We use Your Personal data to provide and
                improve the Service. By using the Service, You agree to the
                collection and use of information in accordance with this
                Privacy Policy.
              </div>
              <ul>
                <li>Interpretation and Definitions</li>
                <li>Interpretation</li>
                <li>
                  The words of which the initial letter is capitalized have
                  meanings defined under the following conditions. The following
                  definitions shall have the same meaning regardless of whether
                  they appear in singular or in plural.
                </li>
              </ul>
              <h4 className="main_color policy-text">Definitions</h4>
              <div className="fw-bold policy-text">
                For the purposes of this Privacy Policy:
              </div>
              <div className="text-muted">
                Account means a unique account created for You to access our
                Service or parts of our Service. Company (referred to as either
                the Company , {"We"}, {"Us"} or {"Our"} in this Agreement)
                refers to Daily Weekly Ajkal, 71-16 35th Ave, Jackson Heights,NY
                11372, USA. Cookies are small files that are placed on Your
                computer, mobile device or any other device by a website,
                containing the details of Your browsing history on that website
                among its many uses. Country refers to: USA & Bangladesh
              </div>
              <div className="text-muted">
                Device means any device that can access the Service such as a
                computer, a cellphone or a digital tablet. Personal Data is any
                information that relates to an identified or identifiable
                individual. Service refers to the Website.
              </div>
              <div className="text-muted">
                Service Provider means any natural or legal person who processes
                the data on behalf of the Company. It refers to third-party
                companies or individuals employed by the Company to facilitate
                the Service, to provide the Service on behalf of the Company, to
                perform services related to the Service or to assist the Company
                in analyzing how the Service is used. Third-party Social Media
                Service refers to any website or any social network website
                through which a User can log in or create an account to use the
                Service. Usage Data refers to data collected automatically,
                either generated by the use of the Service or from the Service
                infrastructure itself (for example, the duration of a page
                visit). Website refers to Daily Weekly Ajkal, accessible from
                https://ajkalusa.com/
              </div>
              <strong>
                You means the individual accessing or using the Service, or the
                company, or other legal entity on behalf of which such
                individual is accessing or using the Service, as applicable.
              </strong>
              <br />
              <br />
              <h4 className="main_color policy-text">
                Collecting and Using Your Personal Data Types of
              </h4>
              <h4 className="main_color policy-text">Data Collected</h4>
              <div className="text-muted">
                While using Our Service, We may ask You to provide Us with
                certain personally identifiable information that can be used to
                contact or identify You. Personally identifiable information may
                include, but is not limited to:
              </div>
              <h4 className="pt-2">Usage Data</h4>
              <strong>
                Usage Data is collected automatically when using the Service.
              </strong>
              <div className="text-muted">
                Usage Data may include information such as Your {"Device's"}
                Internet Protocol address (e.g. IP address), browser type,
                browser version, the pages of our Service that You visit, the
                time and date of Your visit, the time spent on those pages,
                unique device identifiers and other diagnostic data.
              </div>
              <div className="text-muted">
                When You access the Service by or through a mobile device, We
                may collect certain information automatically, including, but
                not limited to, the type of mobile device You use, Your mobile
                device unique ID, the IP address of Your mobile device, Your
                mobile operating system, the type of mobile Internet browser You
                use, unique device identifiers and other diagnostic data.
              </div>
              <div className="text-muted">
                We may also collect information that Your browser sends whenever
                You visit our Service or when You access the Service by or
                through a mobile device.
              </div>
              <h4 className="main_color policy-text">
                Information from Third-Party Social Media Services
              </h4>
              <strong>
                The Company allows You to create an account and log in to use
                the Service through the following Third-party Social Media
                Services:
              </strong>
              <ul className="pt-2">
                <li>Google</li>
                <li>Facebook</li>
                <li>Twitter</li>
              </ul>
              <div className="text-muted">
                If You decide to register through or otherwise grant us access
                to a Third-Party Social Media Service, We may collect Personal
                data that is already associated with Your Third-Party Social
                Media {"Service's"} account, such as Your name, Your email
                address, Your activities or Your contact list associated with
                that account.
              </div>
              <div className="text-muted">
                You may also have the option of sharing additional information
                with the Company through Your Third-Party Social Media{" "}
                {"Service's"}
                account. If You choose to provide such information and Personal
                Data, during registration or otherwise, You are giving the
                Company permission to use, share, and store it in a manner
                consistent with this Privacy Policy.
              </div>
              <h4 className="main_color policy-text">
                Tracking Technologies and Cookies
              </h4>
              <div className="text-muted">
                We use Cookies and similar tracking technologies to track the
                activity on Our Service and store certain information. Tracking
                technologies used are beacons, tags, and scripts to collect and
                track information and to improve and analyze Our Service.
              </div>
              <h4 className="main_color policy-text">
                The technologies We use may include:
              </h4>
              <div className="text-muted">
                Cookies or Browser Cookies.A cookie is a small file placed on
                Your Device. You can instruct Your browser to refuse all Cookies
                or to indicate when a Cookie is being sent. However, if You do
                not accept Cookies, You may not be able to use some parts of our
                Service. Unless you have adjusted Your browser setting so that
                it will refuse Cookies, our Service may use Cookies. Flash
                Cookies.Certain features of our Service may use local stored
                objects (or Flash Cookies) to collect and store information
                about Your preferences or Your activity on our Service. Flash
                Cookies are not managed by the same browser settings as those
                used for Browser Cookies. For more information on how You can
                delete Flash Cookies, please read Where can I change the
                settings for disabling, or deleting local shared objects?
                available at Web Beacons.as clear gifs, pixel tags, and
                single-pixel gifs) that permit the Company, for example, to
                count users who have visited those pages or opened an email and
                for other related website statistics (for example, recording the
                popularity of a certain section and verifying system and server
                integrity). Cookies can be {"Persistent"} or {"Session"}{" "}
                Cookies. Persistent Cookies remain on Your personal computer or
                mobile device when You go offline, while Session Cookies are
                deleted as soon as You close Your web browser. Learn more about
                cookies: Cookies: What Do They Do?.
              </div>
              <h4 className="main_color policy-text">
                We use both Session and Persistent Cookies for the purposes set
                out below:
              </h4>
              <strong>Necessary / Essential Cookies</strong>
              <strong>Type: Session Cookies</strong>
              <h4 className="pt-3">Administered by: Us</h4>
              <div className="text-muted">
                <strong>Purpose:</strong> These Cookies are essential to provide
                You with services available through the Website and to enable
                You to use some of its features. They help to authenticate users
                and prevent fraudulent use of user accounts. Without these
                Cookies, the services that You have asked for cannot be
                provided, and We only use these Cookies to provide You with
                those services.
              </div>
              <strong>
                Cookies Policy / Notice Acceptance Cookies <br />
                Type: Persistent Cookies
              </strong>
              <strong>Cookies Policy / Notice Acceptance Cookies</strong>
              <strong>Type: Persistent Cookies</strong>
              Type: Persistent Cookies
              <div className="text-muted">
                <strong>Purpose:</strong> These Cookies identify if users have
                accepted the use of cookies on the Website.
              </div>
              <strong>
                Functionality Cookies
                <br />
                Type: Persistent Cookies
              </strong>
              <h4 className="pt-3">Administered by: Us</h4>
              <div className="text-muted">
                <strong>Purpose:</strong> These Cookies allow us to remember
                choices You make when You use the Website, such as remembering
                your login details or language preference. The purpose of these
                Cookies is to provide You with a more personal experience and to
                avoid You having to re-enter your preferences every time You use
                the Website.
              </div>
              <div className="text-muted">
                For more information about the cookies we use and your choices
                regarding cookies, please visit our Cookies Policy or the
                Cookies section of our Privacy Policy.
              </div>
              <h4 className="main_color policy-text">
                Use of Your Personal Data
              </h4>
              <strong>
                The Company may use Personal Data for the following purposes:
              </strong>
              <div className="text-muted">
                To provide and maintain our Service,including to monitor the
                usage of our Service. To manage Your Account: to manage Your
                registration as a user of the Service. The Personal Data You
                provide can give You access to different functionalities of the
                Service that are available to You as a registered user. For the
                performance of a contract: the development, compliance and
                undertaking of the purchase contract for the products, items or
                services You have purchased or of any other contract with Us
                through the Service. To contact You: To contact You by email,
                telephone calls, SMS, or other equivalent forms of electronic
                communication, such as a mobile {"application's"} push
                notifications regarding updates or informative communications
                related to the functionalities, products or contracted services,
                including the security updates, when necessary or reasonable for
                their implementation. To provide You with news, special offers
                and general information about other goods, services and events
                which we offer that are similar to those that you have already
                purchased or enquired about unless You have opted not to receive
                such information.
              </div>
              <div className="text-muted">
                To manage Your requests: To attend and manage Your requests to
                Us. For business transfers: We may use Your information to
                evaluate or conduct a merger, divestiture, restructuring,
                reorganization, dissolution, or other sale or transfer of some
                or all of Our assets, whether as a going concern or as part of
                bankruptcy, liquidation, or similar proceeding, in which
                Personal Data held by Us about our Service users is among the
                assets transferred. For other purposes: We may use Your
                information for other purposes, such as data analysis,
                identifying usage trends, determining the effectiveness of our
                promotional campaigns and to evaluate and improve our Service,
                products, services, marketing and your experience.
              </div>
              <strong>
                We may share Your personal information in the following
                situations:
              </strong>
              <div className="pt-2">
                With Service Providers: We may share Your personal information
                with Service Providers to monitor and analyze the use of our
                Service, to contact You. For business transfers: We may share or
                transfer Your personal information in connection with, or during
                negotiations of, any merger, sale of Company assets, financing,
                or acquisition of all or a portion of Our business to another
                company.
              </div>
              <div className="text-muted">
                With Affiliates: We may share Your information with Our
                affiliates, in which case we will require those affiliates to
                honor this Privacy Policy. Affiliates include Our parent company
                and any other subsidiaries, joint venture partners or other
                companies that We control or that are under common control with
                Us. With business partners: We may share Your information with
                Our business partners to offer You certain products, services or
                promotions. With other users: when You share personal
                information or otherwise interact in the public areas with other
                users, such information may be viewed by all users and may be
                publicly distributed outside. If You interact with other users
                or register through a Third-Party Social Media Service, Your
                contacts on the Third-Party Social Media Service may see Your
                name, profile, pictures and description of Your activity.
                Similarly, other users will be able to view descriptions of Your
                activity, communicate with You and view Your profile. With Your
                consent: We may disclose Your personal information for any other
                purpose with Your consent.
              </div>
              <h4 className="main_color policy-text">
                Retention of Your Personal Data
              </h4>
              <div className="text-muted">
                The Company will retain Your Personal Data only for as long as
                is necessary for the purposes set out in this Privacy Policy. We
                will retain and use Your Personal Data to the extent necessary
                to comply with our legal obligations (for example, if we are
                required to retain your data to comply with applicable laws),
                resolve disputes, and enforce our legal agreements and policies.
              </div>
              <div className="text-muted">
                The Company will also retain Usage Data for internal analysis
                purposes. Usage Data is generally retained for a shorter period
                of time, except when this data is used to strengthen the
                security or to improve the functionality of Our Service, or We
                are legally obligated to retain this data for longer time
                periods.
              </div>
              <h4 className="main_color policy-text">
                Transfer of Your Personal Data
              </h4>
              <div className="text-muted">
                Your information, including Personal Data, is processed at the
                {"Company's"} operating offices and in any other places where
                the parties involved in the processing are located. It means
                that this information may be transferred to — and maintained on
                — computers located outside of Your state, province, country or
                other governmental jurisdiction where the data protection laws
                may differ than those from Your jurisdiction.
              </div>
              <strong>
                Your consent to this Privacy Policy followed by Your submission
                of such information represents Your agreement to that transfer.
              </strong>
              <div className="text-muted">
                The Company will take all steps reasonably necessary to ensure
                that Your data is treated securely and in accordance with this
                Privacy Policy and no transfer of Your Personal Data will take
                place to an organization or a country unless there are adequate
                controls in place including the security of Your data and other
                personal information.
              </div>
              <strong>Disclosure of Your Personal Data</strong>
              <strong>Business Transactions</strong>
              <div className="text-muted">
                If the Company is involved in a merger, acquisition or asset
                sale, Your Personal Data may be transferred. We will provide
                notice before Your Personal Data is transferred and becomes
                subject to a different Privacy Policy.
              </div>
              <h4 className="main_color policy-text">Law enforcement</h4>
              <div className="text-muted">
                Under certain circumstances, the Company may be required to
                disclose Your Personal Data if required to do so by law or in
                response to valid requests by public authorities (e.g. a court
                or a government agency).
              </div>
              <h4 className="main_color policy-text">
                Other legal requirements
              </h4>
              <ul>
                <li>Comply with a legal obligation</li>
                <li>
                  Protect and defend the rights or property of the Company
                </li>
                <li>
                  Prevent or investigate possible wrongdoing in connection with
                  the Service
                </li>
                <li>
                  Protect the personal safety of Users of the Service or the
                  public
                </li>
                <li>Protect against legal liability</li>
              </ul>
              <h4 className="main_color policy-text"> {"Children's"}Privacy</h4>
              <div className="text-muted">
                Our Service does not address anyone under the age of 13. We do
                not knowingly collect personally identifiable information from
                anyone under the age of 13. If You are a parent or guardian and
                You are aware that Your child has provided Us with Personal
                Data, please contact Us. If We become aware that We have
                collected Personal Data from anyone under the age of 13 without
                verification of parental consent, We take steps to remove that
                information from Our servers.
              </div>
              <div className="text-muted">
                If We need to rely on consent as a legal basis for processing
                Your information and Your country requires consent from a
                parent, We may require Your {"parent's"} consent before We
                collect and use that information.
              </div>
              <h4 className="main_color policy-text">
                Links to Other Websites
              </h4>
              <div className="text-muted">
                Our Service may contain links to other websites that are not
                operated by Us. If You click on a third party link, You will be
                directed to that third {"party's"} site. We strongly advise You
                to review the Privacy Policy of every site You visit. We have no
                control over and assume no responsibility for the content,
                privacy policies or practices of any third party sites or
                services.
              </div>
              <h4 className="main_color policy-text">
                Changes to this Privacy Policy
              </h4>
              <div className="text-muted">
                We may update Our Privacy Policy from time to time. We will
                notify You of any changes by posting the new Privacy Policy on
                this page. We will let You know via email and/or a prominent
                notice on Our Service, prior to the change becoming effective
                and update the {"Last updated"} date at the top of this Privacy
                Policy. You are advised to review this Privacy Policy
                periodically for any changes. Changes to this Privacy Policy are
                effective when they are posted on this page.
              </div>
              <h4 className="main_color policy-text">Contact Us</h4>
              <strong>
                If you have any questions about this Privacy Policy, You can
                contact us:
              </strong>
              <ul>
                <li>By email: support@ajkalusa.com</li>
                <li>By phone number: +1646 267-7751</li>
                <li>
                  By mail: Weekly Ajkal, 71-16 35th Ave, Jackson Heights,NY
                  11372, USA.
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div style={{ borderBottom: "2px solid var(--secondary)" }}>
              <h1 className="text-muted fw-bold secondary-color">
                গোপনীয়তার নীতি
              </h1>
            </div>
            {/* Content Start In Bangla */}
            <div className="pt-3">
              <div className="text-muted">
                সাপ্তাহিক আজকাল ওয়েবসাইট বা অ্যাপ্লিকেশন (অ্যাপ) ব্যবহার করার
                সময় পাঠক, ভিজিটর অথবা ব্যবহারকারীর তথ্য সুরক্ষিত রাখতে আমরা
                অঙ্গীকারবদ্ধ। নিম্নোক্ত মাধ্যম থেকে সেবা গ্রহণের সময় তাঁদের যেসব
                ব্যক্তিগত তথ্য সংগৃহীত হয়, এই গোপনীয়তার নীতি সেসবের ওপর প্রযোজ্য
                হবে:
                <br />
                <br />
                <strong>
                  গোপনীয়তা নীতিসংবলিত সাপ্তাহিক আজকাল যেকোনো ওয়েবসাইট
                </strong>{" "}
                <br />
                সামাজিক যোগাযোগমাধ্যম বা অন্য যেকোনো ওয়েবসাইটে সাপ্তাহিক আজকাল
                কনটেন্ট মোবাইল ও ওয়েব অ্যাপ্লিকেশন (অ্যাপ)। সাপ্তাহিক আজকাল তৈরি
                অ্যাপ্লিকেশন (অ্যাপ), ওয়েবসাইট বা কনটেন্টের ক্ষেত্রেই শুধু এই
                গোপনীয়তা নীতি প্রযোজ্য হবে। কোনো নকল ওয়েবসাইট, পেজ বা গ্রুপে
                প্রচারিত বা সাপ্তাহিক আজকাল লোগো-সংবলিত ভুয়া কনটেন্টের ক্ষেত্রে
                এই গোপনীয়তা নীতি প্রযোজ্য হবে না। সাপ্তাহিক আজকাল নানা উদ্দেশ্যে
                পাঠকদের তথ্য সংগ্রহ করে থাকে। উদাহরণ হিসেবে বলা যায়, পাঠকদের
                সেবা দেওয়া বা সেবার মান উন্নত করা এবং বিপণন ও প্রচারণার
                উদ্দেশ্যে এসব তথ্য সংগৃহীত হয়। এসব তথ্যের মধ্যে আছে গ্রাহকের
                নাম, ঠিকানা, ফোন নম্বর, ইমেইল ঠিকানা, বয়স, সামাজিক মাধ্যমের
                হিসাব ইত্যাদি (ইনফরমেশন বা তথ্য)। সাপ্তাহিক আজকাল অন্যান্য সেবার
                ক্ষেত্রে আলাদা গোপনীয়তার নীতি প্রযোজ্য হতে পারে। সে জন্য পাঠকদের
                প্রতি অনুরোধ, ওই সব সেবার জন্য নিবন্ধন করার সময় তাঁরা যেন
                সে-সংক্রান্ত নীতিমালা পড়ে নেন। সাপ্তাহিক আজকাল পাঠকের ব্যক্তিগত
                গোপনীয়তার প্রতি শ্রদ্ধাশীল। আর তথ্য যে উদ্দেশ্যে সংগৃহীত হয়, তা
                যেন সেই উদ্দেশ্যই ব্যবহৃত হয়, তা নিশ্চিত করার সর্বোচ্চ চেষ্টা
                সাপ্তাহিক আজকাল করে। বিশেষ সতর্কতা সাপ্তাহিক আজকাল নামে দেশে
                একাধিক নকল ওয়েবসাইট আছে, যেগুলোর মধ্যে বিভিন্ন ভুয়া ফেসবুক পেজ
                এবং গ্রুপ অন্তর্ভুক্ত। ওই সব ভুয়া ওয়েবসাইট, পেজ বা গ্রুপে
                প্রচারিত কনটেন্টের দায় সাপ্তহিক আজকালের নয়।
                <ul>
                  <li>সাপ্তাহিক আজকাল যেভাবে তথ্য সংগ্রহ করে</li>
                  <li>
                    নিম্নোক্ত যেকোনো ক্ষেত্রে পাঠক সাপ্তাহিক আজকালকে তথ্য
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
                <strong>সংগৃহীত তথ্য প্রকাশ</strong> <br />
                ওয়েবসাইট পরিচালনা, ব্যবসা পরিচালনা ও গ্রাহকদের সেবা দেওয়ার
                প্রয়োজন ছাড়া পাঠকের ব্যক্তিগত তথ্যাবলি সাপ্তাহিক আজকাল কারও কাছে
                বিক্রি অথবা আদান-প্রদান করে না। তবে পাঠকদের পছন্দ-অপছন্দ বুঝতে
                বা তাঁদের আরও ভালোভাবে সম্পৃক্ত করতে কিংবা গ্রাহকসংখ্যা বাড়াতে
                অভ্যন্তরীণভাবে পাঠকদের তথ্য পরস্পর আদান-প্রদান করা হতে পারে।
                উল্লিখিত কারণের বাইরে অন্য কোনোভাবে পাঠকের তথ্য ব্যবহার করার
                প্রয়োজন হলে তার জন্য সাপ্তাহিক আজকাল ওয়েবসাইট অথবা অ্যাপ থেকে
                অনুমতি নেওয়া হবে। তবে বাংলাদেশের কোনো আইনি বাধ্যবাধকতা থাকলে তা
                মানার জন্য সাপ্তাহিক আজকাল পাঠকের কাছ থেকে সংগৃহীত ব্যক্তিগত
                তথ্য প্রকাশ বা সরবরাহ করতে পারে। এই গোপনীয়তার নীতিমালার বাইরে
                সাপ্তাহিক আজকাল তার সেবাদাতা বিভিন্ন প্রতিষ্ঠান, অধিভুক্ত
                কোম্পানি, পরামর্শক বা অংশীদারদের কাছে কিংবা যারা সাপ্তাহিক আজকাল
                পক্ষ থেকে ব্যবসাসংক্রান্ত কাজ করে থাকে, তাদের কাছে পাঠকের তথ্য
                সরবরাহ করতে পারে; আবার আইনি প্রক্রিয়া বা অন্য কোনো ফোরামে নিজ
                স্বার্থ সংরক্ষণে এসব তথ্য আদান-প্রদান করা হতে পারে। অবৈধ
                কর্মকাণ্ড বন্ধ করতে বা তেমন কোনো কাজের তদন্তে এসব তথ্য ব্যবহৃত
                হতে পারে। আমাদের বা কোনো ব্যক্তির প্রতি হুমকি এলে সে রকম
                পরিস্থিতিতেও এসব তথ্য ব্যবহৃত হতে পারে। সাপ্তাহিক আজকাল নীতি বা
                ব্যবহারের শর্তাবলি লঙ্ঘনের ক্ষেত্রেও তা ব্যবহার করা হতে পারে।
                আমাদের সেবার শর্তাবলি মান্য করানোর লক্ষ্যেও এসব তথ্য ব্যবহার করা
                হতে পারে। এ ছাড়া গ্রাহকদের বিভিন্ন সেবা ও পণ্যের প্রস্তাব দেওয়ার
                লক্ষ্যেও এটি ব্যবহার করা হতে পারে। উল্লিখিত বা অন্য কোনো
                ক্ষেত্রে গ্রাহকের ব্যক্তিগত তথ্য প্রকাশ বা বণ্টন করা হলে
                সাপ্তাহিক আজকাল সর্বোচ্চ চেষ্টা থাকবে, যাতে এসব তথ্য কেবল ঘোষিত
                লক্ষ্যেই ব্যবহার করা হয়।
                <br />
                <br />
                <strong>তথ্য সংরক্ষণ</strong> <br />
                পাঠক বা ভিজিটর সাপ্তাহিক আজকালতে অ্যাকাউন্ট খুললে তাঁদের তথ্য
                সংরক্ষণ করা হবে। এ ছাড়া নিজস্ব তথ্য সংরক্ষণ নীতির আলোকে
                সাপ্তাহিক আজকাল আরও কিছুদিন তথ্য সংরক্ষণ করতে পারে। অ্যাকাউন্টের
                মেয়াদ শেষ হলে পাঠকের ব্যক্তিগত তথ্যাবলি মুছে ফেলা হবে। কোনো
                কারণে এসব তথ্য মুছে ফেলতে সাধারণ সময়ের চেয়ে বেশি সময় লাগতে পারে।
                সে ক্ষেত্রে সাপ্তাহিক আজকাল দায় থাকবে না।
                <br />
                <br />
                <strong>তৃতীয় পক্ষের বিজ্ঞাপন ও লিংক</strong> <br />
                সাপ্তাহিক আজকাল ওয়েবসাইট ও অ্যাপে তৃতীয় পক্ষের পণ্য ও সেবার
                বিজ্ঞাপন প্রদর্শনের অনুমতি দেওয়া হতে পারে। এই তৃতীয় পক্ষের
                ওয়েবসাইটগুলোর গোপনীয়তার নীতি পৃথক হতে পারে। তবে এটি করা বা না
                করার অধিকার সাপ্তাহিক আজকাল হাতে থাকবে। বিজ্ঞাপনের বিষয়বস্তুতে
                কোনো ভুল, অসম্পূর্ণতা, সীমাবদ্ধতা থাকলে তার দায়দায়িত্ব সাপ্তাহিক
                আজকাল গ্রহণ করবে না। ভিজিটর বা পাঠক পৃথক লিংক, অ্যাপ্লিকেশন
                (অ্যাপ) বা ওয়েবসাইটে প্রবেশ করার কারণে তার তথ্য ফাঁস
                হলে—সাপ্তাহিক আজকাল ওয়েবসাইটের লিংক বা কনটেন্টও যদি তার মাধ্যম
                হয়—তার দায়দায়িত্ব সাপ্তাহিক আজকাল নেবে না।
                <br />
                <br />
                <strong>কুকির ব্যবহার</strong> <br />
                সাপ্তাহিক আজকাল কুকিভিত্তিক ব্যবহারকারীর উপাত্ত সংগ্রহ করে না
                কিংবা ব্যবহারকারীর ব্যক্তিগত তথ্যও সংরক্ষণ করে না। যদি সাপ্তাহিক
                আজকাল ওয়েবসাইটে প্রবেশের মাধ্যমে কোনো ব্যবহারকারীর কুকি তৃতীয়
                পক্ষ সংগ্রহ করে, তার নিয়ন্ত্রণ সাপ্তাহিক আজকাল হাতে থাকবে না। সে
                জন্য পাঠকদের তৃতীয় পক্ষের ওয়েবসাইট খতিয়ে দেখা উচিত। জনগোষ্ঠী ও
                ক্রয়সংক্রান্ত তথ্য সুনির্দিষ্ট যোগাযোগ ও প্রচারণার জন্য আমরা
                জনগোষ্ঠীসংক্রান্ত এবং অন্যান্য তথ্য ভিন্ন উৎস থেকে সাপ্তাহিক
                আজকাল সংগ্রহ করতে পারে। এসব ক্ষেত্রে ব্যবহারকারীদের আচরণ
                অনুসন্ধানে অন্যান্য উৎসের মধ্যে আমরা গুগল অ্যানালিটিকস ব্যবহার
                করে থাকি। তবে পাঠক গুগলের অ্যাডস সেটিং ব্যবহার করে গুগল
                অ্যানালিটিকসের আওতার বাইরে চলে যেতে পারেন কিংবা গুগল ডিসপ্লে
                নেটওয়ার্ক কাস্টমাইজ করে নিতে পারেন।
                <br />
                <br />
                <strong>সাপ্তাহিক আজকাল যোগাযোগ</strong> <br />
                সময়ে সময়ে সাপ্তাহিক আজকাল ব্যবহারকারীদের সঙ্গে ইমেইল, ফোন বা
                এসএমএসের মাধ্যমে যোগাযোগ করতে পারে। মূলত, বিভিন্ন অনুষ্ঠানে
                যোগদানের আমন্ত্রণ, তথ্য সংগ্রহ এবং জরিপের জন্য সাপ্তাহিক আজকাল এ
                যোগাযোগ করবে। ব্যবহারকারীদের কাছ থেকে সংগৃহীত তথ্যের ভিত্তিতেই
                তা করা হবে।
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
