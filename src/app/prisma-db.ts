import "dotenv/config";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { PrismaClient } from "@/generated/prisma/client";

const connectionString = `${process.env.DATABASE_URL}`;
const adapter = new PrismaBetterSqlite3({ url: connectionString });
const prisma = new PrismaClient({ adapter });

const seedProducts = async () => {
  const count = await prisma.product.count();
  if (count === 0) {
    await prisma.product.createMany({
      data: [
        {
          title: "Sample Product",
          description: "This is a sample product description.",
          price: 19.99,
        },
        {
          title: "Another Product",
          description: "This is another product description.",
          price: 29.99,
        },
        {
          title: "Third Product",
          description: "This is the third product description.",
          price: 39.99,
        },
        {
          title: "Fourth Product",
          description: "This is the fourth product description.",
          price: 49.99,
        },
      ],
    });
  }
};
seedProducts();

export const getProducts = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return prisma.product.findMany();
};
export const getProductById = async (id: number) => {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return prisma.product.findUnique({ where: { id } });
};
export const createProduct = async (
  title: string,
  description: string,
  price: number
) => {
  await new Promise((resolve) => setTimeout(resolve, 1500));

  return prisma.product.create({
    data: { title, description, price },
  });
};

export const updateProduct = async (
  id: number,
  title: string,
  description: string,
  price: number
) => {
  await new Promise((resolve) => setTimeout(resolve, 1500));

  return prisma.product.update({
    where: { id },
    data: { title, description, price },
  });
};
export const deleteProduct = async (id: number) => {
  await new Promise((resolve) => setTimeout(resolve, 1500));

  return prisma.product.delete({
    where: { id },
  });
};
export const deleteAllProducts = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1500));

  return prisma.product.deleteMany();
};
export const countProducts = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1500));

  return prisma.product.count();
};
