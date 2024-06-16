import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core";
import Footer from "@/components/Footer";
config.autoAddCss = false;

const poppins = Poppins({
  subsets: ["latin"],
  display: 'swap',
  weight: '400',
});


export const metadata = {
  title: "Manish Demon",
  description: "Manish Demon | Tattoo Artist",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        <div className="bg-neutral-950">
          {children}
        </div>
        <Footer/>
      </body>
    </html>
  );
}
