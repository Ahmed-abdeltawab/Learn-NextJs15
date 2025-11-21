import { getProducts } from "@/app/prisma-db";
import { DeleteProductButton } from "./delete-product-button";
import Link from "next/link";

export type TProduct = {
  id: number;
  title: string;
  description: string | null;
  price: number;
};
const ProductsDBPage = async () => {
  const products: TProduct[] = await getProducts();

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Our Products
      </h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <li
            key={product.id}
            className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-200 flex flex-col justify-between"
          >
            <div>
              <Link href={`/fetch-data/products-db/${product.id}`}>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  {product.title}
                </h2>
              </Link>
              <p className="text-gray-600 mb-4 line-clamp-3">
                {product.description}
              </p>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-lg font-bold text-indigo-600">
                ${product.price.toFixed(2)}
              </span>

              <button className="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded hover:bg-indigo-700 transition-colors">
                Add to Cart
              </button>
              <DeleteProductButton productId={product.id} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsDBPage;
