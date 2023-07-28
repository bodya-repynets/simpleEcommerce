import { Providers } from "@/redux/provider";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ecommerce",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="min-h-screen text-text-color">
            <Navbar />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
