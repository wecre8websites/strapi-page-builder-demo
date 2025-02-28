import { processProps } from '@wecre8websites/strapi-page-builder-react/rsc';
import { FC } from 'react';
import { TestimonialGridProps } from './TestimonialGridProps';

const TestimonialComponentGrid: FC<TestimonialGridProps> = ({ id, puck: { metadata, renderDropZone }, ...props }) => {
  const { heading, subheading } = processProps(props, metadata);
  return (
    <section id={id} className="py-16 bg-gray-50 dark:bg-neutral-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">{heading}</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {renderDropZone({ zone: `${id}-dropzone`, allow: ["TestimonialItem"] })}
        </div>
        <div className="mt-12 text-center">
          <div className="inline-flex rounded-md shadow">
            <a href="#" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black hover:bg-gray-800 dark:bg-neutral-800 dark:hover:bg-neutral-700 transition-colors duration-300">
              Read More Reviews
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialComponentGrid;