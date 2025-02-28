import { processProps } from '@wecre8websites/strapi-page-builder-react';
import Image from 'next/image';
import { FC } from 'react';
import { CategoriesProps } from '.';

const grids = {
  1: [{ items: 1, className: "md:grid-cols-1" }],
  2: [{ items: 2, className: "md:grid-cols-2" }],
  3: [{ items: 3, className: "md:grid-cols-3" }],
  4: [{ items: 2, className: "md:grid-cols-2" }, { items: 2, className: "md:grid-cols-2" }],
  5: [{ items: 3, className: "md:grid-cols-3" }, { items: 2, className: "md:grid-cols-2" }],
  6: [{ items: 3, className: "md:grid-cols-3" }, { items: 3, className: "md:grid-cols-3" }],
}

const CategoriesComponent: FC<CategoriesProps & { inView: boolean, locale?: string }> = ({ id, puck: { metadata }, categories, image, inView = false, locale, ...props }) => {
  const { heading, subheading, cta } = processProps(props, metadata || {})
  // const { heading, subheading } = props;
  const grid = grids[(categories || []).length as keyof typeof grids] || grids[1]
  return (
    <section id={id} className="py-16 bg-neutral-900 text-white">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-12 ${inView ? "animate__animated animate__fadeIn" : "opacity-0"}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{heading}</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="flex flex-col gap-16">
          {grid.map((row, rowIndex) => (<div key={`${id}-row-${rowIndex}`} className={`grid grid-cols-1 ${row.className} gap-6`}>
            {categories.slice(rowIndex > 0 ? grid[rowIndex - 1].items : 0, (rowIndex > 0 ? grid[rowIndex - 1].items : 0) + row.items).map(({ category }, index) => {
              const enCategory = category?.localizations?.find((l) => l.locale === "en")
              const image = category?.image?.url || category?.products?.[0]?.media?.[0]?.url || enCategory?.image?.url || enCategory?.products?.[0]?.media?.[0]?.url
              return (
                <div key={`${id}-rowitem-${index}`} className={`group relative bg-neutral-800 rounded-lg overflow-hidden h-64 md:h-80 ${inView ? `animate__animated ${row.items === 2 ? index === 0 ? "animate__fadeInLeft" : "animate__fadeInRight" : rowIndex === 0 ? "animate__fadeInDown" : "animate__fadeInUp"}` : "opacity-0"}`} style={{ animationDelay: `0.${index}s` }}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-1/2 h-1/2 bg-neutral-700 rounded-lg flex items-center justify-center">
                      {image
                        ? <Image src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${image}`} alt={""} className="object-cover" layout="fill" />
                        : <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                        </svg>}
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent opacity-70"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-2xl font-bold mb-2">{category?.title}</h3>
                    <p className="text-gray-300 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{category?.shortDescription}</p>
                    <a href="#" className="inline-flex items-center text-white border-b border-white pb-1 group-hover:border-gray-300 transition-all">
                      <span>{cta}</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              )
            })}
          </div>))}
        </div>
      </div>
    </section >

  );
};

export default CategoriesComponent;

/**
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="group relative bg-neutral-800 rounded-lg overflow-hidden h-64 md:h-80 animate__animated animate__fadeInUp">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-1/2 h-1/2 bg-neutral-700 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent opacity-70"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-2xl font-bold mb-2">Home Decor</h3>
              <p className="text-gray-300 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Elegant minimalist accessories for your living space.</p>
              <a href="#" className="inline-flex items-center text-white border-b border-white pb-1 group-hover:border-gray-300 transition-all">
                <span>Shop Now</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>

          <div className="group relative bg-neutral-800 rounded-lg overflow-hidden h-64 md:h-80 animate__animated animate__fadeInUp" style={{ animationDelay: "0.1s" }}>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-1/2 h-1/2 bg-neutral-700 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent opacity-70"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-2xl font-bold mb-2">Office & Workspace</h3>
              <p className="text-gray-300 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Clean and functional designs for productive spaces.</p>
              <a href="#" className="inline-flex items-center text-white border-b border-white pb-1 group-hover:border-gray-300 transition-all">
                <span>Shop Now</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>

          <div className="group relative bg-neutral-800 rounded-lg overflow-hidden h-64 md:h-80 animate__animated animate__fadeInUp" style={{ animationDelay: "0.2s" }}>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-1/2 h-1/2 bg-neutral-700 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent opacity-70"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-2xl font-bold mb-2">Lifestyle Accessories</h3>
              <p className="text-gray-300 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Essential minimalist products for everyday use.</p>
              <a href="#" className="inline-flex items-center text-white border-b border-white pb-1 group-hover:border-gray-300 transition-all">
                <span>Shop Now</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="group relative bg-neutral-800 rounded-lg overflow-hidden h-64 animate__animated animate__fadeInLeft">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-1/3 h-1/2 bg-neutral-700 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent opacity-70"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="bg-neutral-900 bg-opacity-60 p-4 rounded-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-2xl font-bold mb-2">Lighting Collection</h3>
                <p className="text-gray-300 mb-4">Minimalist lamps and lighting solutions for every space.</p>
                <a href="#" className="inline-flex items-center text-white">
                  <span className="border-b border-white pb-1 group-hover:border-gray-300 transition-all">Explore Collection</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="group relative bg-neutral-800 rounded-lg overflow-hidden h-64 animate__animated animate__fadeInRight">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-1/3 h-1/2 bg-neutral-700 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent opacity-70"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="bg-neutral-900 bg-opacity-60 p-4 rounded-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-2xl font-bold mb-2">Limited Edition</h3>
                <p className="text-gray-300 mb-4">Exclusive minimalist designs with premium materials.</p>
                <a href="#" className="inline-flex items-center text-white">
                  <span className="border-b border-white pb-1 group-hover:border-gray-300 transition-all">Discover Now</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
 */