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
import { usePathname } from "next/navigation"; // Importa usePathname
import Script from "next/script";

const TRACKING_ID = "G-8WS8N8BTQS";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState<boolean>(true);
  const pathname = usePathname(); // Utiliza usePathname para obtener la ruta actual

  useEffect(() => {
    if (typeof window !== "undefined" && window.gtag) {
      const handleRouteChange = (url: string) => {
        window.gtag('config', TRACKING_ID, {
          page_path: url,
        });
      };

      // Register pageview for initial load
      handleRouteChange(window.location.pathname);

      // Listen for route changes
      handleRouteChange(pathname);
    }
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <html suppressHydrationWarning={true} className="!scroll-smooth" lang="en">
      <head>
        <Script 
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${TRACKING_ID}`}
        ></Script>
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${TRACKING_ID}');
          `}
        </Script>
        <script async src="https://tally.so/widgets/embed.js"></script>
      </head>
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
