import Head from "next/head";

export const metadata = {
  title: "ই পেপার আজকাল :: Weekly Ajkal",
  description:
    "বাংলাদেশ ও বিশ্বসংবাদ সম্পর্কে সর্বশেষ আপডেট জানুন। এখানে পাবেন খেলাধুলা, রাজনীতি, চাকরি, বিনোদন, স্বাস্থ্য, লাইফস্টাইল এবং আরও অনেক কিছু।",
  keywords:
    "আজকাল, খবর, আপডেট, বাংলাদেশ, বিশ্বসংবাদ, খেলাধুলা, রাজনীতি, বিনোদন, স্বাস্থ্য, লাইফস্টাইল",
  openGraph: {
    type: "website",
    url: "https://www.ajkal.us/contact",
    title: "ই পেপার আজকাল :: Weekly Ajkal",
    description:
      "বাংলাদেশ ও বিশ্বসংবাদ সম্পর্কে সর্বশেষ আপডেট জানুন। এখানে পাবেন খেলাধুলা, রাজনীতি, চাকরি, বিনোদন, স্বাস্থ্য, লাইফস্টাইল এবং আরও অনেক কিছু।",
    images: [
      {
        url: "https://ajkal.us/img/settings/placeholder.jpg",
        width: 1200,
        height: 630,
        alt: "ই পেপার আজকাল এর চিত্র",
      },
    ],
    site_name: "আজকাল",
  },
  twitter: {
    card: "summary_large_image",
    title: "ই পেপার আজকাল :: Weekly Ajkal",
    description:
      "বাংলাদেশ ও বিশ্বসংবাদ সম্পর্কে সর্বশেষ আপডেট জানুন। এখানে পাবেন খেলাধুলা, রাজনীতি, চাকরি, বিনোদন, স্বাস্থ্য, লাইফস্টাইল এবং আরও অনেক কিছু।",
    images: ["https://ajkal.us/img/settings/placeholder.jpg"],
  },
  canonicalUrl: "https://www.ajkal.us/contact", // Ensure this is the correct URL
};

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://www.ajkal.us/contact" />
        <meta name="robots" content="index, follow" />
      </Head>
      {children}
    </>
  );
}
