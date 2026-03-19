import { useParams } from "react-router";
import { useProduct } from "@/hooks/useProduct";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useCartStore } from "@/store/cartStore";

export default function ProductDetails() {
  const { id } = useParams();
  const { data, isLoading, error } = useProduct(id);

  const addToCart = useCartStore((state) => state.addToCart);

  if (isLoading) {
    return (
      <div className="grid gap-10 md:grid-cols-2">
        <Skeleton className="h-100 w-full rounded-xl" />
        <div className="space-y-4">
          <Skeleton className="h-6 w-3/4" />
          <Skeleton className="h-6 w-1/4" />
          <Skeleton className="h-20 w-full" />
          <Skeleton className="h-10 w-40" />
        </div>
      </div>
    );
  }

  if (error) return <p>Something went wrong</p>;

  const product = data;

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <div className="grid gap-10 md:grid-cols-2">
        {/* 🖼️ IMAGE */}
        <div className="overflow-hidden rounded-2xl border">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="h-full w-full object-cover"
          />
        </div>

        {/* 📄 INFO */}
        <div className="space-y-6">
          <h1 className="text-3xl font-bold">{product.title}</h1>

          <p className="text-2xl font-semibold">${product.price}</p>

          <p className="text-sm text-muted-foreground">
            ⭐ {product.rating} / 5
          </p>

          <p className="text-sm">
            Brand: <span className="font-medium">{product.brand}</span>
          </p>

          <p className="text-muted-foreground">{product.description}</p>

          <p className="text-sm text-muted-foreground">
            {product.stock} items in stock
          </p>

          <Button
            size="lg"
            className="w-full md:w-fit"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}
