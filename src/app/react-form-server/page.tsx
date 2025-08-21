import { getProducts } from "../actions/productActions";
import ProductsList from "@/components/ProductsList";

export default async function ReactServer({searchParams}: {searchParams: Promise<{query?: string}>}) {
  const { query } = await searchParams
    const products = await getProducts(query);
  return (<ProductsList products={products} />);
};
