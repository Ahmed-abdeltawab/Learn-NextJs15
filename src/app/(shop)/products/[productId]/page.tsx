import { redirect } from "next/navigation";

type Props = {
  params: Promise<{ productId: string }>;
};

// Generate static params for static generation
export async function generateStaticParams() {
  // Define which productIds should be statically generated
  const productIds = Array.from({ length: 100 }, (_, i) => (i + 1).toString());

  return productIds.map((id) => ({
    productId: id,
  }));
}

export const generateMetadata = async ({ params }: Props) => {
  const { productId } = await params;
  return {
    title: `Product ${productId} Details`,
    description: `Details and information about product ${productId}`,
  };
};
export default async function ProductPage({ params }: Props) {
  const { productId } = await params;
  if (parseInt(productId) > 1000) {
    redirect("/");
  }
  if (parseInt(productId) === 1) {
    throw new Error("Product number 1 is temporarily unavailable.");
  }
  return (
    <div>
      <h1>Product Details</h1>
      <p>Product ID: {productId}</p>
    </div>
  );
}
