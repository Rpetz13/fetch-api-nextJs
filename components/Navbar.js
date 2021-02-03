import Head from "next/head";
import Link from "next/link";

const Navbar = (props) => {
  return (
    <>
      <Head>
        <title>{props.title}</title>

        {/* Bootstrap */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
          integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
          crossOrigin="anonymous"
        ></link>
      </Head>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand">Next | CRUD</a>
        <div className="ml-auto">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/">
                <a className="nav-link text-decoration-none font-weight-bold">
                  Home
                </a>
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link href="/users">
                <a className="nav-link text-decoration-none font-weight-bold">
                  Users
                </a>
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link href="/posts">
                <a className="nav-link text-decoration-none font-weight-bold">
                  Posts
                </a>
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link href="/albums">
                <a className="nav-link text-decoration-none font-weight-bold">
                  Albums
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
