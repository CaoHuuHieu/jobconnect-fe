import { Button } from "../../../../components/common/Button";
import OrganizationFilter from "./OrganizationFilter";
import OrganizationTable from "./OrganizationTable";
import { useOrganizationList } from "./useOrganizationList";

import "../Organization.css";

const OrganizationList = () => {
  const {
    organizations,
    setOrganizations,
    loading,
    filterBy,
    setFilterBy,
    setFilterValue,
    page,
    setPage,
    total,
  } = useOrganizationList();

  return (
    <div className="grow p-4">
      <div className="flex justify-between w-full border-gray-200">
        <p className="font-bold text-3xl text-blue-color">Organizations</p>
        <a
          className="p-2 bg-blue-400 text-white font-bold rounded-2xl shadow hover:bg-blue-500"
          href="organizations/create"
        >
          Create new
        </a>
      </div>
      <OrganizationFilter
        filterBy={filterBy}
        setFilterBy={setFilterBy}
        setFilterValue={setFilterValue}
        setPage={setPage}
      />
      <OrganizationTable
        organizations={organizations}
        setOrganizations={setOrganizations}
        page={page}
        total={total}
        setPage={setPage}
        loading={loading}
      />
    </div>
  );
};

export default OrganizationList;
