import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="w-full sticky top-0 bg-black bg-opacity-90 z-50 border-b border-accent-color px-6 py-3">
      <ul className="flex justify-between items-center gap-6 text-link-color font-bold">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/store">Store</Link></li>
        <li><Link href="/lore">Lore</Link></li>
        <li><Link href="/cart">Cart</Link></li>
        <li><Link href="/checkout">Checkout</Link></li>
        <li><Link href="/admin">Admin</Link></li>
      </ul>
    </nav>
  );
}
