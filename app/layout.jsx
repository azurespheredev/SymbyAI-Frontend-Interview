import "@/styles/core.scss";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import dynamic from "next/dynamic";

const MatrixRain = dynamic(() => import("@/components/MatrixRain/MatrixRain"), {
  ssr: false,
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Nexus Framework - A Dual-Cognition System</title>
        <meta
          name="description"
          content="Nexus is a dual-cognition framework for self-evolving digital entities."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin="anonymous"
        />
      </head>

      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <MatrixRain />
      </body>
    </html>
  );
}
