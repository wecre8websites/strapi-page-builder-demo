'use client'
import { ComponentConfig } from "@wecre8websites/strapi-page-builder-react";
import { Hero, HeroProps } from "./component.client";

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
  label: "Hero",
  defaultProps: {
    heading: "Minimal Design, Maximum Impact",
    subheading: "Discover our curated collection of minimalist products designed for modern living.",
    cta: [
      { url: "#", text: "Shop Now" },
      { url: "#", text: "Explore Categories" },
    ]
  },
  render: (data) => <Hero {...data} />
}