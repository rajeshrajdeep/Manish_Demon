import { Poppins } from "next/font/google";
import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}
