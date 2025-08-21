
import prisma from "@/lib/prisma";


type FormState = {
  errors?: {
    title?: string;
    price?: string;
    description?: string;
  };
  success?: boolean;
};


export const createProduct = async (
  prevState: FormState,
  formData: FormData
): Promise<FormState> => {
  try {
    const title = formData.get("title")?.toString();
    const price = Number(formData.get("price"));
    const description = formData.get("description")?.toString();

    const errors: FormState["errors"] = {};

    if (!title || title.length < 3) {
      errors.title = "Title must be at least 3 characters long.";
    }

    if (isNaN(price) || price <= 0) {
      errors.price = "Price must be a positive number.";
    }

    if (!description || description.length < 10) {
      errors.description = "Description must be at least 10 characters long.";
    }

    if (Object.keys(errors).length > 0) {
      return { errors };
    }

    await prisma.product.create({
      data: { 
        title: title as string, 
        price, 
        description: description as string 
      },
    });

    return { success: true };
  } catch (err) {
    console.error(err);
    return { errors: { title: "Something went wrong, try again." } };
  }
};

export const getProducts = async (query?: string) => {
  try {
    if (query) {
      return await prisma.product.findMany({
        where: {
          OR: [
            { title: { contains: query } },
            { description: { contains: query } },
          ],
        },
      });
    }

    const products = await prisma.product.findMany({
      orderBy: {
        createdAt: "asc",
      },
    });

    return products;
  } catch (err) {
    console.error(err);
    return [];
  }
};


export const deleteProduct = async (id: number) => {
  return await prisma.product.delete({
    where: {
      id,
    },
  });
};

export const updateProducts = async (
  id: number,
  data: { title: string; price: number; description?: string }
) => {
  return await prisma.product.update({
    where: {
      id,
    },
    data,
  });
};
