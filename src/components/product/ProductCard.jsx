import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/store/cartStore";
import { Link } from "react-router";

export default function ProductCard({ product }) {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <Card className="group overflow-hidden rounded-2xl border transition hover:shadow-lg">
      {/* Image */}
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />
      </div>

      <CardContent className="space-y-3 p-4">
        {/* Title */}
        <Link to={`/products/${product.id}`}>
          <h3 className="line-clamp-1 font-semibold hover:underline">
            {product.title}
          </h3>
        </Link>

        {/* Price */}
        <p className="text-lg font-bold">${product.price.toLocaleString()}</p>

        {/* Rating */}
        <p className="text-sm text-muted-foreground">⭐ {product.rating}</p>

        {/* Button */}
        <Button className="w-full" onClick={() => addToCart(product)}>
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
}
