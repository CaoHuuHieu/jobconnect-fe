import { useAdminList } from "../../../hooks/useAdminList";
import AdminFilter from "./AdminFilter";
import AdminTable from "./AdminTable";

const AdminList = () => {
  const {
    admins,
    setAdmins,
    loading,
    filterBy,
    setFilterBy,
    setFilterValue,
    page,
    setPage,
    total,
  } = useAdminList();

  return (
    <div className="grow p-4">
      <div className="flex justify-between w-full border-gray-200">
        <p className="font-bold text-3xl text-blue-color">Admins</p>
        <a
          className="p-2 bg-blue-color text-white font-bold rounded-xl shadow hover:bg-blue-500"
          href="admins/create"
        >
          Create new
        </a>
      </div>
      <AdminFilter
        filterBy={filterBy}
        setFilterBy={setFilterBy}
        setFilterValue={setFilterValue}
        setPage={setPage}
      />
      <AdminTable
        admins={admins}
        setAdmins={setAdmins}
        page={page}
        total={total}
        setPage={setPage}
        loading={loading}
      />
    </div>
  );
};

export default AdminList;
