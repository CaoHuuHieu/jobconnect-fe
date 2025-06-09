import "./App.css";
import Home from "./layouts/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./layouts/sign_in/SignIn";
import EmployerPage from "./layouts/employer_page/EmployerPage";
import JobCreating from "./layouts/employer_page/JobCreate/JobCreating";
import EmployerAdminPage from "./layouts/employer_page/SideBar/SideBar";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/recruitment" element={<EmployerPage />} />
        <Route path="/post-job" element={<JobCreating />} />
        <Route path="/jobs" element={<EmployerAdminPage />} />
      </Routes>
    </Router>
  );
}

export default App;
