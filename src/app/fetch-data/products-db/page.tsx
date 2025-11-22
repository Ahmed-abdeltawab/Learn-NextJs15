import { getProducts } from "@/app/prisma-db";
import ProductDetails from "./ProductDetails";

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
      <ProductDetails products={products} />
    </div>
  );
};

export default ProductsDBPage;
