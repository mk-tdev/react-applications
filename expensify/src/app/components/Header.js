import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { startLogout } from "../actions/auth";

export const Header = ({ startLogout, auth, history }) => {
  useEffect(() => {
    if (auth) {
      if (history.location.pathname === "/") history.push("/home");
    } else {
      history.push("/");
    }
  }, [auth]);

  return (
    <header className="header">
      <span>Expensify</span>

      {auth ? (
        <div>
          <NavLink to="/home" activeClassName="is-active" exact>
            Home
          </NavLink>
          <NavLink to="/create" activeClassName="is-active">
            Create
          </NavLink>
          <button onClick={startLogout}>Logout</button>
        </div>
      ) : null}

      {/* <NavLink to="/edit" activeClassName="is-active">
        Edit
      </NavLink> */}
      {/* {auth && <button onClick={startLogout}>Logout</button>} */}
      {/* <NavLink to="/help" activeClassName="is-active">
        Help
      </NavLink> */}
    </header>
  );
};

const mapStateToProps = (state, props) => {
  return {
    auth: state.auth.isAuthenticated,
  };
};

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
