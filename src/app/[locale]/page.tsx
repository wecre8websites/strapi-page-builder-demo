import strapiConfig from "@/config/strapiConfig";
import { Render } from "@wecre8websites/strapi-page-builder-react";
import { notFound } from "next/navigation";
import config from "../../blocks/PageBuilderConfig";
import "../globals.css";

export const revalidate = 60

const getCMSContent = async (locale?: string) => {
  const contentType = "homepage" // Change this to the content type you want to fetch

  const queryUrl = new URL(`${process.env.NEXT_PUBLIC_API_URL as string}/${contentType}`)
  if (locale) queryUrl.searchParams.append("locale", locale)
  queryUrl.searchParams.append("populate", "*")
  const res = await fetch(queryUrl.toString(), {
    headers: {
      "Authorization": `Bearer ${process.env.STRAPI_ADMIN_TOKEN}`
    }
  })

  const { data } = await res.json()
  if (!data) return notFound()
  if (Array.isArray(data)) {
    const { template, ...content } = data[0]
    return { template, ...content }
  }
  const { template, ...content } = data
  return { template, ...content }
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  const { template, ...content } = await getCMSContent(locale)
  if (!template?.json || !content) return notFound();
  return <Render
    config={config}
    data={{
      templateJson: template.json,
      content
    }}
    strapi={{ ...strapiConfig, locale }} />;
}