import React from "react";
import { Helmet } from "react-helmet";

const Seo = (props) => {
  const DESCRIPTION =
    "The #1 Mentor in the world for dental practices. Our program adds $500,000 to $1,000,000 for each office you manage in 12 months or less.";

  return (
    <Helmet htmlAttributes={{ lang: "en" }}>
      <title>{props.title || "Viva Digital"}</title>
      {/* * *
       * GOOGLE FONTS FAMILY LINK:
       * https://fonts.google.com/share?selection.family=Nunito%20Sans:wght@400;600;700%7COpen%20Sans:ital,wght@0,300;0,400;0,600;1,300;1,400
       * * */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link
        href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700&family=Open+Sans:ital,wght@0,300;0,400;0,600;1,300;1,400&display=swap"
        rel="stylesheet"
      />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#2b5797" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="description" content={DESCRIPTION} />
      <meta name="author" content="Mattia Rasulo" />
      <meta property="og:url" content="https://viva-concepts.com/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={props.title || "Viva Digital"} />
      <meta property="og:description" content={DESCRIPTION} />
      <meta property="og:image" content="https://viva-website-tau.vercel.app/scresnshot.png" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Viva Concepts Website" />
    </Helmet>
  );
};

export default Seo;
