"use client";

import { useEffect, useState } from "react";

import { AppBar, Grid, LinearProgress, Toolbar } from "@mui/material";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

import { Product } from "./types";
import { ProductCard } from "./components/product-card";
import { API_URI } from "@/config";
import { fetchProducts } from "./services/product.service";

export default function Home() {
  const [isLoading, setLoading] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);

  const getProducts = async () => {
    try {
      const data = await fetchProducts();
      setProducts(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  function resetActiveProduct() {
    setActiveProduct(null);
  }

  return (
    <>
      {isLoading && <LinearProgress />}
      <Grid container spacing={2} style={{ padding: 20 }}>
        {activeProduct && (
          <AppBar position="sticky" color="transparent">
            <Toolbar>
              <Grid item xs={12}>
                <Stack direction="row" spacing={1} justifyContent="center">
                  <Chip label={activeProduct.title} color="success" onDelete={resetActiveProduct} />
                </Stack>
              </Grid>
            </Toolbar>
          </AppBar>
        )}
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={2} key={product.id}>
            <ProductCard
              activeProduct={activeProduct}
              product={product}
              onClick={setActiveProduct}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
