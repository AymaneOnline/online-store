import { useParams } from "react-router";
import { useProduct } from "@/hooks/useProduct";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/store/cartStore";

export default function ProductDetails() {
  const { id } = useParams();
  const { data, isLoading, error } = useProduct(id);
  const addToCart = useCartStore((state) => state.addToCart);

  // Test
  const cart = useCartStore((state) => state.cart);
  console.log(cart);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading product</p>;

  return (
    <div className="grid gap-10 md:grid-cols-2">
      {/* Image */}
      <img
        src={data.thumbnail}
        alt={data.title}
        className="w-full rounded-xl"
      />

      {/* Info */}
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold">{data.title}</h1>

        <p className="text-muted-foreground">{data.description}</p>

        <p className="text-2xl font-bold">${data.price}</p>

        <Button onClick={() => addToCart(data)}>Add to Cart</Button>
      </div>
    </div>
  );
}
