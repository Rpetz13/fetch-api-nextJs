import Link from "next/link";

const CardPost = (props) => {
  let posts = props.data;

  return (
    <div className="row mt-3">
      {/* Mapping data posts */}
      {posts.map((data, index) => {
        return (
          <div key={index} className="col-6">
            <div className="card mx-3 my-3" style={{ minHeight: "200px" }}>
              <div
                className="card-header bg-primary"
                style={{ height: "80px" }}
              >
                <div className="row">
                  <div className="col-9">
                    <p className="card-title text-white">
                      <strong>{data.title.toUpperCase()}</strong>
                    </p>
                  </div>
                  <div className="col-3 float-right">
                    {/* MEmbuat dynamic routing */}
                    <Link
                      href={{
                        // Mempassing post id ke URl
                        pathname: "/posts/" + `${data.id}`,
                      }}
                    >
                      <a className="btn btn-outline-light">See Comments</a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <p>{data.body}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardPost;
