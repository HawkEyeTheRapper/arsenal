import { useProducts } from '../../hooks/useProducts';

const tableHeaderClass = "bg-zinc-800 text-gray-300";

export default function AdminProducts() {
  const { products, loading } = useProducts();

  return (
    <div className="min-h-screen bg-black text-white font-mono px-4 py-12 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 border-b border-gray-700 pb-2 tracking-widest">🧾 Product Manager</h1>

      {loading ? (
        <p className="text-gray-400">Loading...</p>
      ) : (
        <div className="overflow-x-auto border border-gray-700 rounded-lg">
          <table className="min-w-full text-sm text-left border-collapse">
            <thead className={tableHeaderClass}>
              <tr>
                <th className="px-4 py-2 border-b border-gray-600">ID</th>
                <th className="px-4 py-2 border-b border-gray-600">Name</th>
                <th className="px-4 py-2 border-b border-gray-600">SKU</th>
                <th className="px-4 py-2 border-b border-gray-600">Price</th>
                <th className="px-4 py-2 border-b border-gray-600">In Stock</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="border-b border-gray-800 hover:bg-zinc-800">
                  <td className="px-4 py-2">{product.id}</td>
                  <td className="px-4 py-2">{product.name}</td>
                  <td className="px-4 py-2">{product.sku}</td>
                  <td className="px-4 py-2">${product.price}</td>
                  <td className="px-4 py-2">{product.in_stock ? "✅" : "❌"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
