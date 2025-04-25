import React from 'react';

export default function Footer() {
  return (
    <footer className="footer fixed bottom-0 w-full bg-black bg-opacity-70 border-t border-highlight-color text-link-color text-sm px-4 py-2 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="footer-text">
          <p className="line-1 font-bold">🦅 Reincarnated 2 Resist</p>
          <p className="line-2 text-highlight-color">Omniversal Branch</p>
          <p className="line-3 text-xs">
            <a href="https://omniversalmedia.org" target="_blank" rel="noopener noreferrer">
              © {new Date().getFullYear()} Omniversal Media
            </a>
          </p>
        </div>
        <img
          src="/wp-dos/Omniversal_Symbol_Transparent.png"
          alt="Omniversal Symbol"
          className="symbol-footer h-12 ml-2"
        />
      </div>
    </footer>
  );
}
