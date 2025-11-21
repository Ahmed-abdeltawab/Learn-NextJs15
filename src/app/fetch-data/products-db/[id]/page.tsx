import { getProductById } from "@/app/prisma-db";
import { TProduct } from "../page";
import EditProductForm from "./EditProductForm";
import { notFound } from "next/navigation";

const EditProductPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const product: TProduct | null = await getProductById(parseInt(id));
  if (!product) {
    notFound();
  }
  return <EditProductForm product={product} />;
};
export default EditProductPage;
