import { useEffect, useState } from 'react';
import Papa from 'papaparse'; // Ensure you have this library installed

export type Product = {
  id: string;
  name: string;
  sku: string;
  price: number;
  in_stock: boolean;
};

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts(): Promise<void> {
      try {
        const res = await fetch("https://pub-a56823b59c6247ebba0bb168d783ba17.r2.dev/src/data/Reincarnated_Store_Manual.csv");
        if (!res.ok) {
          throw new Error(`Failed to fetch products: ${res.status} ${res.statusText}`);
        }
        const csvData = await res.text();
        const parsedData = Papa.parse<Product>(csvData, { header: true }).data;
        setProducts(parsedData);
      } catch (error) {
        console.error("Failed to fetch products", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  return { products, loading };
}
