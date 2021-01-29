import { useRouter } from "next/router";
import BackButton from "../../components/BackButton";
import NavbarDetail from "../../components/NavbarDetail";
import Footer from "../../components/Footer";

const DetailUser = ({ users, todos }) => {
  // Menangkap user id yang dikirim ke URL
  const router = useRouter();
  const userId = router.query.detail;

  return (
    <>
      <NavbarDetail title="User Detail" />
      <div className="text-center mt-3 mb-4">
        <h2 className="text-muted">User's Details</h2>
      </div>
      <div className="container mt-4 mb-3">
        {/* Mapping data users */}
        {users.map((user, index) => {
          // Menyeleksi user
          if (user.id == userId) {
            return (
              <div key={index} className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header bg-primary text-white">
                      <div className="row">
                        <div className="col-8">
                          <p className="card-title">
                            {user.name.toUpperCase()}
                          </p>
                        </div>
                        <div className="col-4">
                          <p className="card-title">
                            <strong>Username :</strong> {user.username}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-sm-5 col-md-3">
                          <img
                            src="https://via.placeholder.com/300"
                            style={{ width: "100%", height: "300px" }}
                          ></img>
                        </div>
                        <div className="col-sm-7 col-md-9">
                          <div className="row" style={{ fontSize: "18px" }}>
                            <div className="col-4">
                              <p className="text-muted">FullName</p>
                            </div>
                            <div className="col-8">
                              <p>:{user.name}</p>
                            </div>
                          </div>
                          <hr />
                          <div className="row" style={{ fontSize: "18px" }}>
                            <div className="col-4">
                              <p className="text-muted">Email</p>
                            </div>
                            <div className="col-8">
                              <p>:{user.email}</p>
                            </div>
                          </div>
                          <hr />
                          <div className="row" style={{ fontSize: "18px" }}>
                            <div className="col-4">
                              <p className="text-muted">Phone</p>
                            </div>
                            <div className="col-8">
                              <p>:{user.phone}</p>
                            </div>
                          </div>
                          <hr />
                          <div className="row" style={{ fontSize: "18px" }}>
                            <div className="col-4">
                              <p className="text-muted">Address</p>
                            </div>
                            <div className="col-8">
                              <p>
                                :{user.address.street}, {user.address.suite},
                                {user.address.city}, {user.address.zipcode}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer text-muted">
                      <div className="row">
                        <div className="col-6">
                          <p>Company : {user.company.name}</p>
                        </div>
                        <div className="col-6">
                          <p>
                            <i className="fa fa-globe"></i> {user.website}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        })}

        <div className="row mt-3">
          <div className="col-12">
            <table className="table table-bordered table-striped">
              <thead className="bg-primary text-white text-center">
                <tr>
                  <th>Todos</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {/* Mappind data todos */}
                {todos.map((todo, index) => {
                  // Menyeleksi data todos
                  if (todo.userId == userId) {
                    return (
                      <tr key={index}>
                        <td>{todo.title.toUpperCase()}</td>
                        <td>
                          {todo.completed ? "Completed" : "Not Completed"}
                        </td>
                      </tr>
                    );
                  }
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

// MEngambil DATA
export async function getServerSideProps() {
  const us = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const users = await us.json();

  const to = await fetch(`https://jsonplaceholder.typicode.com/todos`);
  const todos = await to.json();

  return {
    props: {
      users,
      todos,
    },
  };
}
export default DetailUser;
