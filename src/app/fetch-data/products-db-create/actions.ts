"use server";

import { createProduct } from "@/app/prisma-db";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export type Errors = {
  title?: string;
  price?: string;
  description?: string;
  general?: string;
};
export type FormState = {
  errors: Errors;
};

export const createProductAction = async (
  prevState: FormState,
  formData: FormData
) => {
  const title = formData.get("title");
  const price = formData.get("price");
  const description = formData.get("description");
  const errors: Errors = {};

  // Validation
  if (!title || typeof title !== "string" || title.trim().length === 0) {
    errors.title = "Title is required";
  }
  if (!price || isNaN(Number(price)) || Number(price) <= 0) {
    errors.price = "Valid price greater than 0 is required";
  }
  if (description && typeof description !== "string") {
    errors.description = "Description must be a string";
  }
  if (!description || description.trim().length === 0) {
    errors.description = "Description is required";
  }

  if (Object.keys(errors).length > 0) {
    return { errors };
  }

  // Database operation with error handling
  try {
    await createProduct(
      title as string,
      (description as string) || "",
      Number(price)
    );
    revalidatePath("/fetch-data/products-db");
  } catch (error) {
    console.error("Failed to create product:", error);
    return {
      errors: {
        general: "Failed to create product. Please try again.",
      },
    };
  }

  redirect("/fetch-data/products-db");
};
