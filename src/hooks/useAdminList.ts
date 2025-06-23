import { useEffect, useState } from "react";
import type { Admin } from "../types/admin/admin";
import { getAdmins } from "../api/adminApi";

export function useAdminList() {
  const [admins, setAdmins] = useState<Admin[]>([]);
  const [loading, setLoading] = useState(false);
  const [filterBy, setFilterBy] = useState("id");
  const [filterValue, setFilterValue] = useState("");
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);

  const fetchAdmins = async () => {
    try {
      setLoading(true);
      const res = await getAdmins({
        page,
        size: 7,
        orderBy: "createdAt",
        sort: "DESC",
        searchValue: filterValue,
        searchBy: filterBy,
      });
      console.log(res);

      setAdmins(res.data ?? []);
      setTotal(res.totalElement ?? 0);
    } catch (error) {
      console.error("Failed to fetch organizations:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchAdmins();
  }, [page, filterValue]);

  return {
    admins,
    setAdmins,
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
