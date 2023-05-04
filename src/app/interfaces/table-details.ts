export interface TableDetails {
  id: string;
  name: string;
  phone: string;
  category: TransactionCategory;
  amount: number;
  accountType: string;
  balance: number;
}
interface TransactionCategory {
  title: string;
  type: string;
}
