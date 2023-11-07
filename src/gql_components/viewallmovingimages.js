import React from "react";
import { graphql, StaticQuery } from "gatsby";
import { AOSImageCard } from "../components/aosCard";

export function ViewAllMovingImages({ data }) {
  // const siteTitle = data.site.siteMetadata.title;
  // const posts = data.allMarkdownRemark.edges;
  const images = data.allImageSharp.edges;
  const srcWebAddress = data.allImageSharp.edges.node.original.src;
  let imageCounter = 0;

  return images.map(() => {
    imageCounter++;
    return (
      <AOSImageCard image={srcWebAddress} alt="test" dataAOSStyle="flip-left" />
    );
  });
}

const getAllImagesQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allImageSharp {
      edges {
        node {
          original {
            src
          }
          id
        }
      }
      totalCount
      nodes {
        id
      }
    }
  }
`;

export default props => {
  return (
    <StaticQuery
      query={getAllImagesQuery}
      render={data => (
        // <div location={props.location} props data={data} {...props} ></div>
        <ViewAllMovingImages data={data}>
          {data.allImageSharp.edges}
        </ViewAllMovingImages>
      )}
    />
  );
};
