export interface IOrder {
  status: boolean;
  result: OrderInfo[];
}

export interface OrderInfo {
  oid:       number;
  uid:       number;
  pid:       number;
  firstName: string;
  lastName:  string;
  title:     string;
  price:     string;
}
