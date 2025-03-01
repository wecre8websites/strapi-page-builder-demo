'use client';
import { useParams } from 'next/navigation';
import { FC } from 'react';
import { useInView } from "react-intersection-observer";
import { FeaturedCategoryComponent, FeaturedCategoryProps } from './component';

export const FeaturedCategory: FC<FeaturedCategoryProps> = (props) => {
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