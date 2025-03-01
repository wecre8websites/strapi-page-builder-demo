import { Editor } from "@wecre8websites/strapi-page-builder-react";
import { notFound } from "next/navigation";
import config from "../../blocks/PageBuilderConfig";
import strapiConfig from "@/config/strapiConfig";
export default async function EditorPage({ searchParams }: { searchParams: Promise<{ _pagebuilderToken?: string }> }) {
  const { _pagebuilderToken } = await searchParams;
  if (!_pagebuilderToken) return notFound();
  return <Editor config={config} apiKey={process.env.PAGE_BUILDER_API_KEY as string} strapi={strapiConfig} />
}
