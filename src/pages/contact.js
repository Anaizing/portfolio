import React from "react";
import { graphql, StaticQuery } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/layout";
import SEO from "../components/seo";

import "../utils/normalize.css";
import "../utils/css/screen.css";

const ContactPage = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout title={siteTitle}>
      <SEO
        title="Contact"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h1>get in touch</h1>

          <form
            method="POST"
            action="https://getform.io/f/0d1db3cc-06d8-402c-b99f-32aa3c18318e"
          >
            <label>
              My name is
              <input
                type="text"
                name="name"
                id="my-name"
                placeholder="Thomas Edison"
                required
              />
            </label>

            <label>
              from
              <input
                type="text"
                name="from"
                id="from"
                placeholder="the future"
                required
              />
            </label>

            <label>
              I'd like to discuss
              <select name="demo-category" id="demo-category" required>
                <option value={"HIRING"}>HIRING YOU</option>
                <option value={"hair"}>how you style your hair so well</option>
                <option value={"collab"}>collaborating</option>
                <option value={"investor"}>INVESTING in SOGGY INK GAMES</option>
              </select>
            </label>
            <label>
              get back at
              <input
                type="email"
                name="respond on"
                id="respond"
                placeholder="your_email@awesomecompany.com"
                required
              />
            </label>
            <input type="submit" value="Submit" />
          </form>
          <figure className="kg-card kg-image-card kg-width-full">
            <Img
              fluid={data.glitchme.childImageSharp.fluid}
              className="kg-image"
            />
            <figcaption>Photography by Ian Araya</figcaption>
          </figure>
        </div>
      </article>
    </Layout>
  );
};

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    glitchme: file(relativePath: { eq: "glitchme.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    popme: file(relativePath: { eq: "popme.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    yellowright: file(relativePath: { eq: "yellowright.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <ContactPage location={props.location} data={data} {...props} />
    )}
  />
);
