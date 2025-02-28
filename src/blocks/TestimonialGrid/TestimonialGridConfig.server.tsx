import { ComponentConfig } from "@wecre8websites/strapi-page-builder-react";
import TestimonialComponentGrid from "./TestimonialGridComponent.server";
import { TestimonialGridProps } from "./TestimonialGridProps";

export const TestimonialGridConfig: ComponentConfig<TestimonialGridProps> = {
  fields: {
    heading: { type: "text", label: "Heading" },
    subheading: { type: "text", label: "Subheading" },
  },
  render: (data) => <TestimonialComponentGrid {...data} />
}