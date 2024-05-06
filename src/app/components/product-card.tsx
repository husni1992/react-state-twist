import {
  Card,
  CardContent,
  Typography,
  Button,
  CardActions,
  CardActionArea,
  CardMedia,
} from "@mui/material";

import { Product } from "../types";
import classNames from "classnames";
import "./styles.css";
import { useEffect, useState } from "react";
import { getNextKeyOfObject } from "./utils";

export interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
  activeProduct: Product | null;
}

const DEFAULT_PROPERTY_TO_DISPLAY = "title";

export function ProductCard({ product, onClick, activeProduct }: ProductCardProps) {
  const [currentProperty, setCurrentProperty] = useState<keyof Product>(
    DEFAULT_PROPERTY_TO_DISPLAY
  );

  const isActive = activeProduct?.index === product.index;
  const activeClasses = classNames({ "active-card": isActive });

  useEffect(() => {
    if (!isActive) {
      setCurrentProperty(DEFAULT_PROPERTY_TO_DISPLAY);
    }
  }, [isActive]);

  function handleClick() {
    if (!isActive) {
      onClick(product);
      return;
    }

    const nextProperty = getNextKeyOfObject<Product>(
      currentProperty,
      Object.keys(product) as Array<keyof Product>
    );

    setCurrentProperty(nextProperty);
  }

  return (
    <Card sx={{ maxWidth: 345 }} className={activeClasses}>
      <CardActionArea onClick={handleClick}>
        <CardMedia component="img" height="140" image={product.picture} alt="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product[currentProperty]}
          </Typography>
          <Typography variant="body2" color={isActive ? "text.primary" : "text.secondary"}>
            {product.address}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
