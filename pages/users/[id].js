import BackButton from "../../components/BackButton";
import NavbarDetail from "../../components/NavbarDetail";
import Footer from "../../components/Footer";
import UserInfo from "../../components/UserInfo";

const DetailUser = ({ user, todo, album, post }) => {
  return (
    <>
      <NavbarDetail />

      <div className="container">
        <h2 className="text-center my-3">User's Details</h2>
        <div className="row mb-3">
          <div className="col-sm-6 col-lg-4">
            <div className="card" style={{ width: "90%", height: "580px" }}>
              <img
                src="https://via.placeholder.com/150x200"
                className="card-img-top mx-auto"
                alt=""
              />
              <div className="card-body">
                <h5 className="card-title text-center">{user.name}</h5>
                <p className="text-muted text-center">{user.username}</p>
                <hr />
                <div className="float-right">
                  <span className="mx-2 text-muted">Posts : {post.length}</span>
                  <span className="mx-2 text-muted">
                    Albums : {album.length}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-8 border-left">
            <UserInfo keys="Email" value={user.email} />
            <UserInfo keys="Phone" value={user.phone} />
            <UserInfo keys="Company" value={user.company.name} />
            <UserInfo keys="Website" value={user.website} />
            <UserInfo keys="Street" value={user.address.street} />
            <UserInfo keys="Suite" value={user.address.suite} />
            <UserInfo keys="City" value={user.address.city} />
            <UserInfo keys="Zipcode" value={user.address.zipcode} />
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-12">
            <table className="table table-bordered table-striped">
              <thead className="bg-primary text-white text-center">
                <tr>
                  <th>Todos</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {todo.map((todo, index) => {
                  // Menyeleksi data todos
                  return (
                    <tr key={index}>
                      <td>{todo.title.toUpperCase()}</td>
                      <td>{todo.completed ? "Completed" : "Not Completed"}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <BackButton back="users" />
      <Footer />
    </>
  );
};

// export const getServerSideProps = async ({ params }) => {
//   const us = await fetch(
//     `https://jsonplaceholder.typicode.com/users/${params.id}`
//   );
//   const user = await us.json();

//   const to = await fetch(
//     `https://jsonplaceholder.typicode.com/users/${params.id}/todos`
//   );
//   const todo = await to.json();

//   const al = await fetch(
//     `https://jsonplaceholder.typicode.com/users/${params.id}/albums`
//   );
//   const album = await al.json();

//   const po = await fetch(
//     `https://jsonplaceholder.typicode.com/users/${params.id}/posts`
//   );
//   const post = await po.json();

//   return {
//     props: {
//       user,
//       todo,
//       post,
//       album,
//     },
//   };
// };

export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  const paths = users.map((user) => ({
    params: { id: user.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const us = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  const user = await us.json();

  const to = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}/todos`
  );
  const todo = await to.json();

  const al = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}/albums`
  );
  const album = await al.json();

  const po = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}/posts`
  );
  const post = await po.json();

  return {
    props: {
      user,
      todo,
      post,
      album,
    },
  };
}

export default DetailUser;
