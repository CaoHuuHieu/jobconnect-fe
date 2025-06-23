import { Pagination } from "antd";
import type { Organization } from "../../../../types/organization";
import { activateOrganization } from "../../../../api/organizationApi";
import { Popconfirm } from "antd";
type Props = {
  organizations: Organization[];
  page: number;
  total: number;
  setPage: (page: number) => void;
  loading: boolean;
  setOrganizations: React.Dispatch<React.SetStateAction<Organization[]>>;
};

const activeOrInactiveOrganization = async (org: Organization) => {
  try {
    await activateOrganization(org.id, org.status == 1 ? 0 : 1);
  } catch (error) {
    console.error("Error updating organization status:", error);
  }
};

export default function OrganizationTable({
  organizations,
  page,
  total,
  setPage,
  loading,
  setOrganizations,
}: Readonly<Props>) {
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
          {organizations.map((org, index) => (
            <tr key={org.id}>
              <td className="text-center">{index + 1}</td>
              <td className="flex gap-4">
                <img
                  className="w-[60px]"
                  src={org.orgLogo || "../public/image_001.png"}
                  alt="avatar"
                />
                <div>
                  <p className="">
                    Name: <span className="font-normal">{org.name}</span>
                  </p>
                  <p>Email: {org.email}</p>
                  <p>Address: {org.address}</p>
                </div>
              </td>
              <td>
                <p>
                  Website:
                  <a
                    href={org.website}
                    className="text-blue-500 ml-2 underline "
                    target="_blank"
                    rel="noreferrer"
                  >
                    {org.website}
                  </a>
                </p>
                <p>
                  Facebook:
                  <a
                    href={org.facebook}
                    className="text-blue-500 ml-2 underline "
                    target="_blank"
                    rel="noreferrer"
                  >
                    {org.website}
                  </a>
                </p>
                <p>
                  LinkedIn:
                  <a
                    href={org.linkedIn}
                    className="text-blue-500 ml-2 underline "
                    target="_blank"
                    rel="noreferrer"
                  >
                    {org.website}
                  </a>
                </p>
              </td>

              <td className="text-center">
                <a
                  href={`/admin/organizations/edit/${org.id}`}
                  className="cursor-pointer shadow rounded-2xl bg-blue-color flex items-center gap-2 justify-center text-white hover:bg-blue-500 "
                >
                  Edit
                </a>

                <Popconfirm
                  placement="topLeft"
                  title="Confirm Action"
                  description={`Are you sure you want to ${org.status === 0 ? "Active" : "Inactive"} this organization? `}
                  okText="Yes"
                  cancelText="No"
                  onConfirm={() => {
                    activeOrInactiveOrganization(org).then(() => {
                      setOrganizations((prev) =>
                        prev.map((o) =>
                          o.id === org.id
                            ? { ...o, status: org.status === 1 ? 0 : 1 }
                            : o
                        )
                      );
                    });
                  }}
                >
                  <p
                    className={`min-w-[60px] cursor-pointer mt-1 shadow rounded-2xl  flex items-center gap-2 justify-center text-white hover:bg-red-500 
                    ${org.status !== 0 ? "bg-red-400" : "bg-green-400"}
                    `}
                  >
                    {org.status === 0 ? "Active" : "Inactive"}
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
