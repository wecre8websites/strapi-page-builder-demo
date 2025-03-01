'use client'
import { RootComponent, RootProps } from "./component";

export const RootConfig:any = {
  fields: {
    siteName: {
      type: "text",
      label: "Site name"
    },
    logo: {
      type: "object",
      label: "Logo",
      objectFields: {
        src: { type: "media", mediaType: "image" },
        alt: { type: "text" }
      }
    },
    menu: {
      type: "strapi",
      label: "Main menu",
      contentType: "plugin::navigation.navigation",
      titleField: "name",
    }
  },
  defaultProps: {
    title: "",
    siteName: "",
    logo: {
      src: "",
      alt: ""
    },
    menu: null,
  },
  resolveData: async (data: any) => {
    const documentId = data?.props?.menu?.documentId;
    if (!documentId) return data;
    const menu = await fetch(`${process.env.NEXT_PUBLIC_API_URL as string}/navigation/render/${documentId}?type=TREE`);
    const menuJson = await menu.json();
    return {
      ...data,
      props: {
        ...data.props,
        menu: {
          ...data.props.menu,
          menuItems: menuJson
        }
      }
    }
  },
  render: (data: RootProps) => <RootComponent {...data} />,
}