export type Organization = {
  id: string;
  avatar?: string;
  name: string;
  email?: string;
  address?: string;
  phone?: string;
  website?: string;
  policyUrl?: string;
  termUrl?: string;
  status: number; // 0: inactive, 1: active
};
