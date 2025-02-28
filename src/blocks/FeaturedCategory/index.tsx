'use client';
import { DefaultComponentProps } from '@wecre8websites/strapi-page-builder-react';
import { useParams } from 'next/navigation';
import { FC } from 'react';
import { useInView } from "react-intersection-observer";
import { Category } from '../../../types/Category';
import FeaturedCategoryComponent from './FeaturedCategory';

export interface FeaturedCategoryProps extends DefaultComponentProps {
  heading?: string
  subheading?: string
  category?: Category
}

const FeaturedCategory: FC<FeaturedCategoryProps> = (props) => {
  const params = useParams()
  const locale = params.locale as string
  const { ref, inView, entry } = useInView({
    threshold: 0.2,
  });
  const isInView = entry ? inView : true
  return (
    <div ref={ref}>
      <FeaturedCategoryComponent {...props} inView={isInView} locale={locale} />
    </div>
  );
};

export default FeaturedCategory;