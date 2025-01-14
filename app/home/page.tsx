'use client';
import { useState, useEffect } from 'react';
import React from 'react';
import Image from 'next/image';
import { TypewriterEffectDemo } from '@/components/Home/TypewriterEffectDemo';
import cn from 'classnames';

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleNavbar = () => setIsNavbarVisible((prev) => !prev);

  return (
    <div>
      {isNavbarVisible && (
        <nav
          className={cn('navbar z-50 bg-transparent absolute left-0 top-0', {
            'mobile-navbar': isMobile,
          })}
          role="navigation"
          aria-label="main navigation"
        >
          <div className="navbar-brand">
            <a className="flex align-middle my-auto">
              <Image
                src={'/assist/logo.png'}
                width="112"
                height="312"
                alt="logo"
                className={cn('w-[7rem] h-[6rem] my-auto', 'max-md:w-[4rem] max-md:h-[4rem]')}
              />
              <p
                className={cn(
                  'font-bold text-3xl flex align-middle my-auto bg-gradient-to-r bg-clip-text text-transparent',
                  'from-[#0e40be] via-[#0055ff] to-[#5984f3]',
                  {
                    'max-md:text-xl': isMobile,
                  }
                )}
              >
                BORHAN
              </p>
            </a>
            <a
              role="button"
              className={cn('navbar-burger', {
                'is-active': isMobile,
              })}
              aria-label="menu"
              aria-expanded="false"
              onClick={toggleNavbar}
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
        </nav>
      )}

      <TypewriterEffectDemo setIsNavbarVisible={setIsNavbarVisible} />
    </div>
  );
};

export default Home;
