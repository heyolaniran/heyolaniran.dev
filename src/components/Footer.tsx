import Image from "next/image";
import Link from "next/link";

export default function Footer () {

    return (
        <footer className="w-full pt-20 pb-10" id="contact">

            <div className="w-full absolute left-0 -bottom-72 min-h-96">
                <Image src={'/footer-grid.svg'} className="w-full h-full opacity-50" width={100} height={100} alt="grid" />


            </div>
            
            <div className="flex flex-col items-center">
                <h1 className="lg:text-6xl text-4xl py-4 font-bold"> Contact<span className="text-orange-400 lg:text-8xl text-6xl rounded-full ">.</span> </h1>

                <p className="text-white-200 md:mt-5 text-lg md:text-md">
                 Don't hesitate to send me on twitter to discuss the opportunity or joining my network on <Link href={'/home'} target="_blank" className="text-orange-400 cursor-pointer">LinkedIn</Link>
                </p>
            </div>
        </footer>
    )
}