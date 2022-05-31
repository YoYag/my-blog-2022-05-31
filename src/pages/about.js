import React from "react";
import { Link } from "gatsby";

const Header = () => {
  return (
    <header>
      <h1>About Me</h1>
    </header>
  );
};

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Back to Home</Link>
        </li>
      </ul>
    </nav>
  );
};

function AboutPage() {
  return (
    <main>
      <title>About Me</title>
      <Header></Header>
      <Nav></Nav>
      <p>
        Hi there! I'm the proud creator of this site, which I built with Gatsby.
      </p>
    </main>
  );
}

export default AboutPage;
