import { DefaultComponentProps, processProps } from '@wecre8websites/strapi-page-builder-react';
import Image from 'next/image';
import { FC } from 'react';
import { Category } from '../../../types/Category';

export interface FeaturedCategoryProps extends DefaultComponentProps {
  heading?: string
  subheading?: string
  category?: Category
}

export const FeaturedCategoryComponent: FC<FeaturedCategoryProps & { inView: boolean, locale: string }> = ({ id, puck: { metadata }, category: coreCategory, inView = false, locale, ...props }) => {
  const { heading, subheading, atc, cta } = processProps(props, metadata || {})
  const category = coreCategory?.localizations?.find((category) => category.locale === locale) || coreCategory;
  function randomNumber(min: number, max: number) {
    return new Intl.NumberFormat(locale || "en", { style: "decimal", maximumSignificantDigits: 2 }).format(Math.random() * (max - min) + min);
  }
  return (
    <section id={id} className="py-16 bg-white dark:bg-neutral-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">{heading || category?.title}</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">{subheading || category?.shortDescription}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {category?.products?.slice(0, 4)?.map((coreProduct, index) => {
            const product = coreProduct?.localizations?.find((product) => product.locale === locale) || coreProduct;
            return (
              <div key={`${id}-product-${index}`} className="group">
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <div className="bg-gray-200 dark:bg-neutral-800 aspect-square rounded-lg flex items-center justify-center">
                    {coreProduct?.media?.[0]?.url
                      ? <Image src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${coreProduct?.media?.[0]?.url}`} alt={product?.title || ""} className="object-cover" layout="fill" />
                      :
                      <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                      </svg>}
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
                  <div className="absolute top-2 right-2">
                    {/* <span className="bg-black text-white text-xs px-2 py-1 rounded">Bestseller</span> */}
                    {/* <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">Sale</span> */}
                    {/* <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">New</span> */}
                  </div>
                </div>
                <h3 className="font-medium text-lg mb-2 dark:text-white">{product?.title}</h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 justify-center">
                    <p className="text-gray-900 font-bold dark:text-gray-200">{new Intl.NumberFormat("en", { style: "currency", currency: "USD", minimumFractionDigits: 2 }).format(coreProduct?.price || 0)}</p>
                    <p className={`text-gray-500 text-sm line-through ${!coreProduct.msrp || (coreProduct.price || 0) >= coreProduct.msrp ? "hidden" : ""}`}>{new Intl.NumberFormat("en", { style: "currency", currency: "USD", minimumFractionDigits: 2 }).format(coreProduct?.msrp || 0)}</p>
                  </div>
                  <div className="flex items-center">
                    <div className="flex text-yellow-400">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="ml-1 text-sm">{randomNumber(1, 5)}</span>
                    </div>
                  </div>
                </div>
                <button className="mt-4 w-full bg-black hover:bg-gray-800 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300 dark:bg-neutral-800 dark:hover:bg-neutral-700">
                  {atc}
                </button>
              </div>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <a href={`#`} className="inline-block border-2 border-black dark:border-white text-black dark:text-white font-medium py-2 px-6 rounded-lg hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-300">
            {cta}
          </a>
        </div>
      </div>
    </section>
  );
};
