'use client';
import { DefaultComponentProps } from '@wecre8websites/strapi-page-builder-react';
import { useParams } from 'next/navigation';
import { FC } from 'react';
import { useInView } from "react-intersection-observer";
import { Category } from '../../../types/Category';
import CategoriesComponent from './CategoriesComponent';

export interface CategoriesProps extends DefaultComponentProps {
  heading: string;
  subheading: string;
  categories: {
    category: Category;
  }[]
  cta: string;
}

const Categories: FC<CategoriesProps> = (props) => {
  const params = useParams();
  const locale = params.locale as string;
  const { ref, inView, entry } = useInView({
    threshold: 0.2,
  });
  const isInView = entry ? inView : true;
  return (
    <div ref={ref}>
      <CategoriesComponent {...props} inView={isInView} locale={locale} />
    </div>
  );
};

export default Categories;