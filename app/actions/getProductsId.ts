import prisma from "@/libs/prismadb";

interface IParams {
  productId?: string;
}

export default async function getProductsId(params: IParams) {
  const { productId } = params;
  const product = await prisma.product.findUnique({
    where: {
      id: productId,
    },
    include: {
      reviews: {
        include: {
          user: true,
        },
        orderBy: {
          createdDate: "desc",
        },
      },
    },
  });
  if (!product) {
    throw new Error("Product not found");
  }
  return product;
}
