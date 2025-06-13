import { Nav, Ul } from '../styles/navBarStyles';
import { Link } from "react-router-dom"; // importar Link, não Router, Routes, Route

function NavBar() {
  return (
    <Nav>
      <Ul>
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/score">Score</Link></li>
        <li><Link to="/ApiGet">ApiGet</Link></li>
        <li><Link to="/GetDev">GetDev</Link></li>
      </Ul>
    </Nav>
  );
}

NavBar.displayName = 'NavBar';
export default NavBar;
