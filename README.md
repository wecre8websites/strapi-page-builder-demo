This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started with Page Builder for Strapi

Visit https://pagebuilder.wc8.io for the complete docs.

## Quickstart

If you have not already done so, bootstrap a Strapi CMS with Page Builder pre-configured in a different folder by running `npx create-strapi-app@latest cms --template https://github.com/wecre8websites/strapi-page-builder-cms --template-branch master`. Both Strapi and NextJS will need to run at the same time.

[Create a Read-only API token in your Strapi Admin](http://localhost:1337/admin/settings/api-tokens)
[Sign up for a free Page Builder API key](https://pagebuilder.wc8.io)

Create a `.env` file with the following values adding in the tokens created above.
```STRAPI_ADMIN_TOKEN=...
PAGE_BUILDER_API_KEY=...
NEXT_PUBLIC_API_URL=http://localhost:1337/api
NEXT_PUBLIC_IMAGE_URL=http://localhost:1337
```

If you're not using the Strapi template above, ensure you've installed the [@wecre8websites/strapi-page-builder](https://www.npmjs.com/package/@wecre8websites/strapi-page-builder) plugin in Strapi and set it up according to the docs. Your Page Builder editor URL is http://localhost:3000/editor

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open http://localhost:3000 to see the live version of your site.

You can start editing the page by opening Page Builder from the sidebar in your Strapi Admin.
