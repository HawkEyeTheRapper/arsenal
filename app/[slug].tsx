import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

type Product = {
  id: string;
  name: string;
  type: string;
  description: string;
  price: number;
  in_stock: boolean;
  categories: string;
  image_alt: string;
  image_back: string;
  image_front: string;
  image_side: string;
};

export default function ProductDetailPage() {
  const { query } = useRouter();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!query.slug) return;

    const fetchProduct = async () => {
      try {
        const res = await fetch('https://pub-a56823b59c6247ebba0bb168d783ba17.r2.dev/src/data/Reincarnated_Store_Manual.csv');
        const csvText = await res.text();
        const rows = csvText.split('\n').slice(1); // Skip header row
        const data: Product[] = rows.map((row) => {
          const [id, name, type, description, price, in_stock, categories, image_alt, image_back, image_front, image_side] = row.split(',');
          return {
            id,
            name,
            type,
            description,
            price: parseFloat(price),
            in_stock: in_stock === 'true',
            categories,
            image_alt,
            image_back,
            image_front,
            image_side,
          };
        });
        const found = data.find((p) => p.id === String(query.slug));
        setProduct(found || null);
      } catch (err) {
        console.error('Failed to load product:', err);
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [query.slug]);

  if (loading) {
    return (
      <div className="text-center text-white py-20 font-mono">
        <p>Loading product...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="text-center text-red-500 py-20 font-mono">
        <p>❌ Product not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white px-4 py-10 font-mono max-w-4xl mx-auto">
      <img src={product.image_front} alt={product.image_alt} className="w-full h-auto rounded mb-6" />
      <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
      <p className="text-blue-400 text-xl mb-4">${product.price}</p>
      <p className="mb-4 text-sm text-gray-400">{product.categories} — {product.type}</p>
      <p className="mb-6">{product.description}</p>
      <div className="grid grid-cols-3 gap-4 mb-6">
        {product.image_back && <img src={product.image_back} alt="Back" className="rounded" />}
        {product.image_side && <img src={product.image_side} alt="Side" className="rounded" />}
        {product.image_front && <img src={product.image_front} alt="Front" className="rounded" />}
      </div>
      <p className="mb-4">
        {product.in_stock ? (
          <span className="text-green-400">In Stock ✅</span>
        ) : (
          <span className="text-red-400">Out of Stock ❌</span>
        )}
      </p>
      <button className="bg-blue-600 hover:bg-blue-800 px-6 py-3 rounded font-semibold">
        🛒 Add to Cart
      </button>
    </div>
  );
}
