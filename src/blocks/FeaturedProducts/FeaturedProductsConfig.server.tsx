import { ComponentConfig } from "@wecre8websites/strapi-page-builder-react";
import FeaturedProducts, { FeaturedProductsProps } from ".";
import cleanProps from "@/lib/cleanProps";

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
  },
  render: (props) => {
    return <FeaturedProducts {...cleanProps(props)} />
  }
}