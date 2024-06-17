import { workExperience } from "@/data";
import { MovingButton } from "./ui/MovingButton";
import Image from "next/image";

export default function Experiences () {

    return (
        <div className="py-20" id="experiences">
            <h1 className="text-2xl font-semibold lg:text-3xl text-center ">
                My Experiences
            </h1>

            <div className="w-full grid lg:grid-cols-4 mt-12 grid-cols-1 gap-10">
                {workExperience.map((card) => (
                    <MovingButton key={card.id} borderRadius="1.75rem" duration={Math.floor(Math.random() * 10000) + 10000 } className="flex-1 text-white border-neutral-200 dark:border-slate-800">
                        <div className="flex lg:flex-row lg:items-center p-3 py-6 md:p-5 lg:p-10  gap-2">
                            <Image alt="i" src={card.thumbnail} width={15} height={15} className="lg:w-32 md:w-14 w-16"/>

                            <div className="lg:ms-5">

                                <h1 className="text-start text-xl md:text-2xl font-bold ">
                                    {card.title}
                                </h1>

                                <h2 className="text-white text-start uppercase font-semibold my-2"> @ <span className="text-white-200">{card.company} </span></h2>
 
                                <p className="text-start text-white-100 mt-3 font-semibold ">
                                    {card.desc}
                                </p>

                            </div>
                        </div>



                    </MovingButton>
                ))}
            </div>
        </div>
    )
}