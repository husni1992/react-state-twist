import { API_URI } from "@/config";
import { Product } from "../types";

export async function fetchProducts(): Promise<Product[]> {
  const res = await fetch(API_URI);
  return res.json();
}
