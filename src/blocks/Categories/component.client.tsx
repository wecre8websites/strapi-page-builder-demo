'use client';
import { useParams } from 'next/navigation';
import { FC } from 'react';
import { useInView } from "react-intersection-observer";
import { CategoriesComponent, CategoriesProps } from './component';

export const Categories: FC<CategoriesProps> = (props) => {
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