import { Select, Input, Button } from "antd";
import type { Role } from "../../../types/role";
import { useEffect, useState } from "react";
import { getRoles } from "../../../api/roleApi";

const { Search } = Input;

type Props = {
  filterBy: string;
  setFilterBy: (value: string) => void;
  setFilterValue: (value: string) => void;
  setPage: (page: number) => void;
};

export default function AdminFilter({
  filterBy,
  setFilterBy,
  setFilterValue,
  setPage,
}: Readonly<Props>) {
  const handleFilterChange = (value: string) => setFilterBy(value);
  const handleSearch = (value: string) => {
    setPage(0);
    setFilterValue(value);
  };

  const [roles, setRoles] = useState<Role[]>([]);

  useEffect(() => {
    const role = async () => {
      const response = await getRoles();
      setRoles(response.data ?? []);
    };
    role();
  }, []);
  return (
    <div className="flex mt-6 gap-7">
      <div>
        <p className="font-bold">Role</p>
        <Select
          value={filterBy}
          style={{ width: 180 }}
          onChange={handleFilterChange}
          options={roles.map((role) => ({
            value: role.code,
            label: role.name,
          }))}
        />
      </div>
      <div>
        <p className="font-bold">Filter by</p>
        <Select
          value={filterBy}
          style={{ width: 180 }}
          onChange={handleFilterChange}
          options={[
            { value: "id", label: "Id" },
            { value: "name", label: "Name" },
            { value: "email", label: "Email" },
            { value: "employeeId", label: "Employee Id" },
          ]}
        />
      </div>
      <div>
        <p className="font-bold">Filter value</p>
        <Search
          placeholder="Search..."
          allowClear
          enterButton={
            <Button
              type="primary"
              style={{
                backgroundColor: "var(--color-blue-color)",
              }}
            >
              Search
            </Button>
          }
          onSearch={handleSearch}
        />
      </div>
    </div>
  );
}
