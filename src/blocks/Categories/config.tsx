'use client'
import { ComponentConfig } from "@wecre8websites/strapi-page-builder-react";
import { Categories } from "./component.client";
import { CategoriesProps } from "./component";

export const CategoriesConfig: Omit<ComponentConfig<CategoriesProps, CategoriesProps>, "type"> = {
  fields: {
    heading: { type: "text", label: "Heading" },
    subheading: { type: "text", label: "Subheading" },
    categories: {
      type: "array",
      label: "Categories",
      arrayFields: {
        category: {
          type: "strapi",
          contentType: "api::collection.collection",
          populate: [
            "populate[0]=localizations",
            "populate[1]=image",
            "populate[2]=products.localizations",
            "populate[3]=products.media",
            "populate[4]=localizations.products.media"
          ]
        },
      },
      getItemSummary: (item) => item?.category?.title || "Category",
      max: 6
    },
    cta: { type: "text", label: "Call to action" }
  },
  defaultProps: {
    heading: "Shop by Categories",
    subheading: "Browse our minimalist collection organized by lifestyle categories.",
    categories: [
      {
        category: {
          documentId: "",
          title: "Home Decor",
          shortDescription: "Elegant minimalist accessories for your living space."
        }
      },
      {
        category: {
          documentId: "",
          title: "Office & Workspace",
          shortDescription: "Clean and functional designs for productive spaces."
        }
      },
      {
        category: {
          documentId: "",
          title: "Lifestyle Accessories",
          shortDescription: "Essential minimalist products for everyday use."
        }
      },
      {
        category: {
          documentId: "",
          title: "Lighting Collection",
          shortDescription: "Minimalist lamps and lighting solutions for every space."
        }
      },
      {
        category: {
          documentId: "",
          title: "Limited Edition",
          shortDescription: "Exclusive minimalist designs with premium materials."
        }
      },
    ],
    cta: "Shop now"
  },
  label: "Categories",
  render: (data) => <Categories {...data} />
}