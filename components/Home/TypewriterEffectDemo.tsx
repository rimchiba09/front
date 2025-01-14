'use client';

import { TypewriterEffect } from '@/components/ui/typewriter-effect';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import cn from 'classnames';
import { TextHoverDemo } from "../Result/TextHoverDemo";
import { WavyBackground } from '@/components/ui/wavy-background';

export function TypewriterEffectDemo({  setIsNavbarVisible,
}: {
  setIsNavbarVisible: (value: boolean) => void;
  }) {
   const [isEffectVisible, setIsEffectVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const words = [
    { text: "Your", className: "text-red-500" },
    { text: "Health", className: "text-blue-500" },
    { text: "Our", className: "text-green-500" },
    { text: "Predictive", className: "text-purple-500" },
    { text: "Expertise", className: "text-yellow-500" }
  ];


  const handleSignIn = () => {
    setIsLoading(true);
    setIsNavbarVisible(false);
    setTimeout(() => {
      setIsEffectVisible(true);
      setTimeout(() => {
        router.push('/signin');
      }, 2000);
    }, );
  };

  const handleSignUp = () => {
    setIsLoading(true);
    setIsNavbarVisible(false);
    setTimeout(() => {
      setIsEffectVisible(true);
      setTimeout(() => {
        router.push('/signup');
      }, 2000);
    }, );
  };

  return (
    <WavyBackground className="relative w-full flex flex-col items-center justify-center text-center">
      {isLoading ? (
        <TextHoverDemo />
      ) : (
        <div className="absolute top-[12rem] flex flex-col justify-center items-center">
          <p className={cn('text-base mb-10', 'text-neutral-600 dark:text-neutral-200')}>
            Your Health, Our Predictive Expertise
          </p>
          <TypewriterEffect words={words} />

          <div className={cn('flex flex-col md:flex-row mt-14', 'space-y-4 md:space-y-0 space-x-0 md:space-x-4')}>
            <button
              onClick={handleSignIn}
              className={cn('w-40 h-10 rounded-xl text-sm', 'bg-transparent border text-white', 'dark:border-white border-transparent')}
            >
              Sign-in
            </button>

            <button
              onClick={handleSignUp}
              className={cn('w-40 h-10 rounded-xl text-sm', 'bg-white text-black border border-black')}
            >
              Sign-up
            </button>
          </div>
        </div>
      )}
    </WavyBackground>
  );
  }
   