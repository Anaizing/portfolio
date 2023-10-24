// import React from "react";
// import { StaticQuery } from "gatsby";
// import { css } from "aphrodite";

// import { TypewriterIntro } from "../components/typewriter";
// // import { WebGLRenderer } from "../components/webgl";
// // import { MyModelViewer } from "../components/modelViewer"
// import { AOSImageCard } from "../components/aosCard";

// import Layout from "../components/layout";
// import SEO from "../components/seo";
// import PostCard from "../components/postCard";
// // import Image from "gatsby-image" // todo:add image graphql way

// import { stylesVanishIn } from "../components/magicAnimations";
// import "../utils/normalize.css";
// import "../utils/css/screen.css";

// // const windowGlobal = typeof window !== 'undefined' && window;
// // windowGlobal.localStorage;

// const BlogIndex = ({ data }, location) => {
//     const siteTitle = data.site.siteMetadata.title;
//     const posts = data.allMarkdownRemark.edges;
//     // const images = data.allImageSharp.edges;

//     // const model = data.file.publicURL;
//     let postCounter = 0;

//     return (
//         <Layout title={siteTitle}>
//             <div>
//                 <SEO
//                     title="All posts"
//                     keywords={[`blog`, `gatsby`, `javascript`, `react`]}
//                 />
//                 {/* <Bio /> */}
//                 {data.site.siteMetadata.description && (
//                     <header className="page-head " >
//                         {/* <div className=" daddyGrid"> */}
//                         <div className="hide-me">
//                             <img
//                                 className={css(stylesVanishIn.magic)}
//                                 src="https://res.cloudinary.com/soggy-ink-games/image/upload/v1697250573/logo_face_j5h5as.png"
//                                 alt="blue"
//                             // style={{ width: "100vh" }}
//                             ></img>
//                         </div>
//                         <h2
//                             className="spicy"
//                             style={{
//                                 fontSize: "2em",
//                                 height: "100%",
//                                 flex: 1,
//                                 display: "flex",
//                                 alignItems: "center",

//                             }}>
//                             <TypewriterIntro />
//                         </h2>
//                     </header>
//                 )}

//                 <div style={{ height: "100vh", width: "100vw", backgroundColor: "cyan" }}>
//                     3d stuff
//                     {/* <MyModelViewer */}
//                     {/* ></MyModelViewer> */}
//                 </div>
//                 {/* <div className="something-silly"> */}

//                 <div className="something-silly" >
//           // todo: turn this into a carousel slide like the one you made o codepen
//                     <AOSImageCard
//                         dataAOSStyle="fade-right"
//                         offset={100}
//                         delay={0}
//                         duration={40000}
//                         easing="ease-in-sine"
//                         image="https://res.cloudinary.com/soggy-ink-games/image/upload/v1697198628/surrenderstupidity_kfjpzq.gif"
//                         alt="my gif"
//                         className="intro"
//                     >
//                     </AOSImageCard>
//                     {posts.map(({ node }) => {
//                         postCounter++;
//                         return (
//                             <PostCard
//                                 key={node.fields.slug}
//                                 count={postCounter}
//                                 node={node}
//                                 postClass={`post`}
//                             />
//                         );
//                     })}
//                     <AOSImageCard
//                         dataAOSStyle="fade-right"
//                         offset={100}
//                         delay={100}
//                         duration={40000}
//                         easing="ease-in-sine"
//                         image="https://res.cloudinary.com/soggy-ink-games/image/upload/v1697250566/portfolio_logo_black_bxdatp.png"
//                         alt="my gif"
//                         className="unity"
//                     >
//                     </AOSImageCard>
//                 </div>
//                 {/* </div> */}

//                 {/*
//         <div className=" something-silly">
//           <AOSImageCard
//             dataAOSStyle="fade-right"
//             offset={100}
//             delay={0}
//             duration={40000}
//             easing="ease-in-sine"
//             image="https://res.cloudinary.com/soggy-ink-games/image/upload/v1697198628/surrenderstupidity_kfjpzq.gif"
//             alt="my gif"
//           >
//           </AOSImageCard>
//           <AOSImageCard
//             dataAOSStyle="fade-right"
//             offset={100}
//             delay={100}
//             duration={40000}
//             easing="ease-in-sine"
//             image="https://res.cloudinary.com/soggy-ink-games/image/upload/v1697250566/portfolio_logo_black_bxdatp.png"
//             alt="my gif"
//           >
//           </AOSImageCard>

//           <AOSImageCard
//             dataAOSStyle="fade-right"
//             offset={100}
//             delay={200}
//             duration={40000}
//             easing="ease-in-sine"
//             image="https://res.cloudinary.com/soggy-ink-games/image/upload/v1697198628/surrenderstupidity_kfjpzq.gif"
//             alt="my gif"
//           >
//           </AOSImageCard>
//           <AOSImageCard
//             dataAOSStyle="fade-right"
//             offset={100}
//             delay={300}
//             duration={40000}
//             easing="ease-in-sine"
//             image="https://res.cloudinary.com/soggy-ink-games/image/upload/v1697250566/portfolio_logo_black_bxdatp.png"
//             alt="my gif"
//           >
//           </AOSImageCard>

//           <AOSImageCard
//             dataAOSStyle="fade-right"
//             offset={100}
//             delay={400}
//             duration={40000}
//             easing="ease-in-sine"
//             image="https://res.cloudinary.com/soggy-ink-games/image/upload/v1697198628/surrenderstupidity_kfjpzq.gif"
//             alt="my gif"
//           >
//           </AOSImageCard>

//           <AOSImageCard
//             dataAOSStyle="fade-right"
//             offset={100}
//             delay={500}
//             duration={40000}
//             easing="ease-in-sine"
//             image="https://res.cloudinary.com/soggy-ink-games/image/upload/v1697250566/portfolio_logo_black_bxdatp.png"
//             alt="my gif"
//           >
//           </AOSImageCard>

//         </div> */}

//                 {/* // todo move this to its own screen element */}

//                 {/* <div style={{ width: "90vw", height: "auto", margin: "0 auto", padding: "25%", backgroundColor: "#03F1F1" }}>
//           <div
//             data-aos="fade-right"
//             data-aos-offset="600"
//             data-aos-delay="30"
//             data-aos-easing="ease-in-sine"
//             data-aos-duration="40000"
//             style={{ width: "90vh", }}
//           >
//             <WebGLRenderer />
//           </div>
//         </div> */}

//                 {/* <div className="post-feed" >
//           {posts.map(({ node }) => {
//             postCounter++;
//             return (
//               <PostCard
//                 key={node.fields.slug}
//                 count={postCounter}
//                 node={node}
//                 postClass={`post`}
//               />
//             );
//           })}
//         </div> */}

//             </div>
//         </Layout >
//     );
// };

// const indexQuery = graphql`
//           query {
//             site {
//               siteMetadata {
//                 title
//                 description
//               }
//             }
//             file(relativePath: {eq: "DinklageLikenessSculpt.glb"}) {
//               relativePath
//               publicURL
//             }
//             allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
//               edges {
//                 node {
//                   excerpt
//                   fields {
//                     slug
//                   }
//                   frontmatter {
//                     date(formatString: "MMMM DD, YYYY")
//                     title
//                     description
//                     background
//                     thumbnail {
//                       childImageSharp {
//                         fluid(maxWidth: 1360) {
//                           ...GatsbyImageSharpFluid
//                         }
//                       }
//                     }
//                   }
//                 }
//               }
//             }
//           }
//           `;

// export default (props) => {
//     return (
//         <StaticQuery
//             query={indexQuery}
//             render={data => (
//                 <BlogIndex location={props.location} props data={data} {...props} >
//                     {/* {console.log(getAllImages)} */}
//                 </BlogIndex>
//             )}
//         />
//     )
// };
