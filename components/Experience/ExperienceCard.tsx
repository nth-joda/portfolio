import React from "react";
import { motion } from "framer-motion";
import { Experience } from "../../typings";
import { urlFor } from "../../sanity";
import Tooltip from "@mui/material/Tooltip";
import { CodeBracketIcon } from "@heroicons/react/24/outline";
type Props = { experience: Experience };

function ExperienceCard({ experience }: Props) {
    return (
        <article className="flex flex-col rounded-l items-center space-y-7 flex-shrink-0 w-[100%] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] pt-4 pb-2 px-4 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
            <motion.img
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="w-18 h-18 rounded-lg xl:max-w-[250px] xl:max-h-[100px] bg-white object-center p-2"
                src={urlFor(experience?.companyImage).url()}
                alt=""
            />
            <div className="px-0 md:px-10">
                <h4 className="text-xl font-light">{experience?.jobTitle}</h4>
                <p className="font-bold text-2xl mt-1">{experience?.company}</p>
                <div className="flex space-x-2 my-2 overflow-x-auto py-3">
                    {experience?.technologies.map((technology) => (
                        <Tooltip
                            title={technology.title}
                            arrow
                            key={technology._id}
                        >
                            <img
                                className="h-10 w-10 rounded-full bg-white"
                                src={urlFor(technology?.image).url()}
                                alt=""
                            />
                        </Tooltip>
                    ))}
                </div>
                <p className="uppercase py-5 text-gray-300">
                    {new Date(experience.dateStarted).toDateString()} -{" "}
                    {new Date(experience.dateEnded).toDateString()}
                </p>
                <ul className="list-disc space-y-3 ml-5 text-lg max-h-96 max-w-52 overflow-y-auto  scrollbar-thin scrollbar-track-black scrollbar-thumb-[#F7AB0A]/80 pr-5">
                    {experience?.points.map((point, index) => (
                        <li key={index}>
                            <span>
                                <CodeBracketIcon className="w-6 h-6 mr-2 text-[#F7AB0A]/80 inline-block" />
                            </span>
                            {point}
                        </li>
                    ))}
                </ul>
            </div>
        </article>
    );
}

export default ExperienceCard;
