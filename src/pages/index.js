import React /*{ useEffect, useState, useMemo, useRef }*/ from "react";
import { StaticQuery } from "gatsby";
import { css } from "aphrodite";

import { TypewriterIntro } from "../components/typewriter";
// import { MyModelViewer } from "../components/modelViewer"
// import { AOSImageCard } from "../components/aosCard";

import Layout from "../components/layout";
import SEO from "../components/seo";
import PostCard from "../components/postCard";

import { stylesVanishIn } from "../components/magicAnimations";
import "../utils/normalize.css";
import "../utils/css/screen.css";

const BlogIndex = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMarkdownRemark.edges;

  let postCounter = 0;

  return (
    <Layout title={siteTitle}>
      <SEO
        title="All posts"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />
      {/* <Bio /> */}
      {data.site.siteMetadata.description && (
        <header className="page-head ">
          <div>
            <img
              className={css(stylesVanishIn.magic)}
              src="https://res.cloudinary.com/soggy-ink-games/image/upload/v1697250573/logo_face_j5h5as.png"
              alt="blue"
            ></img>
          </div>
          <h2
            className="spicy"
            style={{
              fontSize: "2em",
              height: "100%",
              flex: 1,
              display: "flex",
              alignItems: "center"
            }}
          >
            <TypewriterIntro />
          </h2>
        </header>
      )}

      {/* 3D area to add */}
      {/* <div style={{ height: "100vh", width: "100vw", backgroundColor: "cyan" }} >
        3d stuff */}
      {/* <MyModelViewer model={"/models/lalala.glb"} />
        <MyModelViewer model={"/models/GLman.glb"} /> */}
      {/* </div> */}

      {/* //todo: update copy */}
      {/* //todo: publish*/}
      {/* Projects carousel */}
      <div className="projects-carousel">
        <ul className="cards ">
          {posts.map(({ node }) => {
            postCounter++;
            return (
              <li key={node.id + node.id}>
                <PostCard
                  id={node.id}
                  key={node.fields.slug.toString()}
                  count={postCounter}
                  node={node}
                  postClass={`post`}
                ></PostCard>
              </li>
            );
          })}
        </ul>
      </div>
    </Layout>
  );
};

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    file(relativePath: { eq: "DinklageLikenessSculpt.glb" }) {
      relativePath
      publicURL
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          id
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            background
            tags
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 1360) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default props => {
  return (
    <StaticQuery
      query={indexQuery}
      render={data => (
        <BlogIndex
          location={props.location}
          props
          data={data}
          {...props}
        ></BlogIndex>
      )}
    />
  );
};
