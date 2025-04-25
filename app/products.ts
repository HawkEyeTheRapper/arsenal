import type { NextApiRequest, NextApiResponse } from 'next';
import Papa from 'papaparse';

type Product = {
  SKU?: string;
  Name?: string;
  Type?: string;
  Description?: string;
  'Regular price'?: string;
  'In stock?'?: string;
  Categories?: string;
  Image_alt?: string;
  Image_back?: string;
  Image_front?: string;
  Image_side?: string;
  fallback_image: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const csvUrl = 'https://pub-a56823b59c6247ebba0bb168d783ba17.r2.dev/src/data/Reincarnated_Store_Manual.csv';
    const response = await fetch(csvUrl);

    if (!response.ok) {
      return res.status(500).json({ error: `❌ Failed to fetch CSV: ${response.statusText}` });
    }

    const text = await response.text();

    const results = Papa.parse<Product>(text, {
      header: true,
      skipEmptyLines: true,
    });

    const products: Product[] = results.data.map((item, index) => {
      console.log("Parsed Item:", item);
      return {
        id: item.SKU || item.Name || `product-${index}`,
        name: item.Name || '',
        type: item.Type || '',
        description: item.Description || '',
        price: parseFloat(item['Regular price'] || '0'),
        in_stock: item['In stock?']?.toLowerCase() === 'yes',
        categories: item.Categories || '',
        image_alt: item.Image_alt || '',
        image_back: item.Image_back || '',
        image_front: item.Image_front || '',
        image_side: item.Image_side || '',
        fallback_image: '/path/to/fallback/image.jpg',
      };
    });

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: '❌ API error: ' + (error as Error).message });
  }
}
