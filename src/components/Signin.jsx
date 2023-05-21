import { Link } from "react-router-dom";
function Signin() {
  return (
    <div class="login">
      <h2>Login</h2>
      <form>
        <p>E-mail</p>
        <p>
          {" "}
          <input
            type="email"
            name="email"
            placeholder="Enter your email address."
          />
        </p>
        <p>Password </p>
        <p>
          {" "}
          <input
            type="password"
            name="password"
            placeholder="Enter your password."
          />{" "}
        </p>
        <div class="click">
          <p>
            {" "}
            <input type="submit" name="submit" value="Signin" />{" "}
          </p>
        </div>
        <div class="new">
          <p>Create A New Account</p>
          <p>
            {" "}
            <Link to="/SIGNUP">
              {" "}
              <input type="button" name="Sign" value="Signup" />
            </Link>{" "}
          </p>
        </div>
      </form>
    </div>
  );
}
export default Signin;
