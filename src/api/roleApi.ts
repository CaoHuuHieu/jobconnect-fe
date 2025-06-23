import axios from "axios";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getRoles = async () => {
  const res = await axios.get(`${API_BASE_URL}roles`);
  return res;
};
