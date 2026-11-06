export type CategoryType = 
  | 'bosh-taomlar'
  | 'tandir-non'
  | 'choylar'
  | 'shirinliklar'
  | 'salatlar';

export interface MenuItem {
  id: string;
  name: string;
  category: CategoryType;
  price: number;
  description: string;
  image?: string;
  isPopular?: boolean;
  isSpicy?: boolean;
  portion?: string;
  ingredients?: string[];
  preparationTime?: string;
}

export interface CartItem {
  item: MenuItem;
  quantity: number;
  notes?: string;
}

export interface Reservation {
  id: string;
  guestName: string;
  phoneNumber: string;
  date: string;
  time: string;
  guestsCount: string;
  seatingArea: 'tapchan' | 'hall' | 'samovar' | 'vip';
  specialRequests?: string;
  status: 'tasdiqlandi' | 'kutilmoqda';
  createdAt: string;
}

export interface OrderSubmission {
  id: string;
  orderType: 'dine_in' | 'takeaway';
  tableNumber?: string;
  deliveryAddress?: string;
  customerName: string;
  phoneNumber: string;
  items: CartItem[];
  totalAmount: number;
  notes?: string;
  createdAt: string;
}
