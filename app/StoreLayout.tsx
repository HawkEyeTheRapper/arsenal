import React from 'react';
import Link from 'next/link';
import Header from '../Header';
import Footer from '../Footer';

type StoreLayoutProps = {
  children: React.ReactNode;
};

export default function StoreLayout({ children }: StoreLayoutProps) {
  return (
    <div className="site-wrapper">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="main">
        <div className="content-block">
          {children}
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
