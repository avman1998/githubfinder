import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="flex gap-5">
      <Link to="/">
        {" "}
        <h1>Home</h1>
      </Link>
      <Link to="/about">
        {" "}
        <h1>About</h1>
      </Link>
      <Link to="/contact">
        {" "}
        <h1>Contact</h1>
      </Link>
    </div>
  );
};

export default Header;
