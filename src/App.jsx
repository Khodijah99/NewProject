import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import SignupPage from "./Pages/SignupPage";
import SigninPage from "./Pages/SigninPage";
import ContactPage from "./Pages/ContactPage";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ABOUTUS" element={<AboutPage />} />
        <Route path="/CONTACTUS" element={<ContactPage />} />
        <Route path="/SIGNUP" element={<SignupPage />} />
        <Route path="/SIGNIN" element={<SigninPage />} />
      </Routes>
    </div>
  );
}

export default App;
