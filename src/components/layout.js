import React from "react";
import { Link } from "gatsby";

import github from "../../content/assets/github.png";
import codepen from "../../content/assets/codepen.png";
import twitter from "../../content/assets/twitter.png";

const Layout = props => {
  const { title, children } = props;
  const [toggleNav, setToggleNav] = React.useState(false);
  return (
    <div className={`site-wrapper ${toggleNav ? `site-head-open` : ``}`}>
      <header className="site-head">
        <div className="site-head-container">
          <a
            className="nav-burger"
            href="#"
            aria-label="landing page"
            onClick={() => setToggleNav(!toggleNav)}
          >
            <div
              className="hamburger hamburger--collapse"
              aria-label="Menu"
              role="button"
              aria-controls="navigation"
            >
              <div className="hamburger-box">
                <div className="hamburger-inner" />
              </div>
            </div>
          </a>
          <nav id="swup" className="site-head-left">
            <ul className="nav" role="menu">
              <li className="nav-home nav-current" role="menuitem">
                <Link to={`/`}>Projects</Link>
              </li>
              <li className="nav-about" role="menuitem">
                <Link to={`/about`}>About</Link>
              </li>
              <li className="nav-elements" role="menuitem">
                <Link to={`/codepens`}>Codepens</Link>
              </li>
            </ul>
          </nav>
          <div className="site-head-center">
            <Link className="site-head-logo" to={`/`}>
              {title}
            </Link>
          </div>
          <div className="site-head-right">
            <div className="social-links">
              <a
                href="https://twitter.com/Anaizing"
                title="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className=""
                  src={twitter}
                  alt="twitter logo"
                  style={{ width: "30px" }}
                />
              </a>
              <a
                href="https://codepen.io/Anaizing"
                title="Codepen"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className=""
                  src={codepen}
                  alt="codepen logo"
                  style={{ width: "30px" }}
                />
              </a>
              <a
                href="https://github.com/Anaizing"
                title="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className=""
                  src={github}
                  alt="github logo"
                  style={{ width: "30px" }}
                />
              </a>

              {/* <Link
                to={`/rss.xml`}
                title="RSS"
                target="_blank"
                rel="noopener noreferrer"
              >
                RSS
              </Link> */}
            </div>
          </div>
        </div>
      </header>
      <main id="site-main" className="site-main">
        <div id="swup" className="transition-fade">
          {children}
        </div>
      </main>
      <footer className="site-foot">
        &copy; {new Date().getFullYear()} <Link to={`/`}>{title}</Link> &mdash;
        Built with{" "}
        <a
          href="https://gatsbyjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gatsby
        </a>
      </footer>
    </div>
  );
};

export default Layout;
