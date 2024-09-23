
export const metadata = {
  title: "My Awesome Website",
  description: "This is an awesome website built with Next.js",
  keywords: "nextjs, seo, web development",
  openGraph: {
    title: "My Awesome Website",
    description: "This is an awesome website built with Next.js",
    url: "https://www.myawesomewebsite.com",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 800,
        height: 600,
        alt: "Open Graph Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "My Awesome Website",
    description: "This is an awesome website built with Next.js",
    images: ["/images/og-image.jpg"],
  },
};

export default function Layout({ children }) {
  return (<>{ children }</>);
}
