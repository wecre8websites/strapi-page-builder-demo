'use client'
import { ComponentConfig } from "@wecre8websites/strapi-page-builder-react";
import { FeaturedProductsProps } from "./component";
import { FeaturedProducts } from "./component.client";

export const FeaturedProductsConfig: Omit<ComponentConfig<FeaturedProductsProps, FeaturedProductsProps>, "type"> = {
  fields: {
    heading: { type: "text", label: "Heading" },
    subheading: { type: "text", label: "Subheading" },
    products: {
      type: "array",
      label: "Products",
      arrayFields: {
        product: { type: "strapi", contentType: "api::product.product" },
      },
      getItemSummary: (item) => item?.product?.title || "Product",
      max: 4
    },
    atc: { type: "text", label: "Add to cart text" },
    cta: { type: "text", label: "Call to action" }
  },
  defaultProps: {
    heading: "Featured Products",
    subheading: "Our most popular minimalist designs that blend form and function for everyday elegance.",
    products: [],
    atc: "Add to cart",
    cta: "View all products"
  },
  label: "Featured Products",
  render: (data) => <FeaturedProducts {...data} />
}