import { projects } from "@/data";
import { div } from "three/examples/jsm/nodes/Nodes.js";
import { ProjectCard } from "./ui/ProjectCard";

export default function Projects () {

    return (
        <div className="py-20" id="projects">
            <h1 className=" text-2xl font-semibold lg:text-3xl text-center  "> 
                A small selection of <br/> {' '}
                <span className="struggle text-lg duration-100 translate-x-2"> my  recents projects</span>
            </h1>

            <div className="flex mt-12 flex-wrap gap-32 sm:gap-16 items-center justify-center">
                {
                    projects.map(({id, title , des , img , iconLists, link}) => (

                        <div className="lg:min-w-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]" key={id}>
                            <ProjectCard title={title} desc={des} img={img} link={link} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}