"use client"; // Mark this component as a Client Component

import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos"; // Import AOS library
import "aos/dist/aos.css"; // Import AOS CSS
import { useEffect } from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { useRouter } from "next/navigation"; // Updated import for useRouter
import "./globals.css";

export default function RootLayout({ children }) {
  useEffect(() => {
    AOS.init({
      duration: 1200, // AOS animation duration
      once: true, // Ensures animation happens only once
    });
  }, []); // Empty dependency array ensures this runs only once after initial render

  // function ScrollToTop() {
  //   const { asPath } = useRouter();

  //   useEffect(() => {
  //     window.scrollTo(0, 0);
  //   }, [asPath]);

  //   return null;
  // }

  return (
    <html lang="bn">
      <body>
        <Header /> {/* Header at the top */}
        {/* <ScrollToTop /> */}
        <main className="">
          {children} {/* Dynamic content in the middle */}
        </main>
        <Footer /> {/* Footer at the bottom */}
      </body>
    </html>
  );
}
