import prisma from "@/libs/prismadb";

export interface ProductsParams {
  category?: string | null;
  search?: string | null;
}

export default async function getProducts(params: ProductsParams) {
  try {
    const { category, search } = params;
    let searchString = search?.toLowerCase();
    if (!search) {
      searchString = "";
    }
    let query: any = {};
    if (category) {
      query.category = category;
    }
    const products = await prisma.product.findMany({
      where: {
        ...query,
        OR: [
          {
            name: {
              contains: searchString,
              mode: "insensitive",
            },
            description: {
              contains: searchString,
              mode: "insensitive",
            },
          },
        ],
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
    return products;
  } catch (error: any) {
    throw new Error("Something went wrong", error);
  }
}
