export default {
  url: process.env.NEXT_PUBLIC_API_URL as string,
  authToken: process.env.STRAPI_ADMIN_TOKEN as string,
  imageUrl: process.env.NEXT_PUBLIC_IMAGE_URL as string,
}