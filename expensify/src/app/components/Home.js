import React from "react";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <NavLink to="/edit/2" activeClassName="is-active" exact>
        Help
      </NavLink>
    </div>
  );
}

export default Home;
