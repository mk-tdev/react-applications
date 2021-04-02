import React from "react";

const Header = ({ title }) => {
  return <header>{title}</header>;
};

Header.defaultProps = {
  title: "Indecision App",
};

export default Header;
