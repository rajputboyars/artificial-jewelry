// import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar1 from "@/components/navbar/Navbar1";
import ReduxProvider from "./providers/ReduxProvider";

export const metadata = {
  title: "ARS Store",
  description: "Discover a wide range of premium combo and gift packs at A R Store. Perfect for every occasion, our curated collections offer unbeatable value and elegance, designed to meet your every need.",
};


export default function RootLayout({ children }) {
  return (
    <ReduxProvider>
      <html lang="en">
        <body
          className="bg-lightBackground text-textPrimary"
        >
          <Navbar1 />
          {children}
          <Footer />
        </body>
      </html>
    </ReduxProvider>
  );
}
