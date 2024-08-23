
import "./globals.css";
import { Poppins } from 'next/font/google';
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
const poppins = Poppins({
  weight: ['400','500', '700'], 
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: "Knights Templar - Unveiling the Legacy",
  description: "Delve into the enigmatic world of the Knights Templar. Explore their rich history, uncover hidden legends, and discover the enduring impact of these medieval warriors on modern society.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en"  className={poppins.className}>
      <body >
        <Navbar/>
        {children}
        <Footer/>
        
        </body>
    </html>
  );
}
