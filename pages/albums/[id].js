import BackButton from "../../components/BackButton";
import Footer from "../../components/Footer";
import NavbarDetail from "../../components/NavbarDetail";

const DetailAlbums = ({ album, photo, user }) => {
  return (
    <>
      <NavbarDetail title="Album Detail" />

      <div className="container-fuild">
        <h2 className="text-muted text-center">Album's Details</h2>
        <div className="row">
          <div className="col-12">
            <div className="card mx-5 my-4">
              <div className="card-header bg-primary text-white">
                <blockquote className="blockquote text-center">
                  <p className="mb-0">{album.title.toUpperCase()}</p>
                  {/* Mapping data users */}
                  {user.map((user, index) => {
                    // Menyeleksi data users
                    if (user.id == album.userId) {
                      return (
                        <footer
                          key={index}
                          className="blockquote-footer text-white"
                        >
                          {user.name}
                        </footer>
                      );
                    }
                  })}
                </blockquote>
              </div>
              <div className="card-body">
                <div className="row">
                  {/* Mapping data photo */}
                  {photo.map((photo, index) => {
                    return (
                      <div
                        key={index}
                        className="col-sm-3 col-md-2 col-lg-1 text-center"
                      >
                        <figure className="figure">
                          <img
                            src={photo.thumbnailUrl}
                            className="figure-img img-fluid rounded"
                            alt=""
                            style={{ maxHeight: "150px" }}
                          />
                        </figure>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BackButton back="albums" />

      <Footer />
    </>
  );
};

// Mengambil Data
export async function getServerSideProps({ params }) {
  const al = await fetch(
    `https://jsonplaceholder.typicode.com/albums/${params.id}`
  );
  const album = await al.json();

  const pho = await fetch(
    `https://jsonplaceholder.typicode.com/albums/${params.id}/photos`
  );
  const photo = await pho.json();

  const us = await fetch("https://jsonplaceholder.typicode.com/users");
  const user = await us.json();

  return {
    props: {
      album,
      photo,
      user,
    },
  };
}

export default DetailAlbums;
