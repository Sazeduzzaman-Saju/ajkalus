import "bootstrap/dist/css/bootstrap.min.css";
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import "./globals.css";
// import ScrollToTopButton from "@/utility/ScrollToTopButton/ScrollToTopButton";

export default function RootLayout({ children }) {
  return (
    <html lang="bn">
      <body>
        <Header />
        <main>{children}</main>
        {/* <ScrollToTopButton /> */}
        <Footer />
      </body>
    </html>
  );
}
