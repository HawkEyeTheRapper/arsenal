import Link from 'next/link';
import { Product } from '../utils/products';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.id}`}
      className="bg-black bg-opacity-80 border border-accent-color rounded-lg p-4 hover:shadow-lg hover:scale-[1.01] transition-all duration-300 block"
    >
      <img
        src={product.image_front}
        alt={product.image_alt}
        className="w-full h-64 object-cover mb-4 rounded"
      />
      <h2 className="text-xl font-bold text-primary-color">{product.name}</h2>
      <p className="text-sm text-link-color mt-1">{product.description}</p>
      <p className="text-accent-color mt-2">${product.price}</p>
    </Link>
  );
}
