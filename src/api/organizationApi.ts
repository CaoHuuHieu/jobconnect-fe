import axios from "axios";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const createOrganization = async (data: any) => {
  const res = await axios.post(`${API_BASE_URL}organizations`, data);
  return res.data;
};
