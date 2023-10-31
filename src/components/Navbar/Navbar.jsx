import { NavLink } from "react-router-dom";

import css from "./Navbar.module.css";

const Navbar = ({ pageInformation }) => {
  const links = pageInformation
    .sort(({ order: o1 }, { order: o2 }) => o1 - o2)
    .map(({ id, title }) => {
      return (
        <NavLink key={id} to={`/${id}`} className={css.link}>
          {title}
        </NavLink>
      );
    });

  return <ul className={css.navbarWrap}>{links}</ul>;
};

export default Navbar;
