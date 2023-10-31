import { NavLink } from "react-router-dom";

const Navbar = ({ pageInformation }) => {
  const links = pageInformation
    .sort(({ order: o1 }, { order: o2 }) => o1 - o2)
    .map(({ id, title }) => {
      return (
        <NavLink key={id} to={`/${id}`}>
          {title}
        </NavLink>
      );
    });

  return <ul>{links}</ul>;
};

export default Navbar;
