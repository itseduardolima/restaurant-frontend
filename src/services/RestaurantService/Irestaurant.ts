export interface IRestaurant {
  length: number;
  map(arg0: (restaurant: IRestaurant) => import("react/jsx-runtime").JSX.Element): import("react").ReactNode;
  restaurant_id: string;
  restaurant_name: string;
  restaurant_addres: string;
  restaurant_phone: string;
}
