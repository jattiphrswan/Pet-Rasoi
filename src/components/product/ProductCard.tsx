import { Product } from "@/types";
import { formatCurrency } from "@/lib/commerce/normalization";
import { resolveProductImage } from "@/lib/images";
import { NeutralImagePlaceholder } from "@/components/ui/NeutralImagePlaceholder";

export function ProductCard({ product }: { product: Product }) {
  const imageSrc = resolveProductImage(product.id, product.slug, product.images[0]?.src);

  return (
    <article className="group flex flex-col rounded-xl border border-border bg-white overflow-hidden shadow-subtle hover:shadow-card hover:border-sage-border transition">
      {/* Photo or Neutral Placeholder */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-cream-surface border-b border-border/70">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={product.images[0]?.alt || product.name}
            className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <NeutralImagePlaceholder
            title={product.name}
            category={product.pet === "dog" ? "Dog Recipe" : "Cat Recipe"}
          />
        )}

        {/* Pet & Food Type Badges */}
        <div className="absolute top-2.5 left-2.5 flex gap-1.5">
          <span className="rounded bg-white/95 px-2 py-0.5 text-[11px] font-semibold text-sage-dark shadow-xs border border-border/60">
            {product.pet === "dog" ? "Dog" : "Cat"}
          </span>
          <span className="rounded bg-sage-light/95 px-2 py-0.5 text-[11px] font-semibold text-sage-dark shadow-xs border border-sage-border/60 capitalize">
            {product.foodType.replace("-", " ")}
          </span>
        </div>
      </div>

      {/* Product Information */}
      <div className="flex flex-1 flex-col p-4">
        <span className="text-[11px] font-semibold text-sage-dark">{product.brand}</span>
        <h3 className="mt-1 font-serif font-bold text-base text-ink group-hover:text-sage-dark transition">
          {product.name}
        </h3>
        <p className="mt-1.5 text-xs text-ink-muted line-clamp-2 leading-relaxed">
          {product.shortDescription || product.description}
        </p>

        {/* Price and Add button */}
        <div className="mt-auto pt-4 flex items-center justify-between border-t border-border">
          <div>
            <span className="text-base font-bold text-ink">
              {formatCurrency(product.price, product.currency)}
            </span>
            {product.regularPrice && (
              <span className="ml-2 text-xs text-ink-subtle line-through">
                {formatCurrency(product.regularPrice, product.currency)}
              </span>
            )}
          </div>

          <button
            type="button"
            disabled={!product.inStock}
            className="rounded-lg bg-cream border border-border px-3 py-1.5 text-xs font-semibold text-ink hover:bg-sage-dark hover:text-white hover:border-sage-dark transition disabled:opacity-50"
          >
            {product.isSimple ? "Add to Cart" : "Select Size"}
          </button>
        </div>
      </div>
    </article>
  );
}
