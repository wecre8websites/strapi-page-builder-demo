import cleanProps from "@/lib/cleanProps";
import { ComponentConfig } from "@wecre8websites/strapi-page-builder-react";
import FeaturedCategory, { FeaturedCategoryProps } from ".";

export const FeaturedCategoryConfig: Omit<ComponentConfig<FeaturedCategoryProps, FeaturedCategoryProps>, "type"> = {
  fields: {
    heading: { type: "text", label: "Heading" },
    subheading: { type: "text", label: "Subheading" },
    category: { type: "strapi", label: "Category", contentType: "api::collection.collection", populate: ["populate[0]=localizations", "populate[1]=image", "populate[2]=products.localizations", "populate[3]=products.media"] },
  },
  render: (props) => {
    return <FeaturedCategory {...cleanProps(props)} />
  }
}