import { NavStyles, Ul } from '../styles/navBarStyles';
import { Link } from "react-router-dom"; // importar Link, não Router, Routes, Route

function NavBar() {
  return (
    <NavStyles>
      <Ul>
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/score">Score</Link></li>
        <li><Link to="/ApiGet">ApiGet</Link></li>
        <li><Link to="/GetDev">GetDev</Link></li>
        <li><Link to="/CommentsAPI">Comments API</Link></li>
        <li><Link to="/JokeCategory">Joke Category</Link></li>
        <li><Link to="/ApiPost">Api Post</Link></li>
        <li><Link to="/MonTchat">Mon Tchat</Link></li>
      
      </Ul>
    </NavStyles>
  );
}

NavBar.displayName = 'NavBar';
export default NavBar;
