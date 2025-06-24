import axiosInstance from "./axiosInstance";

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
  const res = await axiosInstance.get(`admins`, { params });
  return res.data;
};

export const createAdmin = async (data: any) => {
  const res = await axiosInstance.post(`admins`, data);
  return res.data;
};

export const updateAdmin = async (id: string, data: any) => {
  const res = await axiosInstance.put(`admins/${id}`, data);
  return res.data;
};

export const getAdminById = async (id: string) => {
  const res = await axiosInstance.get(`admins/${id}`);
  return res.data;
};

export const activateAdmin = async (id: string, status: number) => {
  const res = await axiosInstance.put(`admins/${id}/${status}`);
  return res.data;
};
