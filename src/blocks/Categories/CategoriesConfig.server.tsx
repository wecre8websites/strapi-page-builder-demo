import { ComponentConfig } from "@wecre8websites/strapi-page-builder-react";
import Categories, { CategoriesProps } from ".";
import cleanProps from "@/lib/cleanProps";

export const CategoriesConfig: Omit<ComponentConfig<CategoriesProps, CategoriesProps>, "type"> = {
  fields: {
    heading: { type: "text", label: "Heading" },
    subheading: { type: "text", label: "Subheading" },
    categories: {
      type: "array",
      label: "Categories",
      arrayFields: {
        category: { type: "strapi", contentType: "api::collection.collection", populate: ["populate[0]=localizations", "populate[1]=image", "populate[2]=products.localizations", "populate[3]=products.media"] },
      },
      getItemSummary: (item) => item?.category?.title || "Category",
      max: 6
    },
  },
  render: (props) => <Categories {...cleanProps(props)} />
}