import React from "react";
import { graphql, StaticQuery } from "gatsby";
import { WebGLRenderer } from "../components/webgl";

// import Img from "gatsby-image"

import Layout from "../components/layout";
import SEO from "../components/seo";

import "../utils/normalize.css";
import "../utils/css/screen.css";

const GameViewPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout title={siteTitle}>
      <SEO
        title={siteTitle}
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />
      <WebGLRenderer className="game-screen" />
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
  }
`;

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <GameViewPage location={props.location} data={data} {...props} />
    )}
  />
);
