import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: "Products Page" },

  description: "Browse our exclusive products",
};
// create simple products page
export default function ProductsPage() {
  return (
    <div>
      <h1>Our Products</h1>
      <ul
        style={{ display: "flex", flexDirection: "column", gap: "10px" }}
        className="bg-red-600"
      >
        <Link href="/products/1">Product 1: High-quality item A</Link>
        <Link href="/products/2">Product 2: Durable item B</Link>
        <Link href="/products/3">Product 3: Innovative item C</Link>
      </ul>
    </div>
  );
}
