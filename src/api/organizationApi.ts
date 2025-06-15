import axios from "axios";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getOrganizations = async (
  params: {
    page?: number;
    size?: number;
    sort?: string;
    orderBy?: string;
    q?: string;
    search?: string;
  } | null
) => {
  const res = await axios.get(`${API_BASE_URL}organizations`, { params });
  return res.data;
};

export const createOrganization = async (data: any) => {
  const res = await axios.post(`${API_BASE_URL}organizations`, data);
  return res.data;
};

export const updateOrganization = async (id: string, data: any) => {
  const res = await axios.put(`${API_BASE_URL}organizations/${id}`, data);
  return res.data;
};

export const getOrganizationById = async (id: string) => {
  const res = await axios.get(`${API_BASE_URL}organizations/${id}`);
  return res.data;
};

export const activateOrganization = async (id: string, status: number) => {
  const res = await axios.put(`${API_BASE_URL}organizations/${id}/${status}`);
  return res.data;
};
