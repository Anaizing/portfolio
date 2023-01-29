import React from "react";
import { graphql, StaticQuery } from "gatsby";
// import Img from "gatsby-image"

import Layout from "../components/layout";
import SEO from "../components/seo";

import "../utils/normalize.css";
import "../utils/css/screen.css";

const Codepens = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout title={siteTitle}>
      <SEO
        title="Codepens"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2 id="clean-minimal-and-deeply-customisable-london-is-a-theme-made-for-people-who-appreciate-simple-lines-">
            Take a look at some of my codepens...
          </h2>
          <iframe
            height="300"
            style={{ width: "100%" }}
            scrolling="no"
            themeId="light"
            title="anaizing-parallax-two"
            src="https://codepen.io/Anaizing/embed/KeONLv?default-tab=html%2Cresult&theme-id=dark"
            frameborder="no"
            loading="lazy"
            allowtransparency="true"
            allowfullscreen="true"
          >
            See the Pen{" "}
            <a href="https://codepen.io/Anaizing/pen/KeONLv">
              anaizing-parallax-two
            </a>{" "}
            by Anai (<a href="https://codepen.io/Anaizing">@Anaizing</a>) on{" "}
            <a href="https://codepen.io">CodePen</a>.
          </iframe>
          <iframe
            height="300"
            style={{ width: "100%" }}
            scrolling="no"
            title="Anaizing Under-Construction"
            src="https://codepen.io/Anaizing/embed/GBrebo?default-tab=html%2Cresult&theme-id=dark"
            frameborder="no"
            loading="lazy"
            allowtransparency="true"
            allowfullscreen="true"
          >
            See the Pen{" "}
            <a href="https://codepen.io/Anaizing/pen/GBrebo">
              Anaizing Under-Construction
            </a>{" "}
            by Anai (<a href="https://codepen.io/Anaizing">@Anaizing</a>) on{" "}
            <a href="https://codepen.io">CodePen</a>.
          </iframe>
          <iframe
            height="300"
            style={{ width: "100%" }}
            scrolling="no"
            title="Flex Panels Image Gallery"
            src="https://codepen.io/Anaizing/embed/EbRzwM?default-tab=html%2Cresult&theme-id=dark"
            frameborder="no"
            loading="lazy"
            allowtransparency="true"
            allowfullscreen="true"
          >
            See the Pen{" "}
            <a href="https://codepen.io/Anaizing/pen/EbRzwM">
              Flex Panels Image Gallery
            </a>{" "}
            by Anai (<a href="https://codepen.io/Anaizing">@Anaizing</a>) on{" "}
            <a href="https://codepen.io">CodePen</a>.
          </iframe>
          <iframe
            height="300"
            style={{ width: "100%" }}
            scrolling="no"
            title="Card Hover"
            src="https://codepen.io/Anaizing/embed/yLMbbJd?default-tab=html%2Cresult&theme-id=dark"
            frameborder="no"
            loading="lazy"
            allowtransparency="true"
            allowfullscreen="true"
          >
            See the Pen{" "}
            <a href="https://codepen.io/Anaizing/pen/yLMbbJd">Card Hover</a> by
            Anai (<a href="https://codepen.io/Anaizing">@Anaizing</a>) on{" "}
            <a href="https://codepen.io">CodePen</a>.
          </iframe>
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
  }
`;

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <Codepens location={props.location} data={data} {...props} />
    )}
  />
);
