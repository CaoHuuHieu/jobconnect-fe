import type { Admin } from "../../../types/admin/admin";
import { Popconfirm, Pagination } from "antd";
import { activateAdmin } from "../../../api/adminApi";

type AdminTableProps = {
  admins: Admin[];
  page: number;
  total: number;
  setPage: (page: number) => void;
  loading: boolean;
  setAdmins: React.Dispatch<React.SetStateAction<Admin[]>>;
};

const activeOrInactiveAdmin = async (admin: Admin) => {
  try {
    await activateAdmin(admin.id, admin.status == 1 ? 0 : 1);
  } catch (error) {
    console.error("Error updating organization status:", error);
  }
};

export default function AdminTable({
  admins,
  page,
  total,
  setPage,
  loading,
  setAdmins,
}: Readonly<AdminTableProps>) {
  return (
    <div className="mt-8 w-full">
      <table className="w-full">
        <thead>
          <tr>
            <th>#</th>
            <th className="min-w-[300px]">Information</th>
            <th>Contact</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {admins.map((admin, index) => (
            <tr key={admin.id}>
              <td className="text-center">{index + 1}</td>
              <td className="flex gap-4">
                <img
                  className="w-[60px]"
                  src={admin.avt || "../public/image_001.png"}
                  alt="avatar"
                />
                <div>
                  <p className="">
                    Name: <span className="font-normal">{admin.fullName}</span>
                  </p>
                  <p>Employee Id: {admin.employeeId ?? "No"}</p>
                  <p>Company: {admin.organization.name}</p>
                </div>
              </td>
              <td>
                <p>Phone: {admin.phoneNumber ?? "No"}</p>
                <p>Email: {admin.email ?? "No"}</p>
              </td>

              <td className="text-center">
                <a
                  href={`/admin/admins/edit/${admin.id}`}
                  className="cursor-pointer shadow rounded-2xl bg-blue-color flex items-center gap-2 justify-center text-white hover:bg-blue-500 "
                >
                  Edit
                </a>

                <Popconfirm
                  placement="topLeft"
                  title="Confirm Action"
                  description={`Are you sure you want to ${admin.status === 0 ? "Active" : "Inactive"} this organization? `}
                  okText="Yes"
                  cancelText="No"
                  onConfirm={() => {
                    activeOrInactiveAdmin(admin).then(() => {
                      setAdmins((prev) =>
                        prev.map((ad) =>
                          ad.id === admin.id
                            ? { ...ad, status: admin.status === 1 ? 0 : 1 }
                            : ad
                        )
                      );
                    });
                  }}
                >
                  <p
                    className={`min-w-[60px] cursor-pointer mt-1 shadow rounded-2xl  flex items-center gap-2 justify-center text-white hover:bg-red-500 
                    ${admin.status !== 0 ? "bg-red-400" : "bg-green-400"}
                    `}
                  >
                    {admin.status === 0 ? "Active" : "Inactive"}
                  </p>
                </Popconfirm>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-end mt-5">
        <Pagination
          current={page + 1}
          pageSize={7}
          total={total}
          onChange={(p) => setPage(p - 1)}
          loading={loading}
        />
      </div>
    </div>
  );
}
