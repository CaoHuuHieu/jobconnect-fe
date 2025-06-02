import "./App.css";
import Home from "./layouts/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./layouts/sign_in/SignIn";
import EmployerPage from "./layouts/employer_page/EmployerPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/recruitment" element={<EmployerPage />} />
      </Routes>
    </Router>
  );
}

export default App;
