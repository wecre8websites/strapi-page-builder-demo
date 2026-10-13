import { Editor } from "@wecre8websites/strapi-page-builder-react";
import { notFound } from "next/navigation";
import config from "../../blocks/PageBuilderConfig.client";
import strapiConfig from "@/config/strapiConfig";
import { i18n } from "@/i18n.config";

// Called when a link is followed inside the editor preview. Return the Strapi entry that page is built from,
// or null to ignore the link. Here every locale's home page is the Homepage single type.
async function resolveLink(path: string) {
  "use server";
  const [, first] = new URL(path, "http://x").pathname.split("/");
  const isRoot = new URL(path, "http://x").pathname.replace(/\/$/, "") === (first && (i18n.locales as readonly string[]).includes(first) ? `/${first}` : "");
  if (!isRoot) return null;
  const locale = (i18n.locales as readonly string[]).includes(first || "") ? first : i18n.defaultLocale;
  const res = await fetch(`${strapiConfig.url}/homepage?locale=${locale}&populate=template`, { headers: { Authorization: `Bearer ${process.env.STRAPI_ADMIN_TOKEN}` }, cache: "no-store" });
  const { data } = await res.json();
  if (!data?.documentId) return null;
  return { contentType: "api::homepage.homepage", contentId: data.documentId as string, templateId: data.template?.documentId as string | undefined, locale };
}

export default async function EditorPage({ searchParams }: { searchParams: Promise<{ _pagebuilderToken?: string }> }) {
  const { _pagebuilderToken } = await searchParams;
  if (!_pagebuilderToken) return notFound();
  return <Editor config={config} apiKey={process.env.PAGE_BUILDER_API_KEY as string} strapi={strapiConfig} resolveLink={resolveLink} />
}
