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
  "old-way-and-new-ways?populate=*",
  "home-team-section?populate[teamMember][populate]=*",
  "home-q-and-a-section?populate=*",
  "case-studies?populate[0]=body.image,icon,bannerImage,feature,video.videoThumb",
  "posts?populate=*",
];

const singleTypes = rawSingleTypes.map((singleType) => {
  return `api/${singleType}`;
});

module.exports = {
  siteMetadata: {
    siteUrl: "https://vivadigitalconepts.com",
    title: "Viva Digital",
    navbarLinks: [
      { name: "Case Studies", url: "/case-studies", type: "internal" },
      { name: "Blog", url: "/blog", type: "internal" },
      { name: "Dashboard", url: "https://www.ddsturningpoint.com/dasbhoard", type: "external" },
      {
        name: "AHP",
        url: "https://www.ddsturningpoint.com/orientation",
        type: "external",
        subitems: [
          {
            name: "ORIENTATION",
            url: "https://www.ddsturningpoint.com/orientation",
            type: "external",
          },
          {
            name: "STEP 1",
            url: "https://www.ddsturningpoint.com/stepone",
            type: "external",
          },
          {
            name: "STEP 2",
            url: "https://www.ddsturningpoint.com/step-2",
            type: "external",
          },
          {
            name: "STEP 3",
            url: "https://www.ddsturningpoint.com/step-three",
            type: "external",
          },
          {
            name: "STEP 4",
            url: "https://www.ddsturningpoint.com/step-four",
            type: "external",
          },
          {
            name: "ADMIN FORMS",
            url: "https://www.ddsturningpoint.com/admin-forms",
            type: "external",
          },
          {
            name: "HAT WRITE-UPS",
            url: "https://www.ddsturningpoint.com/hat-write-ups",
            type: "external",
          },
        ],
      },
    ],
    socialLinks: {
      facebook: "https://www.facebook.com/VivaReferralSystem",
      instagram: "https://www.instagram.com/vivaconcepts/",
      twitter: "https://twitter.com/viva_concepts",
    },
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-KNQ562J",

        // Include GTM in development.
        //
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: true,

        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        //
        // Defaults to null
        defaultDataLayer: { platform: "gatsby" },

        // Specify optional GTM environment details.
        // gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
        // gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
        //dataLayerName: "GTM-NKBGQLK",

        // Name of the event that is triggered
        // on every Gatsby route change.
        //
        // Defaults to gatsby-route-change
        routeChangeEventName: "gatsby-route-change",
        // Defaults to false
        enableWebVitalsTracking: true,
      },
    },
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
      resolve: "gatsby-source-airtable",
      options: {
        apiKey: process.env.GATSBY_AIRTABLE_API,
        concurrency: 5,
        tables: [
         {
            baseId: process.env.GATSBY_AIRTABLE_BASE_ID,
            tableName: `Hero`,
         }
        ]
      },
    },
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
