import Link from "next/link";

const TableUser = (props) => {
  let dataTable = props.data;
  let no = 1;

  // let userId;
  // const changeUserId = (id) => {
  //   userId = id;
  //   dataTable.map((data) => {
  //     if (data.id === userId) {
  //       let userDetail = data;
  //       console.log(userDetail);
  //       return userDetail;
  //     }
  //   });
  // };

  return (
    <>
      <div className="row mt-3">
        <div className="col-12">
          <table className="table table-bordered table-striped">
            <thead className="bg-primary text-white">
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Username</th>
                <th>Detail</th>
              </tr>
            </thead>
            <tbody>
              {/* Mapping data */}
              {dataTable.map((data, index) => {
                return (
                  <tr key={index}>
                    <td>{no++}</td>
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                    <td>{data.username}</td>
                    <td>
                      {/* Membuat dynamic routing */}
                      <Link
                        href={{
                          // Mempassing user id ke url
                          pathname: "/users/" + `${data.id}`,
                        }}
                      >
                        <a className="text-decoration-none">See Details</a>
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      {/* {dataTable.map((data, index) => {
        if (data.id == userId) {
          return <DetailUser data={data} />;
        }
      })} */}
      {/* <DetailUser data={} /> */}
    </>
  );
};

export default TableUser;
