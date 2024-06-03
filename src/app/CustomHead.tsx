// components/CustomHead.tsx
import React from 'react';
import Head from 'next/head';
import ReactGA from "react-ga"



const CustomHead = () => (
  <Head>
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-8WS8N8BTQS"></script>
    <script
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-8WS8N8BTQS');
        `,
      }}
    />
  </Head>
);

export default CustomHead;