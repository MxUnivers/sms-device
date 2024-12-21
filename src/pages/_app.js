// src/pages/_app.js
import Head from 'next/head';
import '../app/globals.css'; // Importez vos styles globaux ici

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/assets/css/plugin-css/swiper-bundle.css" />
        <link rel="stylesheet" href="/assets/css/plugin-css/aos.css" />
        <link rel="stylesheet" href="/assets/css/plugin-css/perfect-scrollbar.css" />
        <link rel="stylesheet" href="/assets/css/plugin-css/simple-datatables.css" />
        <link rel="stylesheet" href="/assets/css/plugin-css/preloader.css" />
        <link rel="stylesheet" href="/assets/css/main.css" />
        <link rel="stylesheet" href="/assets/css/custom.css" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;