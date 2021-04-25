import { Link } from "react-router-dom";
import "./index.css";

export default function NotAuth(props) {
  return (
    <>
      <span className="error-message">{props.error}</span>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Link to="/login" className="logBtn" style={{ fontSize: "1.5rem" }}>
          Login
        </Link>
      </div>
    </>
  );
}
