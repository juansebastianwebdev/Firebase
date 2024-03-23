import { Link } from "react-router-dom";
import Icons from "../assets/svg/Icons";

const Navbar = () => {
  return (
    <>
      <nav className="flex">
        <Link to="/">Home</Link>
        <Link to="/profile"> <Icons /> </Link>
        
      </nav>
    </>
  );
};

export default Navbar;
