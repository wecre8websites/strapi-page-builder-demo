import { DefaultComponentProps } from "@wecre8websites/strapi-page-builder-react";

interface HeroProps extends DefaultComponentProps {
  heading?: string,
  subheading?: string,
  image?: {
    src?: string,
    alt?: string,
  }
  cta?: {
    text?: string,
    url?: string,
  }[]
}

export default HeroProps;