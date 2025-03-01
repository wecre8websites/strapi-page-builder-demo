'use client';
import { ComponentConfig } from "@wecre8websites/strapi-page-builder-react";
import { TestimonialItemComponent, TestimonialItemProps } from "./component";

export const TestimonialItemConfig: ComponentConfig<TestimonialItemProps> = {
  fields: {
    message: { type: "text", label: "Message" },
    name: { type: "text", label: "Name" },
    title: { type: "text", label: "Title" },
    rating: { type: "slider", label: "Star rating", min: 1, max: 5, step: 1 },
  },
  defaultProps: {
    message: "I'm absolutely in love with the minimalist design and quality of their products. The attention to detail is remarkable, and everything I've ordered has exceeded my expectations.",
    name: "Sarah Johnson",
    title: "Loyal Customer",
    rating: 5
  },
  label: "Testimonial",
  render: (data) => <TestimonialItemComponent {...data} />
}