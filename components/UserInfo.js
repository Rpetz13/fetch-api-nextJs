const UserInfo = (props) => {
  return (
    <>
      <hr style={{ marginBottom: "5px" }} />
      <div className="row mt-2">
        <div className="col-3">
          <h5 className="text-muted">{props.keys}</h5>
        </div>
        <div className="col-9">
          <p>: {props.value}</p>
        </div>
      </div>
      <hr style={{ marginTop: "5px" }} />
    </>
  );
};

export default UserInfo;
