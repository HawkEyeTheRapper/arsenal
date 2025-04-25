export const dynamic = "force-dynamic";
import { CartProvider, useCart } from '../context/CartContext';

function CartContent() {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="min-h-screen bg-black text-white px-4 py-10 font-mono max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">🛒 Shopping Cart</h1>
      {cart.length === 0 ? (
        <p className="text-gray-400">Your cart is empty.</p>
      ) : (
        <ul className="space-y-6">
          {cart.map((item) => (
            <li
              key={item.id}
              className="flex gap-4 border-b border-gray-700 pb-4 items-center"
            >
              <img
                src={item.image_front}
                alt={item.image_alt}
                className="w-24 h-24 object-cover rounded"
              />
              <div className="flex-1">
                <h2 className="text-xl font-semibold">{item.name}</h2>
                <p className="text-blue-400">${item.price}</p>
                <p className="text-sm text-gray-400">Quantity: {item.quantity}</p>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="mt-2 text-red-500 hover:underline text-sm"
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function CartPage() {
  return (
    <CartProvider>
      <CartContent />
    </CartProvider>
  );
}
