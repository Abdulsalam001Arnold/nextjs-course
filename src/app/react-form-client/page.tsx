"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Loader from "@/components/Loader";

export default function ReactForm() {
  const [title, setTitle] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [description, setDescription] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const router = useRouter();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    try {
      const res = await fetch("/api/post-users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          price,
          description,
        }),
      });
      if (res.ok) {
        const data = await res.json();
        console.log(data);
        router.push("/react-form-server");
      }
    } catch (err) {
      console.error(err);
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center w-full justify-center">
      <form
        onSubmit={handleSubmit}
        className="relative flex flex-col items-center justify-center">
        {loading ? (
          <Loader />
        ) : (
          <section>
            <div>
              <span className="block mb-2">Title</span>
              <input
                type="text"
                value={title}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setTitle(e.target.value)
                }
                className="border p-2 rounded w-full mb-4"
                required
              />
            </div>

            <div>
              <span className="block mb-2">Price</span>
              <input
                type="number"
                value={price}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setPrice(Number(e.target.value))
                }
                className="border p-2 rounded w-full mb-4"
                required
              />
            </div>

            <div>
              <span className="block mb-2">Description</span>
              <textarea
                name="description"
                id="description"
                rows={20}
                cols={20}
                value={description}
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                  setDescription(e.target.value)
                }></textarea>
            </div>
            <input type="submit" value="SUBMIT" />
          </section>
        )}
      </form>

      
    </div>
  );
}
