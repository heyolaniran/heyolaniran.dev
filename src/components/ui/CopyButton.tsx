"use client" 
import MagicButton from "./MagicButton"
import { IoCopyOutline } from "react-icons/io5"

export default function CopyButton ({copied , handleCopy} :  {copied: boolean , handleCopy: () => void}) {
    return (
        <MagicButton title={copied ? 'Email copied ' : 'Copy my Email'}  icon={<IoCopyOutline />}
                position="left"
                otherClasses="!bg-[#161a31] "
                handleClick={handleCopy}
              />
    )
}