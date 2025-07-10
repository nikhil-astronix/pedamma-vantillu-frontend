import { NextResponse } from 'next/server';
import { products } from '@/data/dummyData';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q');

  if (!query) {
    return NextResponse.json([]);
  }

  const lowercasedQuery = query.toLowerCase();
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(lowercasedQuery) ||
    product.category.toLowerCase().includes(lowercasedQuery) ||
    product.tags.some(tag => tag.toLowerCase().includes(lowercasedQuery))
  );

  return NextResponse.json(filteredProducts);
} 