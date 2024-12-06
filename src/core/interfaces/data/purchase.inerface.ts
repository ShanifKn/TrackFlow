export interface PurchaseOrder {
  po: number;
  in?: number;
  date: string;
  branch: string;
  vendor: string;
  category: string;
  invoiced: boolean;
  paymentMethod: string;
  payment: string;
}
