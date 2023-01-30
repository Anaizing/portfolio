import React from "react";
import { graphql, StaticQuery } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/layout";
import SEO from "../components/seo";

import "../utils/normalize.css";
import "../utils/css/screen.css";

const AboutPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout title={siteTitle}>
      <SEO title="ABout" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2 id="clean-minimal-and-deeply-customisable-london-is-a-theme-made-for-people-who-appreciate-simple-lines-">
            WELCOME TO MY FABULOUS PORTFOLIO BIO SECTION!!!
          </h2>
          <figure className="kg-card kg-image-card kg-width-full">
            <Img
              fluid={data.glitchme.childImageSharp.fluid}
              className="kg-image"
            />
            <figcaption>Large imagery is at the heart of this theme</figcaption>
          </figure>
          <h3 id="dynamic-styles">Anai Yusary Araya Rocha</h3>
          <p>
            That up there is my full long-ass name, I probably shouldnt mention
            that this is the first time I've ever MADE the time, in the 5+ years
            I've been building software, to build myself a portfolio that shows
            off my sweet sweet skills. Im patting myelf on the back right now
            because i started building this on saturday, its now monday morning
            and we're nearly there!
          </p>

          <p>
            Oculus and WebGl were kicking my ass for a good chunk of it, but I
            pushed through till I figured it out.
          </p>

          <Img
            fluid={data.yellowright.childImageSharp.fluid}
            className="kg-image"
          />

          <p>
            {" "}
            Just to be clear, I dont condone slogging it out in one go, Im no
            martyr. But building something that is 100% about me is pretty fun!
          </p>

          <p>
            Aside from swearing, dancing, and pushing myself extremely hard when
            the clock is running out, I ABSOLUTELY LOVE LEARNING, I LOVE ART, I
            LOVE PSYCHOLOGY, I LOVE SOLVING PROBLEMS, I LOVE BRAINS... yummm,
            all and all, these qualities make me a pretty awesome creative dev.
            I may also have ADHD and be on the spectrum, so superpowers are
            activated.
          </p>

          <p>
            Now for the juicy hard facts, what am I good at? (I'll add a tagged
            list at the bottom) ...Ive done some cool stuff, and continue to
            build fun things, but I am most excited about building new systems
            that dont exist, that will help as many people as possible, while
            everyone gets to have FUN learning and surprising themselves at
            their own potential. That exites the shit out of me!
          </p>

          <h3>AWESOME STUFF IVE DONE...</h3>

          <p>
            <ul>
              <li>I started my own game development company</li>
              <li>taught myself how to code</li>
              <li>got into Berhain once</li>
              <li>taught myself game design</li>
              <li>
                did a bunch of professional corporate things you can read about
                in my resume
              </li>
            </ul>
            As far as tech goes, building for virtual reality is my favorite.
            Skillset includes... VR/XR development, game development, Unity, VFX
            Graph, Probuilder, C#, Cinemachine, XR Interaction toolkit, Shader
            Graph, Terrain Builder, Javascript, React, CSS, Gatsby, Node.js,
            Adobe Photoshop, Adobe Illustrator, Substance Painter, Blender and
            being kind to people. Thanks for reading MOIST regards, see ya!
          </p>

          <p>
            Thanks for reading
            <br />
            MOIST regards, see ya!
          </p>
          <Img fluid={data.popme.childImageSharp.fluid} className="kg-image" />
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
      <AboutPage location={props.location} data={data} {...props} />
    )}
  />
);
