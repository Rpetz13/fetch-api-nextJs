import { useRouter } from "next/router";
import BackButton from "../../components/BackButton";
import Footer from "../../components/Footer";
import NavbarDetail from "../../components/NavbarDetail";

const DetailAlbums = ({ albums, photos, users }) => {
  // menangkap album id yang dikirim ke url
  const router = useRouter();
  const albumId = router.query.detail;

  return (
    <>
      <NavbarDetail title="Album Detail" />

      <div className="container-fuild">
        <h2 className="text-muted text-center">Album's Details</h2>
        <div className="row">
          <div className="col-12">
            <div className="card mx-5 my-4">
              <div className="card-header bg-primary text-white">
                {/* Mapping data albums */}
                {albums.map((album, index) => {
                  // Menyeleksi data album
                  if (album.id == albumId) {
                    return (
                      <blockquote
                        key={index}
                        className="blockquote text-center"
                      >
                        <p className="mb-0">{album.title.toUpperCase()}</p>
                        {/* Mapping data users */}
                        {users.map((user, index) => {
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
                    );
                  }
                })}
              </div>
              <div className="card-body">
                <div className="row">
                  {/* Mapping data photo */}
                  {photos.map((photo, index) => {
                    // MEnyeleksi data photo
                    if (photo.albumId == albumId) {
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
                    }
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
export async function getServerSideProps() {
  const al = await fetch("https://jsonplaceholder.typicode.com/albums");
  const albums = await al.json();

  const pho = await fetch("https://jsonplaceholder.typicode.com/photos");
  const photos = await pho.json();

  const us = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await us.json();

  return {
    props: {
      albums,
      photos,
      users,
    },
  };
}

export default DetailAlbums;
