import React from "react";
import { motion } from "framer-motion";
import { Project } from "../../typings";
import { urlFor } from "../../sanity";
import { Tooltip } from "@mui/material";
type Props = { projects: Project[] };

export default function Projects({ projects }: Props) {
    const sectionTitle: string = "Projects";
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
                duration: 1.5,
            }}
            className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center z-0"
        >
            <h3 className="sectionTitle">{sectionTitle}</h3>

            <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrooll-bar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
                {projects.map((project, index) => {
                    return (
                        <div
                            key={index}
                            className="w-screen mt-10 flex-shink-0 snap-center flex flex-col space-y-1 items-center justify-center  md:p-44 h-screen"
                        >
                            <motion.img
                                initial={{ y: -300, opacity: 0 }}
                                transition={{ duration: 1.2 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                src={urlFor(project.image).url()}
                                className="w-28 h-28 md:w-44 md:h-44 object-cover rounded-2xl"
                                alt=""
                            />
                            <div className="space-y-8 md:space-y-10 px-0 md:px-10 max-w-6xl">
                                <h4 className="underline decoration-[#F7AB0A]/50 text-xl font-semibold text-center">
                                    {project.title}
                                </h4>
                                <div className="flex items-center space-x-2 justify-center">
                                    {project?.technologies.map((tech) => (
                                        <Tooltip
                                            key={tech._id}
                                            title={tech.title}
                                            arrow
                                        >
                                            <img
                                                src={urlFor(tech.image).url()}
                                                className="h-10 w-10"
                                            />
                                        </Tooltip>
                                    ))}
                                </div>
                                <p className="text-lg md:text-left max-h-44 overflow-y-auto">
                                    {project.summary}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
        </motion.div>
    );
}
