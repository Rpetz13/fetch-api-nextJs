import Navbar from "../../components/Navbar";
import TableUser from "../../components/TableUser";
import Footer from "../../components/Footer";

const Users = ({ users }) => {
  return (
    <>
      <Navbar title="Users" />
      <div className="mt-4 container">
        <h2 className="text-muted text-center mb-3">Table Users</h2>
        {/* Memanggil tableUser dengan mengirimkan propsnya */}
        <TableUser data={users} />
      </div>
      <Footer />
    </>
  );
};

// Mengambil data dengan static props
export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  return {
    props: {
      users,
    },
  };
}

export default Users;
