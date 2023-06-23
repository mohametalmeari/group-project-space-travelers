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
      <h2 className={styles.navLogo}>
        <NavLink to="/">
          <img
            width="40"
            height="40"
            src="https://img.icons8.com/badges/48/saturn-planet.png"
            alt="saturn-planet"
          />
          Space Travelers Hub
        </NavLink>
      </h2>
      <ul className={styles.menu}>
        {links.map((link) => (
          <li className="pageLink" key={link.text}>
            <NavLink to={link.path}>
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </Nav>
  </Container>
);

export default Navbar;
