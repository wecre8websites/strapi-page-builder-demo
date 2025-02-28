import { DefaultComponentProps, DefaultRootProps } from "@wecre8websites/strapi-page-builder-react";

interface RootProps extends DefaultComponentProps {
  siteName: string;
  menu: any,
  logo?: {
    src: string;
    alt: string;
  };
  children: React.ReactNode;
}

export default RootProps