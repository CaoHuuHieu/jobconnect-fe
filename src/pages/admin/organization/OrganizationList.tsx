import { Pagination, Select } from "antd";
import { Button } from "../../../components/common/Button";
import { Input } from "antd";
import type { GetProps } from "antd";
import { FaEdit, FaLock, FaUnlockAlt } from "react-icons/fa";
import {} from "react-icons/fa";
import "./Organization.css";
import { FaUnlock } from "react-icons/fa6";

type SearchProps = GetProps<typeof Input.Search>;

const { Search } = Input;

const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
  console.log(info?.source, value);

const OrganizationList = () => {
  const handleFilterChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  return (
    <div className="w-full p-4 ">
      <div className="flex justify-between w-full border-gray-200">
        <p className="font-bold text-3xl text-blue-color">Organizations</p>
        <Button label="Create new" />
      </div>

      {/* FILTER   */}
      <div className=" flex mt-8 gap-7">
        <div>
          <p className="font-bold">Filter by</p>
          <Select
            defaultValue="id"
            style={{ width: 180 }}
            onChange={handleFilterChange}
            options={[
              { value: "id", label: "Id" },
              { value: "name", label: "Company Name" },
              { value: "email", label: "Email" },
            ]}
          />
        </div>
        <div>
          <p className="font-bold">Filter value</p>
          <Search
            placeholder="input search text"
            allowClear
            enterButton="Search"
            onSearch={onSearch}
          />
        </div>
      </div>

      {/* TABLE DATA */}
      <div className="mt-8 w-full">
        <table className="w-full">
          <tr>
            <th>#</th>
            <th className="min-w-[300px]">Information</th>
            <th>Contact</th>
            <th>Link</th>
            <th>Action</th>
          </tr>
          <tr>
            <td className="text-center">1</td>
            <td className="flex gap-4">
              <img className="w-[60px] " src="../public/image_001.png" alt="" />
              <p>
                <p className="font-bold">SmartDev LLC</p>
                <p>Da Nang</p>
              </p>
            </td>
            <td>
              <p>
                <span>Email: </span>
                <span>smartdevllc@smartdev.com</span>
              </p>
              <p>
                <span>Phone: </span>
                <span>0788556847</span>
              </p>
            </td>
            <td>
              <p>
                <a href="/">https://ant.design/components/table</a>
              </p>
              <p>
                <a href="/">https://ant.design/components/table</a>
              </p>
              <p>
                <a href="/">https://ant.design/components/table</a>
              </p>
            </td>
            <td className="text-center">
              <a
                href="#"
                className="border flex items-center gap-2 justify-center"
              >
                Edit
                <FaEdit />
              </a>
              <a href="#" className="flex items-center gap-2 justify-center">
                Active <FaUnlock />
              </a>
            </td>
          </tr>
        </table>
        <div className="flex justify-end mt-5">
          <Pagination defaultCurrent={1} total={50} />
        </div>
      </div>
    </div>
  );
};

export default OrganizationList;
