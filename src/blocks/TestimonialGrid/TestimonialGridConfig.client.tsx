'use client';
import { ComponentConfig } from "@wecre8websites/strapi-page-builder-react";
import TestimonialComponentGrid from "./TestimonialGridComponent.client";
import { TestimonialGridProps } from "./TestimonialGridProps";

export const TestimonialGridConfig: ComponentConfig<TestimonialGridProps> = {
  fields: {
    heading: { type: "text", label: "Heading" },
    subheading: { type: "text", label: "Subheading" },
    cta: { type: "text", label: "Call to action" }
  },
  defaultProps: {
    heading: "What Our Customers Say",
    subheading: "Discover why people love our products and shopping experience",
    cta: "Read more reviews"
  },
  label: "Testimonial Container",
  render: (data) => <TestimonialComponentGrid {...data} />
}