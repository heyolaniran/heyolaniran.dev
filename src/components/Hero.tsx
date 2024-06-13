import { FaLocationArrow } from "react-icons/fa";
import MagicButton from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerator";


export default function  Hero () {

    return (
        <div className=" pt-40 pb-52 ">
            <div>
                <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white"/>
                <Spotlight className="top-10 -leftfull h-[80vh] w-[50vw]" fill="purple"/>
                <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue"/>
            </div>
            
            <div className="h-min-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] absolute top-0 left-0 flex items-center justify-center">
               
                <div className="absolute pointer-events-none inset-0 
                flex items-center justify-center dark:bg-black-100
                 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
               
                <div className="flex justify-center relative z-10 my-20  ">
                    <div className="max-w-[89vw] mad:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                        <h2 className="uppercase text-center text-xs max-w-80 tracking-widest text-blue-100">
                           Dynamics Web Developer 
                        </h2>

                        <TextGenerateEffect className="text-center md:text-5xl lg:text-6xl text-[40px]" words="Concretiser vos idées !" />
                        <p className="text-center md:tracking-wider mt-4 mb-4 text-sm "> Hi!  I&apos;m  Olaniran, a Next.js Developer  </p>

                        <MagicButton title=" Show my work " icon={<FaLocationArrow />} position="right" handleClick={()=> {}} />
                    </div>
                </div>
            </div>
        </div>
    )
}