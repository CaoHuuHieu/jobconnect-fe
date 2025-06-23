import axios from "axios";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const uploadFile = async (file: File): Promise<string> => {
  const formData = new FormData();
  formData.append("file", file);

  const res = await axios.post(`${API_BASE_URL}files/upload`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return res.data.url;
};
