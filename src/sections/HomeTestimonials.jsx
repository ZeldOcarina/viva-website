import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import Button from "../components/Button";
import ImageVideo from "../components/ImageVideo";

const StyledHomeTestimonials = styled.section`
  text-align: center;
  padding-bottom: 3rem;
  h2 {
    margin-bottom: 2rem;
  }
  .subtitle {
    width: 80%;
    margin: 0 auto;
  }
  .testimonials-container {
    display: flex;
    margin-top: 4rem;
    gap: 2rem;
  }
  .card {
    text-align: left;
    font-size: 1.6rem;
    width: calc(33% - 2rem);

    blockquote {
      font-style: italic;
      font-weight: 300;
      margin-bottom: 2rem;
    }

    p {
      margin-bottom: 3rem;
    }
    .video-wrapper {
      width: 100%;
      margin: 2rem 0;
    }

    ul {
      list-style-position: outside;

      li {
        &:not(:last-child) {
          margin-bottom: 0.5rem;
        }
      }
    }

    .features-container {
      display: flex;
      gap: 4rem;
      margin-bottom: 2rem;
      font-size: 1.4rem;
      align-items: flex-start;
    }
  }
`;

const HomeTestimonials = () => {
  const {
    homeTestimonials: {
      data: {
        attributes: { homeTestimonial, title, subtitle },
      },
    },
  } = useStaticQuery(query);

  return (
    <StyledHomeTestimonials className="container">
      <h2>{title}</h2>
      <p className="subtitle">{subtitle}</p>
      <div className="testimonials-container">
        {homeTestimonial.map(
          ({
            businessLogo: {
              data: { attributes: logo },
            },
            cta,
            ctaLink,
            id,
            name,
            quote,
            summary,
            videoId,
            videoH,
            testimonialFeature,
            thumbImage: {
              data: { attributes: thumbImage },
            },
          }) => {
            const logoImage = getImage(logo.localFile) || logo.localFile.publicURL;

            return (
              <div className="card" key={id}>
                <h3>{name}</h3>
                <ImageVideo
                  image={getImage(thumbImage.localFile)}
                  alt={thumbImage.alternativeText}
                  video={videoId}
                  vimeoH={videoH}
                ></ImageVideo>
                <blockquote>{quote}</blockquote>
                <p>{summary}</p>
                <div className="features-container">
                  {getImage(logo.localFile) ? (
                    <GatsbyImage image={logoImage} alt={logo.alternativeText} />
                  ) : (
                    <img src={logoImage} alt={logo.alternativeText} />
                  )}
                  <ul>
                    {testimonialFeature.map(({ feature, id }) => {
                      return <li key={id}>{feature}</li>;
                    })}
                  </ul>
                </div>
                <Button url={ctaLink}>{cta}</Button>
              </div>
            );
          }
        )}
      </div>
    </StyledHomeTestimonials>
  );
};

const query = graphql`
  query HomeTestimonials {
    homeTestimonials: strapiApiHomeTestimonialsSectionPopulateHometestimonialPopulate {
      data {
        attributes {
          subtitle
          title
          homeTestimonial {
            cta
            ctaLink
            id
            name
            quote
            summary
            videoId
            videoH
            testimonialFeature {
              feature
              id
            }
            thumbImage {
              data {
                attributes {
                  localFile {
                    childImageSharp {
                      gatsbyImageData(placeholder: TRACED_SVG, layout: FULL_WIDTH)
                    }
                  }
                  alternativeText
                }
              }
            }
            businessLogo {
              data {
                attributes {
                  localFile {
                    publicURL
                    childImageSharp {
                      gatsbyImageData(placeholder: BLURRED)
                    }
                  }
                  alternativeText
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default HomeTestimonials;
