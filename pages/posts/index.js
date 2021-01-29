import CardPost from "../../components/CardPost";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Posts = ({ posts }) => {
  return (
    <>
      <Navbar title="Post" />
      <div className="mx-4">
        <div className="text-muted mt-3 text-center">
          <h2>Posts</h2>
        </div>
        {/* Memanggil Card Post dengan mengirim propsnya */}
        <CardPost data={posts} />
      </div>

      <Footer />
    </>
  );
};

// Mengambil data post
export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}

export default Posts;
