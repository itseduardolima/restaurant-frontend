import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../services/User";

export function useCurrentUser() {
  const query = useQuery({
    queryFn: getCurrentUser,
    queryKey: ["currentUser"],
  });

  return query;
}
