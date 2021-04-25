import { useHistory } from "react-router-dom";

import "./index.css";

export default function Auth(prop) {
  let history = useHistory();

  const logoutHandler = () => {
    localStorage.removeItem("authToken");
    history.push("/login");
  };

  return (
    <>
      <div className="container">
        <div className="above-content">
          <div className="greeting">
            Welcome <span className="colored">{prop.userName}</span>
          </div>
          <button onClick={logoutHandler} className="logBtn">
            Logout
          </button>
        </div>
        <div className="content">
          <h1>
            The Next <span className="colored">Dimension</span>
          </h1>

          <p>
            <span className="colored">Journey into the next </span> dimension
            with particles
          </p>
        </div>
      </div>
    </>
  );
}
