"use client";

import { useFormState } from "react-dom";
import { FormEvent, useOptimistic, useState } from "react";
import { createProduct } from "../actions/productActions";
import SubmitButton from "@/components/SubmitButton";

type FormState = {
  error?: {
    title?: string;
    price?: number;
    description?: string;
  };
  success?: boolean;
};

const initialState: FormState = { error: undefined, success: false };

export default function FormCheck() {
  const [state, formAction] = useFormState(createProduct, initialState);

  const [products, setProducts] = useState<{title: string, price: number, description?: string}[]>([])

  const [optimisticProduct, setOptimisticProduct] = useOptimistic(
    products,
    (state, newProduct: {title: string, price: number, description?: string}) => [
      ...state,
      {...newProduct, optimistic: true}
    ]
  )

  const handleSubmit = async(formData: FormData) => {
    setOptimisticProduct({
      title: formData.get("title")?.toString() || "",
      price: Number(formData.get("price")),
      description: formData.get("description")?.toString()
    })
    await formAction(formData)

    if(state.success){
      setProducts((prev) => [
        ...prev,
        {
          title: formData.get("title")?.toString() || "",
          price: Number(formData.get("price")),
          description: formData.get("description")?.toString(),
        }
      ])
    }
  }

  return (
    <>
    <form action={handleSubmit}>
      <input type="text" name="title" placeholder="Product name" />
      {state.errors?.title && <p>{state.errors.title}</p>}
      <input type="number" name="price" placeholder="Price" />
      {state.errors?.price && <p>{state.errors.price}</p>}

      <textarea
        name="description"
        id="description"
        rows={10}
        cols={20}></textarea>
      {state.errors?.description && <p>{state.errors.description}</p>}
      <SubmitButton loadingText="Creating..." text="create" />

      {state.success && <p className="text-green-500">Product created ✅</p>}
    </form>
    
    <div className="mt-6">
        <h2 className="text-lg font-bold">Products</h2>
        <ul>
          {optimisticProduct.map((product, index) => (
            <li
              key={index}
              className="text-black"
            >
              {product.title} - ${product.price} <br />
              {product.description}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
