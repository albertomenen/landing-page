"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import "../styles/index.css";
import "../styles/prism-vsc-dark-plus.css";
import ToasterContext from "./api/contex/ToasetContex";
import { useEffect, useState } from "react";
import PreLoader from "@/components/Common/PreLoader";
import CustomHead from "./CustomHead";
import { usePathname } from "next/navigation"; // Importa usePathname
import ReactGA from "react-ga";
import { GoogleTagManager } from '@next/third-parties/google'
import Script from "next/script";


const TRACKING_ID = "G-8WS8N8BTQS";
ReactGA.initialize(TRACKING_ID);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState<boolean>(true);
  const pathname = usePathname(); // Utiliza usePathname para obtener la ruta actual

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleRouteChange = (url: string) => {
        ReactGA.pageview(url);
      };

      // Register pageview for initial load
      ReactGA.pageview(window.location.pathname);

      // Listen for route changes
      handleRouteChange(pathname);

      // Cleanup function not needed as usePathname handles changes automatically
    }
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <html suppressHydrationWarning={true} className="!scroll-smooth" lang="en">
      <CustomHead />
      <head>
      <Script 
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-8WS8N8BTQS"
      ></Script>
      <Script id="google-analytics">
      {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
  
          gtag('config', 'G-8WS8N8BTQS');
          `}

        
      </Script>

      </head>


      <script async src="https://tally.so/widgets/embed.js"></script>
      <body>
        {loading ? (
          <PreLoader />
        ) : (
          <SessionProvider>
            <ThemeProvider
              attribute="class"
              enableSystem={false}
              defaultTheme="light"
            >
              <ToasterContext />
              <Header />
              {children}
              <Footer />
              <ScrollToTop />
            </ThemeProvider>
          </SessionProvider>
        )}
      </body>
    </html>
  );
}
