import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";

import Header from "../components/header";
import MainSection from "../components/main";
import Footer from "../components/footerNew";

export const IndexPageTemplate = (props) => (
  <div>
    <Header
      topHeaderLinks={props.topHeaderLinks}
      headerLogo={props.headerLogo}
    />
    <MainSection
      intro={props.intro}
      plan={props.plan}
      events={props.events}
      hero={props.hero}
    />
    <Footer footer={props.footer} />
  </div>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const IndexPage = ({ data }) => {
  const {
    title,
    topHeaderLinks,
    headerLogo,
    intro,
    plan,
    events,
    footer,
    hero,
  } = data?.markdownRemark.frontmatter;

  return (
    <IndexPageTemplate
      title={title}
      topHeaderLinks={topHeaderLinks}
      headerLogo={headerLogo}
      intro={intro}
      plan={plan}
      events={events}
      hero={hero}
      footer={footer}
    />
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        url
        homeLink
        description
        events {
          bottom
          heading
          body
        }

        liveEventLinks {
          link
          name
        }
        topHeaderLinks {
          link
          name
        }
        headerLogo {
          childImageSharp {
            fluid {
              src
              srcSet
              base64
            }
          }
        }
        hero {
          background {
            childImageSharp {
              fluid {
                src
              }
            }
          }
          taglineImage {
            childImageSharp {
              fluid {
                src
              }
            }
          }
        }
        events {
          body
          bottom
          heading
          eventList {
            logo {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
            shortDescription
            eventLink
            eventLinkText
          }
        }
        footer {
          Copyright
          address
          contactEmail
          phone
          footerLinks {
            link
            name
          }
          footerLogo {
            childImageSharp {
              fluid {
                src
              }
            }
          }
        }
        plan {
          mobileImage {
            childImageSharp {
              fluid {
                base64
                src
                srcSet
              }
            }
          }
          image {
            childImageSharp {
              fluid {
                src
                srcSet
                base64
              }
            }
          }
          description
          heading
        }
        intro {
          description
          heading
          comments {
            comment {
              commentText
            }
          }
          introImage {
            childImageSharp {
              fluid {
                src
                srcSet
                base64
              }
            }
          }
        }
      }
    }
  }
`;
