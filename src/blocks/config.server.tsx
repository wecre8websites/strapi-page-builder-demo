import { Config } from "@wecre8websites/strapi-page-builder-react";
import { CategoriesProps } from "./Categories";
import { CategoriesConfig } from "./Categories/CategoriesConfig.server";
import { FeaturedCategoryProps } from "./FeaturedCategory";
import { FeaturedCategoryConfig } from "./FeaturedCategory/FeaturedCategoryConfig.server";
import { FeaturedProductsProps } from "./FeaturedProducts";
import { FeaturedProductsConfig } from "./FeaturedProducts/FeaturedProductsConfig.server";
import { HeroConfig } from "./Hero/HeroConfig.server";
import HeroProps from "./Hero/HeroProps";
import { RootConfigServer } from "./Root";
import RootProps from "./Root/RootProps";
import { TestimonialGridConfig } from "./TestimonialGrid/TestimonialGridConfig.server";
import { TestimonialGridProps } from "./TestimonialGrid/TestimonialGridProps";
import { TestimonialItemProps } from "./TestimonialItem";
import { TestimonialItemConfig } from "./TestimonialItem/TestimonialItemConfig.server";
type PageBuilderBlocks = {
  Hero: HeroProps,
  FeaturedProducts: FeaturedProductsProps,
  Categories: CategoriesProps
  FeaturedCategory: FeaturedCategoryProps,
  TestimonialGrid: TestimonialGridProps,
  TestimonialItem: TestimonialItemProps,
}

const config: Config<PageBuilderBlocks, RootProps> = {
  components: {
    Hero: HeroConfig,
    FeaturedProducts: FeaturedProductsConfig,
    Categories: CategoriesConfig,
    FeaturedCategory: FeaturedCategoryConfig,
    TestimonialGrid: TestimonialGridConfig,
    TestimonialItem: TestimonialItemConfig
  },
  root: RootConfigServer
}

export default config;