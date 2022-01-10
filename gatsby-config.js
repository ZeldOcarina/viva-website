require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const rawSingleTypes = [
  "home-hero?populate=*",
  "home-customer-logos?populate[0]=customerLogo&populate[1]=customerLogo.logo",
  "home-testimonials-section?populate[homeTestimonial][populate]=*",
  "home-more-patients-section?populate=*",
  "home-features-section?populate[homeFeature][populate]=*",
  "home-problems-section?populate=*",
  "home-founder-section?populate=*",
  "home-how-to-scale?populate=*",
  "home-marketing-section?populate=*",
  "home-viva-difference-section?populate[difference][populate]=*",
  "home-system-delivers-section?populate=*",
  "home-client-testimonials-bottom-section?populate[videoTestimonial][populate]=*",
  "home-costs-section?populate=*",
];

const singleTypes = rawSingleTypes.map((singleType) => {
  return `api/${singleType}`;
});

module.exports = {
  siteMetadata: {
    siteUrl: "https://vivadigitalconepts.com",
    title: "Viva Digital",
    navbarLinks: [
      { name: "Contact Us", url: "/contacts" },
      { name: "AHP", url: "https://www.ddsturningpoint.com/orientation" },
    ],
    socialLinks: {
      facebook: "https://www.facebook.com/VivaReferralSystem",
      instagram: "https://www.instagram.com/vivaconcepts/",
      twitter: "https://twitter.com/viva_concepts",
    },
  },
  plugins: [
    // {
    //   resolve: "gatsby-plugin-google-tagmanager",
    //   options: {
    //     id: "GTM-NKBGQLK",

    //     // Include GTM in development.
    //     //
    //     // Defaults to false meaning GTM will only be loaded in production.
    //     includeInDevelopment: true,

    //     // datalayer to be set before GTM is loaded
    //     // should be an object or a function that is executed in the browser
    //     //
    //     // Defaults to null
    //     defaultDataLayer: { platform: "gatsby" },

    //     // Specify optional GTM environment details.
    //     // gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
    //     // gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
    //     //dataLayerName: "GTM-NKBGQLK",

    //     // Name of the event that is triggered
    //     // on every Gatsby route change.
    //     //
    //     // Defaults to gatsby-route-change
    //     routeChangeEventName: "gatsby-route-change",
    //     // Defaults to false
    //     enableWebVitalsTracking: true,
    //   },
    // },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require("sass"),
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/images`,
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: "https://admin.vivadigitalconcepts.com",
        collectionTypes: [],
        singleTypes,
        // Extract images from markdown fields.
        // markdownImages: {
        //   typesToParse: {
        //     Article: ['body'],
        //     ComponentBlockBody: ['text'],
        //   },
        // },
        // Only include specific locale.
        //locale: 'en', // default to all
        // Include drafts in build.
        //preview: true, // defaults to false
        // Use application token.
        //token: 'xxx',
        // Add additional headers.
        //headers: {},
      },
    },
    /*{
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `https://admin.vivadigitalconcepts.com/api`,
        queryLimit: 1000, // Default to 100
        //contentTypes: [`article`, `user`],
        singleTypes: [`home-hero?populate=*`],
        // Possibility to login with a strapi user, when content types are not publically available (optional).
      },
    },*/
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Open Sans",
              variants: ["300", "400", "700"],
            },
          ],
        },
      },
    },
  ],
};
