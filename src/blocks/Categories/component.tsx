import { DefaultComponentProps, processProps } from '@wecre8websites/strapi-page-builder-react';
import Image from 'next/image';
import { FC } from 'react';
import { Category } from '../../../types/Category';

const grids = {
  1: [{ items: 1, className: "md:grid-cols-1" }],
  2: [{ items: 2, className: "md:grid-cols-2" }],
  3: [{ items: 3, className: "md:grid-cols-3" }],
  4: [{ items: 2, className: "md:grid-cols-2" }, { items: 2, className: "md:grid-cols-2" }],
  5: [{ items: 3, className: "md:grid-cols-3" }, { items: 2, className: "md:grid-cols-2" }],
  6: [{ items: 3, className: "md:grid-cols-3" }, { items: 3, className: "md:grid-cols-3" }],
}

export interface CategoriesProps extends DefaultComponentProps {
  heading: string;
  subheading: string;
  categories: {
    category: Category;
  }[]
  cta: string;
}

export const CategoriesComponent: FC<CategoriesProps & { inView: boolean, locale?: string }> = ({ id, puck: { metadata }, categories, image, inView = false, locale, ...props }) => {
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
