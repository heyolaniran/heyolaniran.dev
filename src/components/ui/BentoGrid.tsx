import { cn } from "@/lib/utils";
import Image from "next/image";
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
  return (
    <div
      className={cn(
        "row-span-1 relative mb-4 rounded-3xl border border-transparent  group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black-100 dark:border-white/[0.2] bg-white-100   justify-between flex flex-col space-y-4 ",
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
      <div className={`${id == 6} && 'flex justify-center h-full'`}>
        <div className="w-full h-full absolute">
          {img && (
            <Image
              src={img}
              alt={img}
              width={30}
              height={30}
              className={cn(
                imgClassName,
                " w-[96%] h-[96%] rounded-3xl  object-cover object-center",
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

        {id === 6 && <></>}
      </div>

      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};
