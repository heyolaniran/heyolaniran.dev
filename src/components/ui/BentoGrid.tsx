"use client"

import { cn } from "@/lib/utils";
import Image from "next/image";
import { BackgroundGradientAnimation } from "./GradientAnimation";
import { Globe } from "./Globe";
import { GlobeDemo } from "./GridGlobe";
import { backEnd, frontEnd } from "@/data";
import { useState } from "react";
import animationData from '@/data/lottie.json'
import Lottie from "react-lottie";
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";
import CopyButton from "./CopyButton";
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
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className,
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
  icon,
  id,
  img,
  imgClassName,
  spareImg,
  titleClassName,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  icon?: React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  spareImg?: string;
  titleClassName?: string;
}) => {


  const [copied , setCopied] = useState(false) ; 

  const handleCopy = () => {

    navigator.clipboard.writeText('olaniranlaurent@gmail.com'); 

    setCopied(true) ; 
  }
  
  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden mb-4 rounded-3xl border border-transparent  group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black-100 dark:border-white/[0.2] bg-white-100   justify-between flex flex-col space-y-4 ",
        className,
      )}
      style={{
        //   add these two
        //   you can generate the color from here https://cssgradient.io/
        background: "rgb(2,0,26)",
        backgroundColor:
          "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(7,7,104,1) 19%, rgba(255,85,0,1) 100%)",
      }}
    >
      <div className={`${id == 6 && 'flex justify-center'} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <Image
              src={img}
              alt={img}
              width={20}
              height={20}
              className={cn(
                imgClassName,
                " w-[96%] h-[96%] rounded-3xl  object-cover img-fluid object-center",
              )}
            />
          )}
        </div>

        <div
          className={`right-0 -bottom-5 absolute ${id === 5 && "opacity-80 w-full"}`}
        >
          {spareImg && (
            <Image
              src={spareImg}
              alt="img"
              width={30}
              height={30}
              className=" w-full h-full object-cover object-center"
            />
          )}
        </div>

        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 flex items-center justify-center text-white font-bold" />
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 duration-200 relative md:h-full min-h-40 flex flex-col px-4 p-5 lg:p-10",
          )}
        >
          <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10">
            {description}
          </div>

          <div className="font-sans font-bold text-lg lg:text-2xl max-w-96 z-10">
            {title}
          </div>

          {id === 2 && (
            <div className="mt-4">
              <GlobeDemo />
            </div>
          )}

          {id === 3 && (
            <div className="flex gap-1 py-4 overflow-hidden lg:gap-3 absolute w-fit -right-5  lg:-right-2">
              <div className="flex flex-col gap-3 lg:gap-5 ">
                {backEnd.map((item) => (
                  <span
                    key={item.id}
                    className="py-2 lg:py-2 flex lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-xl text-center bg-[#10132E]"
                  >
                    <Image src={item.logo} width={25} height={25} alt="" className=" w-4 h-4 object-contain mx-2" />
                    {item.title} 
                  </span>
                ))}

                <span className="py-4 px-3 rounded-xl text-center bg-[#10132E] "/>
              </div>
              <div className="flex flex-col gap-3 lg:gap-5 ">

              <span className="py-4 px-3 rounded-xl text-center bg-[#10132E] "/>

                {frontEnd.map((item) => (
                  <span
                    key={item.id}
                    className="py-2 lg:py-2 flex lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-xl text-center bg-[#10132E]"
                  >
                    <Image src={item.logo} width={20} height={20} alt="" className=" w-4 h-4 object-contain mx-2" />
                    {item.title}
                  </span>
                ))}

                
              </div>
              
            </div>
            
          )}

          {id === 6 && (
            <div className="mt-5 relative ">
              <div className={`absolute -bottom-5 right-0`}>
                <Lottie options={{
                  loop: copied ,
                  autoplay : copied, 
                  animationData, 
                  rendererSettings : {
                    preserveAspectRatio : 'xMidYMid slice', 
                     
                  }
                }} />
              </div>

              <CopyButton copied={copied} handleCopy={handleCopy} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
