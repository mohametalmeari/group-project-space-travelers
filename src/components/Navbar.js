import { NavLink } from 'react-router-dom';
import { Nav, Container } from 'react-bootstrap';
import styles from './Navbar.module.css';

const links = [
  { path: '/', text: 'Rockets' },
  { path: '/missions', text: 'Missions' },
  { path: '/my-profile', text: 'My Profile' },
];

const Navbar = () => (
  <Container>
    <Nav className={styles.navContainer}>
      <h2 className="nav-logo">
        <NavLink className={styles.navlinkContainer} to="/">
          <img
            width="40"
            height="40"
            src="https://img.icons8.com/badges/48/saturn-planet.png"
            alt="saturn-planet"
          />
          Space Travelers Hub
        </NavLink>
      </h2>
      <ul className={`menu ${styles.navLinkRow}`}>
        {links.map((link) => (
          <li className="page-link" key={link.text}>
            <NavLink className="page-link" activeClassName={styles.active} to={link.path}>
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </Nav>
  </Container>
);

export default Navbar;
