import axios from "axios";
import axiosInstance from "./axiosInstance";

export const getOrganizations = async (
  params: {
    page?: number;
    size?: number;
    sort?: string;
    orderBy?: string;
    searchValue: string;
    searchBy?: string;
  } | null
) => {
  const res = await axiosInstance.get(`organizations`, { params });
  return res.data;
};

export const createOrganization = async (data: any) => {
  const res = await axiosInstance.post(`organizations`, data);
  return res.data;
};

export const updateOrganization = async (id: string, data: any) => {
  const res = await axiosInstance.put(`organizations/${id}`, data);
  return res.data;
};

export const getOrganizationById = async (id: string) => {
  const res = await axios.get(`organizations/${id}`);
  return res.data;
};

export const activateOrganization = async (id: string, status: number) => {
  const res = await axios.put(`organizations/${id}/${status}`);
  return res.data;
};
