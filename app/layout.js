import localFont from "next/font/local";
import "./globals.css";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Ruman Tech",
  description: "A Tech Blog Site created by Ruman Asif",
  icons:'./icons/logo.png',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
       

      <Navbar />
     
      <main>{children}</main>
      <Footer />
      <script src="./node_modules/preline/dist/preline.js"></script>
      </body>
    </html>
  );
}
