import "./globals.css";
import { ViewTransitions } from "next-view-transitions";

import { GoogleAnalytics } from '@next/third-parties/google'

import Nav from "./components/nav";
import Footer from "./components/footer";

export const metadata = {
  title: "Devansh Ohri",
  description: "A designer based in Finland obsessed with clarity, function, and finesse.",
};

export default function RootLayout({ children }) {
  return (
    <ViewTransitions>
    <html lang="en">
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-SD4DZBV7VW" />
    </html>
    </ViewTransitions>
  );
}
