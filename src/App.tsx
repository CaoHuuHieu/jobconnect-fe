import "./App.css";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import { AdminLayout } from "./layouts/admin/AdminLayout";
import OrganizationList from "./pages/administrator/organization/list/OrganizationList";
import OrganizationForm from "./pages/administrator/organization/OrganizationForm";
import AdminList from "./pages/administrator/admin/AdminList";
import AdminForm from "./pages/administrator/admin/AdminForm";
import SignIn from "./layouts/sign_in/SignIn";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Navigate to="/admin/organizations" replace />}
        />

        <Route path="/admin" element={<AdminLayout />}>
          <Route path="organizations" element={<OrganizationList />} />
          <Route path="organizations/create" element={<OrganizationForm />} />
          <Route path="organizations/edit/:id" element={<OrganizationForm />} />

          <Route path="admins" element={<AdminList />} />
          <Route path="admins/create" element={<AdminForm />} />
          <Route path="admins/edit/:id" element={<AdminForm />} />
        </Route>
        <Route path="login" element={<SignIn />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;
