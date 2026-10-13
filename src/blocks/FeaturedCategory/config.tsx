'use client'
import { ComponentConfig } from "@wecre8websites/strapi-page-builder-react";
import FeaturedCategory from "./component.client";
import { FeaturedCategoryProps } from "./component";

export const FeaturedCategoryConfig: Omit<ComponentConfig<FeaturedCategoryProps, FeaturedCategoryProps>, "type"> = {
  fields: {
    heading: { type: "text", label: "Heading" },
    subheading: { type: "text", label: "Subheading" },
    category: { type: "strapi", label: "Category", contentType: "api::collection.collection", populate: ["populate[0]=localizations", "populate[1]=image", "populate[2]=products.localizations", "populate[3]=products.media"] },
    atc: { type: "text", label: "Add to cart text" },
    cta: { type: "text", label: "Call to action" }
  },
  defaultProps: {
    heading: "Bestsellers",
    subheading: "Our most popular products loved by customers worldwide",
    category: {
      documentId: "",
      title: "Bestsellers",
      shortDescription: "Our most popular products loved by customers worldwide",
      products: [
        {
          documentId: "",
          title: "Minimalist Watch",
          price: 129.99,
        },
        {
          documentId: "",
          title: "Modern Desk Lamp",
          price: 79.99,
          msrp: 99.99,
        },
        {
          documentId: "",
          title: "Ceramic Planter",
          price: 49.99,
        },
        {
          documentId: "",
          title: "Minimalist Vase",
          price: 39.99,
        },
      ]
    },
    atc: "Add to cart",
    cta: "View all products"
  },
  label: "Featured Category",
  render: (data) => <FeaturedCategory {...data} />
}