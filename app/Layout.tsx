import React, { ReactNode } from 'react';
import Head from 'next/head';
import Link from 'next/link';

type LayoutProps = {
  children: ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'Reincarnated2Resist Store' }: LayoutProps) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <header className="header">
        <div className="logo-title">
          <img src="/wp-dos/Omniversal_Symbol.png" alt="Omniversal Symbol" className="symbol" />
          <span className="site-title">🦅 Reincarnated2Resist</span>
        </div>
        <input type="checkbox" id="menu-toggle" />
        <label htmlFor="menu-toggle" className="menu-icon">&#9776;</label>
        <nav>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/products">Products</Link></li>
            <li><Link href="/cart">Cart</Link></li>
            <li><Link href="/about">About</Link></li>
          </ul>
        </nav>
      </header>

      <main className="pt-8 px-4">{children}</main>

      <footer className="footer">
        <div className="footer-text">
          <p className="line-1">Reincarnated2Resist™</p>
          <p className="line-2">Built for the Ones Who Remember</p>
          <p className="line-3">&copy; {new Date().getFullYear()} Omniversal Media</p>
        </div>
        <img src="/wp-dos/Omniversal_Symbol_Transparent.png" alt="Omniversal Footer Symbol" className="symbol-footer" />
      </footer>
    </div>
  );
};

export default Layout;
