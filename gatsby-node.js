const path = require("path");
const crypto = require("crypto");
const { paginate, createPagePerItem } = require("gatsby-awesome-pagination");
const slugify = require("slugify");

const { v4 } = require("uuid");

// exports.createPages = async ({ graphql, actions: { createPage } }) => {
// //   const result = await graphql(`
// //     query CaseStudyTemplate {
// //       caseStudies: strapiApiCaseStudiesPopulate0BodyImageIconBannerimageFeatureVideoVideothumb {
// //         data {
// //           id
// //           attributes {
// //             video {
// //               videoId
// //               videoThumb {
// //                 data {
// //                   attributes {
// //                     alternativeText
// //                     localFile {
// //                       childImageSharp {
// //                         gatsbyImageData
// //                       }
// //                     }
// //                   }
// //                 }
// //               }
// //               vimeoH
// //             }
// //             slug
// //             title
// //             bannerImage {
// //               data {
// //                 attributes {
// //                   alternativeText
// //                   localFile {
// //                     childImageSharp {
// //                       gatsbyImageData
// //                     }
// //                   }
// //                 }
// //               }
// //             }
// //             body {
// //               text
// //               image {
// //                 data {
// //                   attributes {
// //                     alternativeText
// //                     localFile {
// //                       childImageSharp {
// //                         gatsbyImageData
// //                       }
// //                     }
// //                   }
// //                 }
// //               }
// //             }
// //             feature {
// //               feature
// //               featureIntro
// //               id
// //             }
// //             icon {
// //               data {
// //                 attributes {
// //                   alternativeText
// //                   localFile {
// //                     publicURL
// //                   }
// //                 }
// //               }
// //             }
// //           }
// //         }
// //       }
// //     }
// //   `);

//   result.data.caseStudies.data.forEach((caseStudy) => {
//     //console.log(caseStudy);
//     createPage({
//       path: `/case-studies/${caseStudy.attributes.slug}`,
//       component: path.resolve("src/templates/caseStudyTemplate.jsx"),
//       context: {
//         caseStudy,
//       },
//     });
//       // caseStudy.data.forEach((caseStudy) => {
//       //   createPage({
//       //     path: `/case-studies/${caseStudy.attributes.slug}`,
//       //     component: path.resolve("src/templates/caseStudyTemplate.jsx"),
//       //     context: {
//       //       caseStudy: caseStudy,
//       //     },
//       //   });
//       // });
//   });

//   //console.log(result.data.caseStudies.data);

// //   const result2 = await graphql(`
// //     query FetchBlogPosts {
// //       allBlogPost {
// //         nodes {
// //           post {
// //             slug
// //             id
// //             attributes {
// //               title
// //               copy
// //               image {
// //                 data {
// //                   attributes {
// //                     alternativeText
// //                     localFile {
// //                       childImageSharp {
// //                         gatsbyImageData(quality: 100)
// //                       }
// //                     }
// //                   }
// //                 }
// //               }
// //             }
// //           }
// //         }
// //       }
// //     }
// //   `);

// //   const blogPosts = result2.data.allBlogPost.nodes;

//   paginate({
//     createPage, // The Gatsby `createPage` function
//     items: blogPosts, // An array of objects
//     itemsPerPage: 3, // How many items you want per page
//     pathPrefix: "/blog", // Creates pages like `/blog`, `/blog/2`, etc
//     component: path.resolve("src/templates/blogSummaryTemplate.jsx"), // Just like `createPage()`
//   });

//   // createPagePerItem({
//   //   createPage,
//   //   component: path.resolve("src/templates/blogTemplate.jsx"),
//   //   items: blogPosts,
//   //   itemToPath: "node.post.slug",
//   //   itemToId: "node.post.id",
//   // });

//   blogPosts.forEach((blogPost, i) => {
//     createPage({
//       path: `/blog/${blogPost.post.slug}`,
//       component: path.resolve("src/templates/blogTemplate.jsx"),
//       context: {
//         blogPost,
//         previousItem: blogPosts[i - 1],
//         nextItem: blogPosts[i + 1],
//       },
//     });
//   });
// };

// exports.onCreateNode = ({ node, getNode, actions: { createNodeField, createNode } }) => {
//   if (node.internal.type === "StrapiApiPostsPopulate") {
//     //console.log(node);

//     const blogs = node.data.map((blog) => {
//       blog.slug = slugify(blog.attributes.title, { lower: true, locale: "en", strict: true });
//       return blog;
//     });

//     blogs.forEach((blog) => {
//       createNode({
//         post: blog,
//         id: v4(),
//         parent: null, // or null if it's a source node without a parent
//         children: [],
//         internal: {
//           type: `BlogPost`,
//           contentDigest: crypto.createHash(`md5`).update(JSON.stringify(blog)).digest(`hex`),
//           content: JSON.stringify(blog), // optional
//           description: "Blog Post " + blog.attributes.title, // optional
//         },
//       });
//     });
//   }
// };
