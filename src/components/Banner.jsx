import banner from "../images/bg1.jpeg";
function Banner() {
  return (
    <div className="Content">
      <img src={banner} className="Banner" />

      <div class="intro">
        <h3>Are You Looking For ........</h3>
        <li>A reliable computer institute.</li>
        <li>
          A computer center that offers major courses in information technology.
        </li>
        <li>An online computer training program.</li>
        <li>A computer institute with a condusive environment.</li>
        <li>A compuer insitute with optimal practicals.</li>
        <p>Ans="yes",then you have just hit the right spot.</p>
        <p>
          <a href="#">Click here for more information.</a>
        </p>
      </div>
    </div>
  );
}
export default Banner;
