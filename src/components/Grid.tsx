import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

export default function Grid () {

    return (
        <section id="about">

            <BentoGrid>
                {
                    gridItems.map((item) => (
                        <BentoGridItem id={item.id}  key={item.id} 
                        title={item.title}
                        description={item.description}
                        className={item.className} 
                        titleClassName={item.titleClassName}
                        img={item.img}
                        imgClassName ={item.imgClassName}
                        spareImg={item.spareImg}
                        />
                    ))
                }
            </BentoGrid>

        </section>
    )
}