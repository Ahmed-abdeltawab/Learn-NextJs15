"use server";

import { deleteProduct } from "@/app/prisma-db";
import { revalidatePath } from "next/cache";

export async function deleteProductAction(productId: number) {
  try {
    await deleteProduct(productId);
    revalidatePath("/fetch-data/products-db");
    return { success: true };
  } catch (error) {
    console.error("Failed to delete product:", error);
    return { success: false, error: "Failed to delete product" };
  }
}
