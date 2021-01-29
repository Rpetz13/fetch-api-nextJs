const Footer = () => {
  return (
    <footer
      style={{
        position: "fixed",
        bottom: "0",
        right: "0",
        left: "0",
      }}
    >
      <div className="container-fluid bg-primary">
        <div className="row border-top justify-content-center align-items-center pt-2 pb-2">
          <div className="col-auto text-white">
            Created by Rico Andrian Firmansyah
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
