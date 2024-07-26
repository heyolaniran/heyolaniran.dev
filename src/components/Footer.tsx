import Image from "next/image";

import MagicButton from "./ui/MagicButton";

import { FaPaperPlane } from "react-icons/fa";
import { socialMedia } from "@/data";

export default function Footer () {

    return (
        <footer className="w-full pt-20 pb-10" id="contact">

            <div className="w-full absolute left-0 -bottom-72 min-h-96">
                <Image src={'/footer-grid.svg'} className="w-full h-full opacity-50" width={100} height={100} alt="grid" />


            </div>
            
            <div className="flex flex-col items-center">
                <h1 className="lg:text-6xl text-4xl py-4 font-bold"> Contact<span className="text-orange-400 lg:text-8xl text-6xl rounded-full ">.</span> </h1>

                <p className="text-white-200 md:mt-5 text-lg md:text-md text-center">
                 Don't hesitate to send me on twitter to discuss the opportunity or joining my network on 
                </p>
                <a href='https://bj.linkedin.com/in/abdias-afouda-06461022a' target="_blank" className="text-orange-400 ">LinkedIn</a>

                <a href="mailto:olaniranlaurent@gmail.com" className="mt-2">
                    <MagicButton title="Send me An E-mail" icon={<FaPaperPlane />}  otherClasses="w-full " position="right"/>
                </a>
            </div>

            <div className="flex md:flex-row flex-col mt-10 justify-between items-center">
                <p className="md:text-sm text-center">
                    Copyright &copy; { (new Date()).getUTCFullYear()} Olaniran
                </p>

                <div className="flex items-center md:gap-3 lg:gap-6">
                    {socialMedia.map((profile) => (
                       
                        <div className="w-10 h-10 mx-2 cursor-pointer flex justify-center items-center backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300" key={profile.id}>
                            <a href={profile.link} target="_blank">
                             <Image src={profile.img} alt="id" width={30} height={30} className=""  />
                            </a>
                            
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    )
}