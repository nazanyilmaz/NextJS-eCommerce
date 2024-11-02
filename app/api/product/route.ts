import { getCurrentUser } from "@/app/actions/getCurrentUser";
import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const currentUser = await getCurrentUser();
  try {
    if (!currentUser || currentUser?.role !== "ADMIN") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { name, description, brand, price, inStock, category, image } = body;

    // Check if password is provided

    const product = await prisma.product.create({
      data: {
        name,
        description,
        brand,
        price: parseFloat(price),
        inStock,
        category,
        image,
      },
    });

    return NextResponse.json(product);
  } catch (error) {
    console.error("Error in registration:", error);
    return NextResponse.json(
      { error: "An error occurred during registration" },
      { status: 500 }
    );
  }
}
