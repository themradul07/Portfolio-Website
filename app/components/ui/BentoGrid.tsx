"use client"
import { cn } from "@/lib/utils";
import { div, object, span } from "framer-motion/client";
import React from "react";
import { BackgroundGradientAnimation } from "./GradientBg";
import GridGlobe from "./GridGlobe";
import Lottie from "react-lottie";
import { useState } from "react";
import animationData from '@/data/confetti.json';
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";


export const BentoGrid = ({
  
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};
export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  
const [isCopied, setIsCopied] = useState(false);
const handleCopy = () => {
  navigator.clipboard.writeText('mradulgandhi18@gmail.com');
  setIsCopied(true);
  
}


  return (
    
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none  flex flex-col space-y-4",
        className
      )}

      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      {id === 6 && (
          <BackgroundGradientAnimation>
            {/* <div className="absolute z-50 flex justify-center items-center text-white font-bold" /> */}
          </BackgroundGradientAnimation>
        )}

      <div className={`${id === 6 && ' justify-center'} flex h-full`}>
        <div className="w-full h-full absolute">
          {img && (<img src={img} alt={img} className={cn(imgClassName, 'object-cover , object-center')} />)}
        </div>
        <div className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"}`}>
          {spareImg && (
            <img src={spareImg} alt={spareImg} className="object-cover object-center w-full h-full" />)}
        </div>
        <div className="group-hover/bento:translate-x-2 transition duration-200">
          <div className={cn(titleClassName, 'group-hover/ bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10')}>
            <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10">
              {description}
            </div>
            <div className="font-sans font-bold text-lg lg:text-3xl max-w-96  z-10">
              {title}
            </div>
            {id==6 &&(
          <div className=" mt-5 lg:mt-0 z-30 relative ">
            <div className={`absolute -bottom-5 `}>
              <Lottie options={{
                loop:isCopied,
                autoplay: isCopied,
                animationData,
                rendererSettings: {
                  preserveAspectRatio: 'xMidYMid slice'
                }
                }}/>
            </div>
            <MagicButton 
              title= { isCopied? "Email is Copied": "Copy my Email"}
              icon = {<IoCopyOutline/>}
              position="left"
              OtherClasses="bg-[#161a31]"
              handleClick={handleCopy}

            />

          </div>


        )}

          </div>

        </div>
        
        {id === 2 && (
          <GridGlobe />)}

        {id == 3 && (
          <div className="group-hover/bento:translate-x-2 transition duration-200 flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
            <div className="flex flex-col gap-4 lg:gap-5">
              {['React.js', 'Next.js', 'TypeScript'].map((item) =>
                <span key={item} className="py-2 lg:py-4 px-3 text-xs opacity-50 lg:opacity-100  rounded-xl text-center bg-[#10132E]">
                  {item}
                </span>
              )}
              <span className="py-2 px-3 rounded-lg text-center bg-[#10132e]" />
            </div>
            <div className="flex flex-col gap-4 lg:gap-5">
              <span className="py-2 px-3 rounded-lg text-center bg-[#10132e]" />
              {['MongoDB', 'Expess.js', 'Tailwindcss'].map((item) =>
                <span key={item} className="py-2 lg:py-4 px-3 text-xs opacity-50 lg:opacity-100 rounded-xl text-center bg-[#10132E]">
                  {item}
                </span>
              )}
            </div>

          </div>
        )}
       






      </div>
    </div>
  );
};

