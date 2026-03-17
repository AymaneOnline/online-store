import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "@/api/products";

export function useProducts(search) {
  return useQuery({
    queryKey: ["products", search],
    queryFn: () => fetchProducts(search),
  });
}
