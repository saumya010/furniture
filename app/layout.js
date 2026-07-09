import { Inter, Playfair_Display } from "next/font/google";
import Script from 'next/script'
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

export const metadata = {
  title: "Home Comforts",
  description: "Elevate your living",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfairDisplay.variable} antialiased`}
      >
        {children}
      </body>
      <Script src="https://kit.fontawesome.com/e8eb8b6e24.js" crossorigin="anonymous" />
    </html>
  );
}
