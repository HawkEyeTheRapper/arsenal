export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-black text-white px-4 py-10 font-mono max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">💳 Checkout</h1>
      <div className="bg-zinc-900 border border-gray-700 rounded-lg p-6 shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Review Your Order</h2>
        <ul className="text-sm text-gray-300 mb-6 space-y-2">
          <li>🧢 Hawk Vision Tee — $32.00 × 1</li>
          <li>🎵 Full Disclosure Album — $12.00 × 1</li>
        </ul>
        <div className="text-right text-lg text-blue-400 mb-6">
          Total: $44.00
        </div>
        <p className="text-sm text-gray-400 mb-6">
          Payment gateway integration (Stripe, WooCommerce, etc.) goes here.
        </p>
        <button className="w-full bg-blue-600 hover:bg-blue-800 px-6 py-3 rounded font-semibold">
          🔒 Complete Purchase
        </button>
      </div>
    </div>
  );
}
