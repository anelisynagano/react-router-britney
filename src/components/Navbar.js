import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <ul>
      <Link className="navbar-option" to="/"><li>Home</li></Link>
      <Link className="navbar-option" to="/albums"><li>Albums</li></Link>
      <Link className="navbar-option" to="/contact"><li>Contact</li></Link>
      
    </ul>
  );
};

export default Navbar;
