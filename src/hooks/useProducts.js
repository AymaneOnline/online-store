import { useInfiniteQuery } from "@tanstack/react-query";

export function useProducts({ search, category }) {
  return useInfiniteQuery({
    queryKey: ["products", search, category],

    queryFn: async ({ pageParam = 0 }) => {
      const limit = 12;
      const skip = pageParam;

      let url = "";

      if (search) {
        url = `https://dummyjson.com/products/search?q=${search}&limit=${limit}&skip=${skip}`;
      } else if (category) {
        url = `https://dummyjson.com/products/category/${category}?limit=${limit}&skip=${skip}`;
      } else {
        url = `https://dummyjson.com/products?limit=${limit}&skip=${skip}`;
      }

      const res = await fetch(url);
      if (!res.ok) throw new Error("Failed to fetch products");

      return res.json();
    },

    getNextPageParam: (lastPage, allPages) => {
      const total = lastPage.total;
      const loaded = allPages.flatMap((p) => p.products).length;

      return loaded < total ? loaded : undefined;
    },
  });
}
