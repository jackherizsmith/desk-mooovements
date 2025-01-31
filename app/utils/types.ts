import { type } from 'os';
import { Database } from '../../database.types';

export type CheckboxProps = {
  checked: boolean;
  onChange: () => void;
  label: string;
};

export type City = Database['public']['Tables']['cities']['Row'] & {
  work_spaces: { count: number }[];
};
export type CityPage = Database['public']['Tables']['cities']['Row'] & {
  work_spaces: Workspace[];
};
export type Workspace = Database['public']['Tables']['work_spaces']['Row'];
export type Reviews = Database['public']['Tables']['reviews']['Row'];

export type WorkspaceWithReviews = {
  workspace: Workspace;
  reviews: any;
};

export type PopularCarousel = {
  cities?: City[];
  places?: Workspace[];
};
export type WishlistDisplay = {
  places?: Workspace[] | null;
  wishlist?: number[] | null;
};
export type Profile = Database['public']['Tables']['profiles']['Row'];
export type FormInputProps = {
  name: string;
  type: string;
  placeholder: string;
};

export type PageByIDParams = {
  params: {
    id: string;
  };
};

export type PlaceCardParams = {
  pageRoute?: string | null;
  imageLink: string | null;
  placeName: string | null;
  flavourText: string | number | null;
  amenityList?: string | null;
};

export interface Amenities {
  id: number;
  pet_friendly: boolean | null;
  opens_till_late: boolean | null;
  has_wifi: boolean | null;
  has_socket: boolean | null;
  has_shower: boolean | null;
  has_meeting_room: boolean | null;
  has_phone_booth: boolean | null;
  has_locker: boolean | null;
}

export interface AddProfileProps {
  email: string;
  id: string;
}

export interface CityData {
  city: CityPage[];
  workSpacesData: Workspace[];
  trueAmenitiesWithId: { id: string; amenities: string[] }[];
}

export type ColorKey =
  | 'pet_friendly'
  | 'opens_till_late'
  | 'has_wifi'
  | 'has_socket'
  | 'has_shower'
  | 'has_meeting_room'
  | 'has_phone_booth'
  | 'has_locker';

export interface CityWithId {
  name: string;
  id: number;
}
