'use client';
import React, { FC } from 'react';
import { useInView } from "react-intersection-observer";
import FeaturedProductsComponent from './FeaturedProductsComponent';
import { Product } from '../../../types/Product';
import { DefaultComponentProps } from '@wecre8websites/strapi-page-builder-react';
import { useParams } from 'next/navigation';

export interface FeaturedProductsProps extends DefaultComponentProps {
  heading?: string
  subheading?: string
  products: { product: Product }[]
  atc: string,
  cta: string,
}

const FeaturedProducts: FC<FeaturedProductsProps> = (props) => {
  const params = useParams()
  const locale = params.locale as string
  const { ref, inView, entry } = useInView({
    threshold: 0.2,
  });
  const isInView = entry ? inView : true
  return (
    <div ref={ref}>
      <FeaturedProductsComponent {...props} inView={isInView} locale={locale} />
    </div>
  );
};

export default FeaturedProducts;