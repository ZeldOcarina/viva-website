const path = require("path");

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const result = await graphql(`
    query CaseStudyTemplate {
      caseStudies: strapiApiCaseStudiesPopulate0BodyImageIconBannerimageFeatureVideo {
        data {
          id
          attributes {
            video {
              videoId
              vimeoH
            }
            slug
            title
            bannerImage {
              data {
                attributes {
                  alternativeText
                  localFile {
                    childImageSharp {
                      gatsbyImageData
                    }
                  }
                }
              }
            }
            body {
              text
              image {
                data {
                  attributes {
                    alternativeText
                    localFile {
                      childImageSharp {
                        gatsbyImageData
                      }
                    }
                  }
                }
              }
            }
            feature {
              feature
              featureIntro
              id
            }
            icon {
              data {
                attributes {
                  alternativeText
                  localFile {
                    publicURL
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  result.data.caseStudies.data.forEach((caseStudy) => {
    //console.log(caseStudy);
    createPage({
      path: `/case-studies/${caseStudy.attributes.slug}`,
      component: path.resolve("src/templates/caseStudyTemplate.jsx"),
      context: {
        caseStudy,
      },
    });
    //   caseStudy.data.forEach((caseStudy) => {
    //     createPage({
    //       path: `/case-studies/${caseStudy.attributes.slug}`,
    //       component: path.resolve("src/templates/caseStudyTemplate.jsx"),
    //       context: {
    //         caseStudy: caseStudy,
    //       },
    //     });
    //   });
  });

  //console.log(result.data.caseStudies.data);
};
