import { useQuery} from "@tanstack/react-query";
import { getRestaurant } from "../services/RestaurantService";

export function useRestaurant() {
  const query = useQuery({
    queryFn: getRestaurant,
    queryKey: ["restaurant"],
  });

  return query;
};

