import { Select, Input, Button } from "antd";

const { Search } = Input;

type Props = {
  filterBy: string;
  setFilterBy: (value: string) => void;
  setFilterValue: (value: string) => void;
  setPage: (page: number) => void;
};

export default function OrganizationFilter({
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

  return (
    <div className="flex mt-6 gap-7">
      <div>
        <p className="font-bold">Filter by</p>
        <Select
          value={filterBy}
          style={{ width: 180 }}
          onChange={handleFilterChange}
          options={[
            { value: "id", label: "Id" },
            { value: "name", label: "Company Name" },
            { value: "code", label: "Code" },
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
