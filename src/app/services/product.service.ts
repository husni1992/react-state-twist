import { Product } from "../types";

export async function fetchProducts(): Promise<Product[]> {
  const res = await fetch("https://run.mocky.io/v3/b57f0941-933a-43c0-b6bb-fce3cef109a5");
  return res.json();
}
