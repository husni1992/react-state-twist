"use client";

import { useEffect, useState } from "react";

import { AppBar, Grid, LinearProgress, Toolbar } from "@mui/material";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

import { Product } from "../types";
import { ProductCard } from "../components/product-card";
import { fetchProducts } from "../services/product.service";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../state/store";
import { setActiveProduct } from "../state/gridSlice";

export default function GridPage() {
  const activeProduct = useSelector((state: RootState) => state.gridSlice.activeProduct);
  const dispatch = useDispatch();

  const [isLoading, setLoading] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);

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
    dispatch(setActiveProduct(null));
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
                  <Chip label={activeProduct.company} color="success" onDelete={resetActiveProduct} />
                </Stack>
              </Grid>
            </Toolbar>
          </AppBar>
        )}
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={2} key={product.id}>
            <ProductCard
              product={product}
              activeProduct={activeProduct} //TODO: Send only active product id
              onClick={setActiveProduct}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
