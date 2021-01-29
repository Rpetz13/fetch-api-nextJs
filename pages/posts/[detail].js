import { useRouter } from "next/router";
import NavbarDetail from "../../components/NavbarDetail";
import BackButton from "../../components/BackButton";
import Footer from "../../components/Footer";

const DetailPost = ({ posts, comments, users }) => {
  // Menangkap post id yang dikirim ke url
  const router = useRouter();
  const postId = router.query.detail;

  return (
    <>
      <NavbarDetail title="Post Detail" />

      <div className="container">
        <div className="text-muted">
          <h2 className="my-3">Post' Details</h2>
        </div>
        {/* Mapping data post */}
        {posts.map((post, index) => {
          // Menyeleksi data post
          if (post.id == postId) {
            return (
              <div key={index} className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header bg-primary">
                      <h4 className="card-title text-center text-white">
                        {post.title.toUpperCase()}
                      </h4>
                    </div>
                    <div className="card-body">
                      <div className="row mb-3">
                        <div className="col-8 border-right">
                          <h5>Description :</h5>
                          <p>{post.body}</p>
                        </div>
                        {/* Mapping data users */}
                        {users.map((user, index) => {
                          // Menyeleksi data users
                          if (user.id == post.userId) {
                            return (
                              <div key={index} className="col-4">
                                <h5>Author:</h5>
                                <p>{user.name}</p>
                              </div>
                            );
                          }
                        })}
                      </div>
                      <hr />
                      <div>
                        <h5 className="text-center text-muted border-bottom py-3">
                          Comments
                        </h5>
                        {/* Mapping data comment */}
                        {comments.map((comment, index) => {
                          // Menyeleksi data comment
                          if (comment.postId == post.id) {
                            return (
                              <div key={index} className="row mt-2">
                                <div className="col-12 border-bottom">
                                  <h6 className="mx-2">
                                    {comment.name.toUpperCase()}
                                  </h6>
                                  <p className="mx-2">{comment.body}</p>
                                  <span className="float-right">
                                    {comment.email}
                                  </span>
                                </div>
                              </div>
                            );
                          }
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>

      <BackButton back="posts" />

      <Footer />
    </>
  );
};

// Mengambil Data
export async function getServerSideProps() {
  const po = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await po.json();

  const co = await fetch("https://jsonplaceholder.typicode.com/comments");
  const comments = await co.json();

  const us = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await us.json();

  return {
    props: {
      posts,
      comments,
      users,
    },
  };
}
export default DetailPost;
