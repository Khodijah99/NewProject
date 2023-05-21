import logo from "../images/logo.png";
function Header() {
  return (
    <div>
      <div className="Header">
        <img src={logo} className="App-Logo" />
        <h1>E-TECH COMPUTER INSTITUTE</h1>
      </div>
      <div>
        {" "}
        <marquee>Discover the lastest innovation in ICT......</marquee>{" "}
      </div>
    </div>
  );
}
export default Header;
