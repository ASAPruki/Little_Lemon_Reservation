import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      404 Not Found
      <Link to="/">
        <button>Home</button>
      </Link>
    </div>
  );
}
