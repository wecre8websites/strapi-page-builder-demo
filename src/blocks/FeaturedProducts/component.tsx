import { processProps } from "@wecre8websites/strapi-page-builder-react/rsc";
import Image from "next/image";
import { FC } from 'react';
import { Product } from "../../../types/Product";
import { DefaultComponentProps } from "@wecre8websites/strapi-page-builder-react";

export interface FeaturedProductsProps extends DefaultComponentProps {
  heading?: string
  subheading?: string
  products: { product: Product }[]
  atc: string,
  cta: string,
}

const FeaturedProductsComponent: FC<FeaturedProductsProps & { inView?: boolean, locale: string }> = ({ id, puck: { metadata }, products, inView = true, locale, ...props }) => {
  const { heading, subheading, atc, cta } = processProps(props, metadata) as typeof props;
  function randomNumber(min: number, max: number) {
    return new Intl.NumberFormat(locale || "en", { style: "decimal", maximumSignificantDigits: 2 }).format(Math.random() * (max - min) + min);
  }
  return (
    <section id={id} className="py-16 bg-neutral-800 text-white">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-12 ${inView ? "animate__animated animate__fadeIn" : "opacity-0"}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{heading}</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">{subheading}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products?.map(({ product: coreProduct }, index) => {
            const product = coreProduct?.localizations?.find((product) => product.locale === locale) as Product || coreProduct;
            return (
              <div key={`${id}-products-${index}`} className={`group bg-neutral-700 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl ${inView ? "animate__animated animate__fadeInUp" : "opacity-0"}`} style={{ animationDelay: `0.${index * 2}s` }}>
                <div className="relative h-64 bg-neutral-600 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {coreProduct?.media?.[0].url
                      ? <Image src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${coreProduct?.media?.[0].url}`} alt={product?.title || ""} className="object-cover" layout="fill" />
                      : <div className="w-16 h-32 bg-neutral-500 rounded"></div>
                    }
                  </div>
                  {/* <div className="absolute top-3 right-3 bg-white text-neutral-800 px-2 py-1 rounded text-sm font-medium">New</div> */}
                  {/* <div className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 rounded text-sm font-medium">-20%</div> */}
                  {/* <div className="absolute top-3 right-3 bg-green-500 text-white px-2 py-1 rounded text-sm font-medium">Bestseller</div> */}
                  <button className="absolute bottom-0 left-0 right-0 bg-neutral-900 bg-opacity-90 text-white py-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    {atc}
                  </button>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-medium mb-2">{product?.title}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold">{new Intl.NumberFormat("en", { style: "currency", currency: "USD", minimumFractionDigits: 2 }).format(product?.price || 0)}</span>
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="ml-1 text-sm">{randomNumber(1, 5)}</span>
                    </div>
                  </div>
                </div>
              </div>)
          })}

        </div>

        <div className="mt-12 text-center">
          <a href="#categories" className={`inline-block px-8 py-3 bg-white text-neutral-900 hover:bg-gray-200 rounded-md font-medium transition-all duration-300 ${inView ? "animate__animated animate__pulse animate__infinite animate__slower" : "opacity-0"}`}>
            {cta}
          </a>
        </div>
      </div>
    </section >
  );
};

export default FeaturedProductsComponent;