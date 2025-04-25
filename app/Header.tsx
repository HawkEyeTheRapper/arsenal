import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="header">
      <div className="logo-title">
        <Link href="/">
          <Image src="/wp-dos/Omniversal_Symbol_Transparent.png" alt="Omniversal Symbol" width={52} height={52} className="symbol" />
        </Link>
        <h1 className="site-title">REINCARNATED2RESIST</h1>
      </div>
      <nav>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/products">Products</Link></li>
          <li><Link href="/posts">Posts</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/cart">Cart</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
