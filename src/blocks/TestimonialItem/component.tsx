import { DefaultComponentProps } from '@wecre8websites/strapi-page-builder-react';
import React, { FC } from 'react';

export interface TestimonialItemProps extends DefaultComponentProps {
  message?: string,
  name?: string,
  title?: string,
  rating: 1 | 2 | 3 | 4 | 5
}

export const TestimonialItemComponent: FC<TestimonialItemProps> = ({ id, message, name, title, rating }) => {
  return (
    <div className="bg-white dark:bg-neutral-800 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col">
      <div className="flex-grow">
        <div className="flex text-yellow-400 mb-4">
          {Array.from(Array(rating || 0).keys()).map((star, index) => (<svg key={`${id}-ratingstar-${index}`} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>))}
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-6 italic">
          {message}
        </p>
      </div>
      <div className="flex items-center mt-4">
        <div className="w-12 h-12 bg-gray-200 dark:bg-neutral-700 rounded-full flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500 dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>
        <div className="ml-4">
          <h4 className="font-medium text-lg dark:text-white">{name}</h4>
          <p className="text-gray-500 dark:text-gray-400 text-sm">{title}</p>
        </div>
      </div>
    </div>
  );
};
