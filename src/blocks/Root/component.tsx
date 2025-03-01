'use client';
import { DefaultComponentProps, DropZone } from "@wecre8websites/strapi-page-builder-react";
import { FC, ReactElement } from "react";
import FooterComponent from "./Footer";
import HeaderComponent from "./Header";

export interface RootProps extends DefaultComponentProps {
  siteName: string;
  menu: any,
  logo?: {
    src: string;
    alt: string;
  };
  children: React.ReactNode;
}

export const RootComponent: FC<RootProps> = ({ children, puck: { metadata }, menu, siteName, logo }) => {
  return (
    <div className="antialiased text-gray-800 min-h-screen flex flex-col">
      <a href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 focus:p-4 focus:bg-white focus:text-black">
        Skip to main content
      </a>
      <HeaderComponent siteName={siteName} logo={logo} menu={menu} />

      <main id="main-content">
        <DropZone zone="default-zone" style={{ flexGrow: 1 }} className="flex-1 relative h-full" />
      </main>
      <FooterComponent siteName={siteName} />

    </div>
  ) as ReactElement;
};

