import Link from "next/link";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const Albums = ({ albums }) => {
  return (
    <>
      <Navbar title="Albums" />

      <div className="container">
        <div className="text-center text-muted mt-3 mb-2">
          <h2>Albums</h2>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="card mt-3 mb-5">
              <div className="card-header bg-primary">
                <h5 className="card-title pt-3 text-white">List of Albums</h5>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-12">
                    <table
                      className="table table-striped"
                      style={{ width: "100%" }}
                    >
                      <tbody style={{ height: "20px" }}>
                        {/* Mapping data albums */}
                        {albums.map((data, index) => {
                          return (
                            <tr key={index} className="my-2">
                              <td className="px-2">#</td>
                              <td
                                style={{ fontSize: "18px" }}
                                className="border-left px-3"
                              >
                                <h6>{data.title.toUpperCase()}</h6>
                              </td>
                              <td
                                style={{ fontSize: "18px" }}
                                className="text-center border-left"
                              >
                                {/* Membuat dynamic looping */}
                                <Link
                                  href={{
                                    // Mempassing albums id ke url
                                    pathname: "/albums/" + `${data.id}`,
                                  }}
                                >
                                  <a className="text-muted text-decoration-none">
                                    See Photos
                                  </a>
                                </Link>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/albums");
  const albums = await res.json();

  return {
    props: {
      albums,
    },
  };
}
export default Albums;
