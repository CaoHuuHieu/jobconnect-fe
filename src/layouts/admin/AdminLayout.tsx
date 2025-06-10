import { Outlet } from "react-router-dom";
import AdminHeader from "../../components/admin/Header";
import LeftSideBar from "../../components/admin/LeftSideBar";

export function AdminLayout() {
  return (
    <>
      <AdminHeader />
      <div className="flex">
        <LeftSideBar />
        <Outlet />
      </div>
    </>
  );
}
