export interface Cabin {
  id: number;
  created_at: string;
  name: string;
  maxCapacity: number;
  regularPrice: number;
  discount: number;
  description: string;
  image: string | null;
}

export interface CabinPrice {
  regularPrice: number;
  discount: number;
}

export interface CabinListItem {
  id: number;
  name: string;
  maxCapacity: number;
  regularPrice: number;
  discount: number;
  image: string | null;
}

export interface Guest {
  id: number;
  created_at: string;
  fullName: string;
  email: string;
  nationality: string;
  nationalID: string;
  countryFlag: string;
}

export interface Booking {
  id: number;
  created_at: string;
  startDate: string;
  endDate: string;
  numNights: number;
  numGuests: number;
  cabinPrice: number;
  extrasPrice: number;
  totalPrice: number;
  status: string;
  hasBreakfast: boolean;
  isPaid: boolean;
  observations: string;
  cabinId: number;
  guestId: number;
}

export interface BookingWithCabin {
  id: number;
  created_at: string;
  startDate: string;
  endDate: string;
  numNights: number;
  numGuests: number;
  totalPrice: number;
  guestId: number;
  cabinId: number;
  cabins: {
    name: string;
  image: string | null;
  } | {
    name: string;
  image: string | null;
  }[];
}

export interface Settings {
  id: number;
  created_at: string;
  minBookingLength: number;
  maxBookingLength: number;
  maxGuestsPerBooking: number;
  breakfastPrice: number;
}

export interface Country {
  name: string;
  flag: string;
  independent?: boolean;
}

export type CreateGuestInput = Omit<Guest, "id" | "created_at">;

export type CreateGuestResult = Guest[] | null;

export type CreateBookingInput = Omit<Booking, "id" | "created_at">;

export type UpdateGuestInput = Partial<Omit<Guest, "id" | "created_at">>;

export type UpdateBookingInput = Partial<Omit<Booking, "id" | "created_at">>;
