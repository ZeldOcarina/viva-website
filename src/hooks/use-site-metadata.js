import { graphql, useStaticQuery } from "gatsby";

export default function useSiteMetadata() {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          navbarLinks {
            name
            url
            type
            subitems {
              name
              url
              type
            }
          }
          description
          siteUrl
          title
        }
      }
    }
  `);

  return data.site.siteMetadata;
}
