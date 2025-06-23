import axios from "axios";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getAdmins = async (
  params: {
    page?: number;
    size?: number;
    sort?: string;
    orderBy?: string;
    searchValue: string;
    searchBy?: string;
  } | null
) => {
  const res = await axios.get(`${API_BASE_URL}admins`, { params });
  return res.data;
};

export const createAdmin = async (data: any) => {
  const res = await axios.post(`${API_BASE_URL}admins`, data);
  return res.data;
};

export const updateAdmin = async (id: string, data: any) => {
  const res = await axios.put(`${API_BASE_URL}admins/${id}`, data);
  return res.data;
};

export const getAdminById = async (id: string) => {
  const res = await axios.get(`${API_BASE_URL}admins/${id}`);
  return res.data;
};

export const activateAdmin = async (id: string, status: number) => {
  const res = await axios.put(`${API_BASE_URL}admins/${id}/${status}`);
  return res.data;
};
