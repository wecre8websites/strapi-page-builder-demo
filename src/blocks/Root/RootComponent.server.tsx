import { FC } from "react";
import FooterComponent from "./Footer";
import HeaderComponent from "./Header";
import RootProps from "./RootProps";

export const RootComponent: FC<RootProps> = async ({ children, puck: { renderDropZone, metadata }, menu, siteName, logo }) => {

  const result = await renderDropZone({ zone: "default-zone", className: "flex-grow" });
  return <div className="antialiased text-gray-800 min-h-screen flex flex-col">
    <a href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 focus:p-4 focus:bg-white focus:text-black">
      Skip to main content
    </a>
    <HeaderComponent siteName={siteName} logo={logo} menu={menu} />
    <main id="main-content" className="flex-1 relative h-full">{result}</main>
    <FooterComponent siteName={siteName} />
  </div>

};
