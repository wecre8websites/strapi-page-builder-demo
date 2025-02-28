'use client'
import { Config } from "@wecre8websites/strapi-page-builder-react";
import { CategoriesProps } from "./Categories";
import { CategoriesConfig } from "./Categories/CategoriesConfig.client";
import { FeaturedCategoryProps } from "./FeaturedCategory";
import { FeaturedCategoryConfig } from "./FeaturedCategory/FeaturedCategoryConfig.client";
import { FeaturedProductsProps } from "./FeaturedProducts";
import { FeaturedProductsConfig } from "./FeaturedProducts/FeaturedProductsConfig.client";
import { HeroConfig } from "./Hero/HeroConfig.client";
import HeroProps from "./Hero/HeroProps";
import { RootConfigClient } from "./Root";
import RootProps from "./Root/RootProps";
import { TestimonialGridConfig } from "./TestimonialGrid/TestimonialGridConfig.client";
import { TestimonialGridProps } from "./TestimonialGrid/TestimonialGridProps";
import { TestimonialItemProps } from "./TestimonialItem";
import { TestimonialItemConfig } from "./TestimonialItem/TestimonialItemConfig.client";

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
  root: RootConfigClient
}

export default config;