import cleanProps from "@/lib/cleanProps";
import { ComponentConfig } from "@wecre8websites/strapi-page-builder-react";
import Hero from ".";
import HeroProps from "./HeroProps";

export const HeroConfig: Omit<ComponentConfig<HeroProps, HeroProps>, "type"> = {
  fields: {
    heading: { type: "text", label: "Heading" },
    subheading: { type: "text", label: "Subheading" },
    image: {
      type: "object",
      label: "Image",
      objectFields: {
        src: { type: "media", mediaType: "image" },
        alt: { type: "text" }
      }
    },
    cta: {
      type: "array",
      label: "Call to Action",
      arrayFields: {
        url: { type: "text" },
        text: { type: "text" }
      },
      getItemSummary: (item) => item.text || "Item",
      max: 2
    },
  },
  render: (props) => {
    return <Hero {...cleanProps(props)} />
  }
}