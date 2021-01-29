import Link from "next/link";

const BackButton = (props) => {
  return (
    <div className="text-center mt-4 mb-5">
      <span className="mx-3">
        <i className="fa fa-angle-double-left"></i>
      </span>
      <Link
        href={{
          pathname: `/${props.back}`,
        }}
      >
        <a className="text-decoration-none" style={{ fontSize: "18px" }}>
          Back to {props.back}
        </a>
      </Link>
    </div>
  );
};

export default BackButton;
