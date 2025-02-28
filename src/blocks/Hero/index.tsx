'use client';
import { DefaultComponentProps } from "@wecre8websites/strapi-page-builder-react"
import { FC } from "react"
import HeroComponent from "./HeroComponent"
import { useInView } from "react-intersection-observer"

interface HeroProps extends DefaultComponentProps {
  heading?: string,
  subheading?: string,
  image?: {
    src?: string,
    alt?: string,
  }
  cta?: {
    text?: string,
    url?: string,
  }[]
}

const Hero: FC<HeroProps> = (props) => {
  const { ref, inView, entry } = useInView({
    threshold: 0.2,
  });
  const isInView = entry ? inView : true
  return (
    <div ref={ref}>
      <HeroComponent {...props} inView={isInView} />
    </div>
  );
}

export default Hero