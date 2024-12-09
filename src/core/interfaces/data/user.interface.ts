export interface TableData {
  id: number;
  image: string | null; // URL or null for initials
  name: string;
  email: string;
  role: string;
  createdAt: string;
  status: boolean;
  branch: string;
}

export interface RoleData {
  id: number;
  title: string;
  createdAt: string;
  updatedAt: string;
}

export interface VendorDetails {
  _id?: string;
  name?: string;
  contact_name?: string;
  email?: string;
  phone?: string;
  license_no?: string;
  authority?: string;
  business_type?: string;
  vat_no?: string;
  category?: string;
  service_type?: string;
  address?: string;
  status?: boolean;
}
