import { NavLink } from 'react-router-dom';

const links = [
  { path: '/', text: 'Rockets' },
  { path: 'missions', text: 'Missions' },
  { path: 'my-profile', text: 'My Profile' },
];

const Navbar = () => (
  <nav>
    <h1>
      <NavLink to="/">
        Space Travelers Hub
      </NavLink>
    </h1>
    <ul className="menu">
      {links.map((link) => (
        <li className="page-link" key={link.text}>
          <NavLink
            to={link.path}
          >
            {link.text}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);
export default Navbar;
