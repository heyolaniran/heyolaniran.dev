"use client"

import { useState } from "react"
import Lottie from "react-lottie";
import animationData from '@/data/lottie.json'
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";

export default function LottieGrid () {

    const [copied, setCopied] = useState<boolean>(false) ; 

    const handleCopy = () => {

        const email = 'olaniranlaurent@gmail.com'

        navigator.clipboard.writeText(email)

        setCopied(true); 
    }


    return (
        <>
            <div className={`absolute -bottom-5 right-0 mt-4`}>

                    <Lottie options={{
                    loop: copied ,
                    autoplay : copied, 
                    animationData, 
                    rendererSettings : {
                        preserveAspectRatio : 'xMidYMid slice', 
                        
                    }
                    }} />
            </div>

                <button className="relative mt-2 inline-flex w-full h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2" onClick={handleCopy}>
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                    <span
                        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full
                            bg-slate-950 px-3  text-sm font-medium text-white backdrop-blur-3xl gap-2 `}
                    >
                        <IoCopyOutline />
                        {copied ? 'Email is copied' :  'Copy my Email'}
                    
                    </span>
                </button>
                
        </>
        
    
    )
}