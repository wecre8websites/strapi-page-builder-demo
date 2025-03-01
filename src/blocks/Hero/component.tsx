import { processProps } from '@wecre8websites/strapi-page-builder-react/rsc';
import Image from 'next/image';
import { FC } from 'react';
import { HeroProps } from './component.client';

export const HeroComponent: FC<HeroProps> = ({ id, puck: { metadata }, image, ...props }) => {
  const { heading, subheading } = processProps(props, metadata) as typeof props;
  return (
    <section id={id} className="bg-neutral-900 text-white pt-24 pb-16 min-h-[70vh] flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="animate__animated animate__fadeInLeft">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">{heading}</h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">{subheading}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              {props?.cta?.slice(0, 2).map((cta, index) => (
                <a key={`${id}-cta-${index}`} href={cta.url || "#"} className={`${index === 0 ? "bg-white text-neutral-900 hover:bg-gray-200" : "border border-white hover:bg-white hover:text-neutral-900"} px-8 py-3 rounded-md font-medium transition-all duration-300 inline-block text-center`}>{cta.text}</a>
              ))}
            </div>
          </div>
          <div className="relative animate__animated animate__fadeInRight">
            <div className="bg-neutral-800 rounded-lg overflow-hidden h-[400px] md:h-[500px] relative shadow-xl">
              <div className="absolute inset-0 flex items-center justify-center">
                {image?.src
                  ? <div className="w-3/4 h-3/4 bg-neutral-700 rounded-lg flex items-center justify-center"><Image src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${image.src}`} alt={image.alt || ""} className="object-contain" fill={true} /></div>
                  : <div className="w-3/4 h-3/4 bg-neutral-700 rounded-lg flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                    </svg>
                  </div>}

              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-neutral-900 to-transparent h-1/4"></div>
            </div>
            <div className="absolute -bottom-5 right-10 bg-neutral-800 p-3 rounded-full shadow-lg animate__animated animate__pulse animate__infinite animate__slow">
              <span className="flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="text-neutral-800 w-full h-20">
          <path fill="currentColor" fillOpacity="1" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroComponent;