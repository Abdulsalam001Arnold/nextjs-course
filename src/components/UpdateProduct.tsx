"use client";

import { updateProducts } from "@/app/actions/productActions";
import { ChangeEvent, FormEvent, useState } from "react";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string | null;
};

export default function UpdateProduct({ product }: { product: Product }) {
    const [isOpen, setIsOpen] = useState(false)
    const [formData, setFormData] = useState({
        title: product.title,
        price: product.price,
        description: product.description || "",
    })
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => (
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    )

    const handleUpdate = async(e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        await updateProducts(product.id, {
            title: formData.title,
            price: Number(formData.price),
            description: formData.description || "",
        })
        setIsOpen(false); // Close the modal after update
        window.location.reload(); // Reload the page to reflect changes
    }

    return(
        <>
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Edit
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 bg-opacity-40">
          <div className="bg-white p-6 rounded-lg w-96 shadow-xl">
            <h2 className="text-xl font-bold mb-4">Update Product</h2>
            <form onSubmit={handleUpdate} className="space-y-4">
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                placeholder="Title"
              />
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                placeholder="Price"
              />
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                placeholder="Description"
              />

              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 bg-gray-300 rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
    )
    
}
