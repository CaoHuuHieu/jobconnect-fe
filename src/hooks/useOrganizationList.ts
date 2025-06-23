import { useEffect, useState } from "react";
import { getOrganizations } from "../api/organizationApi";

export function useOrganizationList() {
  const [organizations, setOrganizations] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [filterBy, setFilterBy] = useState("id");
  const [filterValue, setFilterValue] = useState("");
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);

  const fetchOrganizations = async () => {
    try {
      setLoading(true);
      console.log("Fetching organizations with filters:", {
        page,
        filterBy,
        filterValue,
      });
      const res = await getOrganizations({
        page,
        size: 7,
        orderBy: "createdAt",
        sort: "DESC",
        searchValue: filterValue,
        searchBy: filterBy,
      });
      console.log(res);

      setOrganizations(res.data ?? []);
      setTotal(res.totalElement ?? 0);
    } catch (error) {
      console.error("Failed to fetch organizations:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchOrganizations();
  }, [page, filterValue]);

  return {
    organizations,
    setOrganizations,
    loading,
    filterBy,
    setFilterBy,
    filterValue,
    setFilterValue,
    page,
    setPage,
    total,
  };
}
