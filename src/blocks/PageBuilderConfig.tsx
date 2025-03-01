'use client'
import { Config } from "@wecre8websites/strapi-page-builder-react";
import { CategoriesConfig } from "./Categories/config";
import { FeaturedCategoryConfig } from "./FeaturedCategory/config";
import { FeaturedProductsConfig } from "./FeaturedProducts/config";
import { TestimonialGridConfig } from "./TestimonialGrid/config";
import { TestimonialItemProps } from "./TestimonialItem/component";
import { TestimonialItemConfig } from "./TestimonialItem/config";
import { RootProps } from "./Root/component";
import { RootConfig } from "./Root/config";
import { HeroProps } from "./Hero/component.client";
import { HeroConfig } from "./Hero/config";
import { TestimonialGridProps } from "./TestimonialGrid/component";
import { FeaturedProductsProps } from "./FeaturedProducts/component";
import { CategoriesProps } from "./Categories/component";
import { FeaturedCategoryProps } from "./FeaturedCategory/component";

type PageBuilderBlocks = {
  Hero: HeroProps,
  FeaturedProducts: FeaturedProductsProps,
  Categories: CategoriesProps,
  FeaturedCategory: FeaturedCategoryProps,
  TestimonialGrid: TestimonialGridProps,
  TestimonialItem: TestimonialItemProps,
}

const config: Config<PageBuilderBlocks, RootProps, "heros" | "features" | "testimonials"> = {
  components: {
    Hero: HeroConfig,
    FeaturedProducts: FeaturedProductsConfig,
    Categories: CategoriesConfig,
    FeaturedCategory: FeaturedCategoryConfig,
    TestimonialGrid: TestimonialGridConfig,
    TestimonialItem: TestimonialItemConfig
  },
  categories: {
    heros: { title: "Heros", components: ["Hero"] },
    features: { title: "Features", components: ["FeaturedProducts", "Categories", "FeaturedCategory"] },
    testimonials: { title: "Testimonials", components: ["TestimonialGrid", "TestimonialItem"] }
  },
  root: RootConfig
}

export default config;