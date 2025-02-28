This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started with Page Builder for Strapi

Visit (https://pagebuilder.wc8.io)[https://pagebuilder.wc8.io] for the complete docs.

## Quickstart

Create a `.env` file with the following values
```STRAPI_ADMIN_TOKEN=[Generate in your Strapi Admin]
PAGE_BUILDER_API_KEY=[Get one free at (https://pagebuilder.wc8.io)[https://pagebuilder.wc8.io]]
NEXT_PUBLIC_API_URL=http://localhost:1337/api
NEXT_PUBLIC_IMAGE_URL=http://localhost:1337
```

Ensure you've installed the (@wecre8websites/strapi-page-builder)[https://www.npmjs.com/package/@wecre8websites/strapi-page-builder] plugin in Strapi and set it up according to the docs. Your Page Builder editor URL is (http://localhost:3000/editor)[http://localhost:3000/editor]

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

Open [http://localhost:3000](http://localhost:3000) to see the live version of your site.

You can start editing the page by opening Page Builder from the sidebar in your Strapi Admin.
