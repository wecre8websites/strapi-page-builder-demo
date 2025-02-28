'use client';
import Image from 'next/image';
import React, { FC, useCallback, useState } from 'react';
import { Menu } from '../../../../types/Menu';

declare module 'react' {
  interface CSSProperties {
    [key: `--${string}`]: string | number
  }
}

type HeaderComponentProps = {
  siteName: string,
  logo?: {
    src: string,
    alt?: string,
  }
  menu?: Menu
}

const HeaderComponent: FC<HeaderComponentProps> = ({ siteName, logo, menu }) => {
  const [open, setOpen] = useState(false);
  const [animationClasses, setAnimationClasses] = useState("");
  const toggleOpen = useCallback(() => {
    if (!open) {
      setOpen(true);
      setAnimationClasses("animate__slideInDown");
    } else {
      setAnimationClasses("animate__slideOutUp");
      setTimeout(() => {
        setOpen(false)
        setAnimationClasses("")
      }, 500);
    }
  }, [open]);

  return (
    <nav id="header" className="bg-neutral-900 text-white w-full fixed top-0 z-50">
      <div className="relative bg-neutral-900 py-4 px-6 container mx-auto flex justify-between items-center z-50">

        {logo?.src
          ? <a href="/" className='self-start flex flex-row items-center justify-start text-xl font-bold gap-2'>
            <div className='h-8 w-8 relative overflow-hidden'>
              <Image
                alt={logo.alt || siteName} src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${logo.src}`}
                className='relative h-8 w-auto object-contain self-start object-left'
                fill={true}
              />
            </div>
            {siteName}
          </a>
          : <a href="/" className="text-xl font-bold">{siteName}</a>}

        <button id="mobile-menu-button" className="md:hidden focus:outline-none" aria-label="Toggle navigation menu" aria-expanded={open} aria-controls="mobile-menu"
          onClick={toggleOpen}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>

        <ul id="desktop-menu" className="hidden md:flex space-x-8">
          {menu?.menuItems?.map((item, index) => (
            <li key={index}><a href={item.path}>{item.title}</a></li>
          ))}
        </ul>
      </div>

      <div id="mobile-menu" className={`md:hidden ${!open ? "hidden" : ""} absolute -z-10 top-full left-0 w-full bg-neutral-800 animate__animated ${animationClasses}`} style={{ "--animate-duration": "0.5s" }}>
        <ul className="flex flex-col gap-0">
          {menu?.menuItems?.map((item, index) => (
            <li className="p-4 hover:bg-neutral-600" key={index}><a href={item.path}>{item.title}</a></li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default HeaderComponent;