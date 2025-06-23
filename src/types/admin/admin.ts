import type { Organization } from "../organization";
import type { Role } from "../role";

export type Admin = {
  id: string;
  fullName: string;
  email: string;
  employeeId: string;
  phoneNumber: string;
  avt: string;
  organization: Organization;
  role: Role;
  createdBy: string;
  createdAt: Date;
  updatedBy: string;
  updatedAt: Date;
  status: number;
};
