// ============================================================
// RosaBlu Hotel Kutus — TypeScript Types
// ============================================================

export type UserRole = 'guest' | 'admin' | 'reception';

export interface Profile {
  id: string;
  role: UserRole;
  full_name: string;
  email: string;
  phone: string;
  avatar_url: string;
  created_at: string;
  updated_at: string;
}

export type RoomType = 'studio' | 'business' | 'airbnb';

export interface Room {
  id: string;
  name: string;
  type: RoomType;
  description: string;
  bed_size: string;
  has_smart_tv: boolean;
  has_kitchenette: boolean;
  has_ac: boolean;
  max_guests: number;
  base_price: number;
  is_available: boolean;
  image_url: string;
  floor_number: number;
  created_at: string;
  updated_at: string;
}

export type BookingStatus = 'pending' | 'confirmed' | 'checked_in' | 'checked_out' | 'cancelled';

export interface Booking {
  id: string;
  user_id: string;
  room_id: string;
  check_in_date: string;
  check_out_date: string;
  num_guests: number;
  num_nights: number;
  base_total: number;
  vat_rate: number;
  vat_amount: number;
  service_charge: number;
  total_price: number;
  status: BookingStatus;
  special_requests: string;
  created_at: string;
  updated_at: string;
  room?: Room;
  profile?: Profile;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  is_read: boolean;
  created_at: string;
}

export interface BookingFormData {
  checkInDate: string;
  checkOutDate: string;
  numGuests: number;
  roomId: string;
  specialRequests: string;
}

export interface PricingBreakdown {
  basePrice: number;
  numNights: number;
  subtotal: number;
  vatRate: number;
  vatAmount: number;
  serviceCharge: number;
  totalPrice: number;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export interface NavItem {
  label: string;
  href: string;
  icon?: string;
}
