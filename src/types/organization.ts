export type Organization = {
  id: string;
  name: string;
  orgLogo?: string;
  website?: string;
  orgCode?: string;
  email?: string;
  address?: string;
  termsUrl?: string;
  privacyUrl?: string;
  facebook?: string;
  linkedIn?: string;
  status: number; // 0: inactive, 1: active
};
