import '../styles/global.css';
import type { AppProps } from 'next/app';

import NavBar from '../components/NavBar';
import Layout from '../components/Layout';
import Footer from '../components/Footer';
import { WPThemeProvider } from '../context/WPThemeContext';
import { CartContext } from '../context/CartContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WPThemeProvider>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </WPThemeProvider>
  );
}
