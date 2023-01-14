import "./_index.scss";
import React from "react";
import { Link } from "react-router-dom";
import routes from "../../../routes";
import LogoSmall from "../../../images/logo-solo-small.png";

export default function Header(props) {
  return (
    <div className="Header-wrapper">
      <img src={LogoSmall} alt="react-logo" />
      <div className="Header-links">
        {routes.map((r) => (
          <Link to={r.path} key={r.name}>
            <p>{r.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
