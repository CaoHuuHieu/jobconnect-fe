import { Outlet } from "react-router-dom";
import AdminHeader from "../../components/admin/Header";
import LeftSideBar from "../../components/admin/LeftSideBar";

export function AdminLayout() {
  return (
    <div className="flex flex-col h-screen">
      <AdminHeader />
      <div className="flex flex-1">
        <LeftSideBar />
        <Outlet />
      </div>
    </div>
  );
}
