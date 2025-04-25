import Layout from '../Layout';
import Header from '../Header';
import { Product } from '../../utils/products';

export default function ProductDetail({ product }: { product: Product }) {
  return (
    <Layout>
      <div className="min-h-screen bg-black text-white px-4 py-10 font-mono max-w-4xl mx-auto">
        <Header />
        <img
          src={product.image_front}
          alt={product.image_alt}
          className="w-full h-auto rounded mb-6"
        />
        <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
        <p className="text-gray-400 text-sm mb-2">{product.type} — {product.categories}</p>
        <p className="text-blue-400 text-xl mb-4">${product.price}</p>
        <p className="mb-6">{product.description}</p>
        <p className="mb-4">
          {product.in_stock ? (
            <span className="text-green-400">In Stock ✅</span>
          ) : (
            <span className="text-red-400">Out of Stock ❌</span>
          )}
        </p>
        <div className="grid grid-cols-3 gap-4 mb-6">
          {product.image_back && (
            <img src={product.image_back} alt="Back view" className="rounded" />
          )}
          {product.image_side && (
            <img src={product.image_side} alt="Side view" className="rounded" />
          )}
          {product.image_front && (
            <img src={product.image_front} alt="Front view" className="rounded" />
          )}
        </div>
        <button className="bg-blue-600 hover:bg-blue-800 px-6 py-3 rounded font-semibold">
          🛒 Add to Cart
        </button>
      </div>
    </Layout>
  );
}
