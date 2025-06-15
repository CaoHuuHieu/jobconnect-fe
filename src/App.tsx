import "./App.css";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import { AdminLayout } from "./layouts/admin/AdminLayout";
import OrganizationList from "./pages/admin/organization/list/OrganizationList";
import OrganizationForm from "./pages/admin/organization/OrganizationForm";

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
        </Route>

        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;
