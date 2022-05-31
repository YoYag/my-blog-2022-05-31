import * as React from "react";
import { Link } from "gatsby";

const Header = () => {
  return (
    <header>
      <h1>Welcome to my Gatsby site!</h1>
    </header>
  );
};

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

// markup
const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      <Header></Header>
      <Nav></Nav>
      <p>I'm making this by following the Gatsby Tutorial.</p>
    </main>
  );
};

export default IndexPage;
