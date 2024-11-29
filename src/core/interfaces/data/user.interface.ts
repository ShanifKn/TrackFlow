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
