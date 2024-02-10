import { useQuery } from "@tanstack/react-query";
import { getTables } from "../services/Tables";

export function useTables() {
  const query = useQuery({
    queryFn: getTables,
    queryKey: ["tables"],
  });

  return query;
}
