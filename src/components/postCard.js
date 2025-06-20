import React from "react";
import { Link } from "gatsby";

export default props => (
  <>
    <article
      id={props.id}
      className={`post-card ${props.count % 3 === 0 && `post-card-large`} ${
        props.postClass
      } ${
        props.node.frontmatter.thumbnail ? `with-image zoomzoom` : `no-image`
      }`}
      style={
        props.node.frontmatter.thumbnail && {
          backgroundImage: `url(${props.node.frontmatter.thumbnail.childImageSharp.fluid.src})`
        }
      }
    >
      <Link to={props.node.fields.slug} className="post-card-link">
        <div className="post-card-content">
          <h2
            className="post-card-title"
            style={{
              background: `url(${
                props.node.frontmatter.background
                  ? props.node.frontmatter.background
                  : `https://res.cloudinary.com/soggy-ink-games/image/upload/v1697637068/mememe_2_hapzuj.png`
              }) no-repeat center center fixed`,
              backgroundSize: "cover"
            }}
          >
            {/* {props.node.frontmatter.title || props.node.fields.slug} */}
          </h2>
        </div>
      </Link>
    </article>

    <div>
      <div className="project-text">
        <span className="project-tags">{props.node.frontmatter.tags}</span>
        <h1 className="project-title">{props.node.frontmatter.title}</h1>
        <p className="project-description ">
          {props.node.frontmatter.description}
        </p>
      </div>
    </div>
  </>
);
