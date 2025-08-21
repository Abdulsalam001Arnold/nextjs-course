"use client";
import { deleteProduct } from "@/app/actions/productActions";
import UpdateProduct from "./UpdateProduct";
import Link from "next/link";
import { useRouter } from "next/navigation";
import SubmitButton from "./SubmitButton";

type Products = {
  id: number;
  title: string;
  price: number;
  description: string | null;
  createdAt: Date;
};

export default function ProductsList({ products }: { products: Products[] }) {
    const router = useRouter()
  const handleDelete = async (id: number) => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
     deleteProduct(id);
     router.refresh()
  };
  return (
    <div>
      <div className="min-h-screen w-full">
        {Array.isArray(products) && products.length > 0 ? (
          <div>
            {products.map((product) => (
              <div key={product.id} className="p-4 border-b relative">
                <h2 className="text-xl font-bold">{product.title}</h2>
                <p className="text-gray-600">${product.price.toFixed(2)}</p>
                <p className="mt-2">
                  {product.description ?? "No description"}
                </p>
                <p>Date: {new Date(product.createdAt).toLocaleString()}</p>
                <div className="flex gap-[10px]">
                    <UpdateProduct product={product}/>
                <SubmitButton text="Delete" loadingText="Deleting..."/>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col gap-[10px] items-center justify-center h-screen">
            <h1 className="text-2xl font-bold">No products found</h1>
            <Link href='/react-form-client'>
                <p>
                    Create one?
                </p>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
