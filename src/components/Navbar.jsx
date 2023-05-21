import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="Nav">
      <div className="TopMenu">
        <Link to="/">
          {" "}
          <p className="TopMenuItem">FAQs</p>
        </Link>
        <Link to="/SIGNIN">
          {" "}
          <p className="TopMenuItem">Sign in</p>{" "}
        </Link>
        <Link to="/SIGNUP">
          {" "}
          <p className="TopMenuItem">Sign up</p>
        </Link>
      </div>
      <div className="Menu">
        <Link to="/">
          {" "}
          <p className="MenuItem">HOME</p>
        </Link>
        <Link to="/ABOUTUS">
          {" "}
          <p className="MenuItem">ABOUT US</p>{" "}
        </Link>
        <Link to="/CONTACTUS">
          {" "}
          <p className="MenuItem">CONTACT US</p>
        </Link>
        <Link to="/SIGNUP ">
          {" "}
          <p className="MenuItem">SIGNUP </p>
        </Link>
      </div>
    </div>
  );
}
export default Navbar;
