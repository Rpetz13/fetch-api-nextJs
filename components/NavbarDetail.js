import Head from "next/head";

const NavbarDetail = (props) => {
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
        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/b0fdb44dde.css"
        ></link>
      </Head>

      <nav className="row navbar navbar-expand-lg navbar-light bg-primary">
        <div className="navbar-nav ml-auto mr-auto mr-sm-auto mr-lg-0 mr-md-auto">
          <a href="index.html" className="navbar-brand text-white">
            Next API
          </a>
        </div>
        <ul className="navbar-nav mr-auto d-none d-lg-block">
          <li>
            <span className="text-warning">| &nbsp; How to fetching API</span>
          </li>
        </ul>
      </nav>
      <hr />
    </>
  );
};

export default NavbarDetail;
