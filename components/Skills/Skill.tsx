import React from "react";
import { motion } from "framer-motion";
import { Skill } from "../../typings";
import { urlFor } from "../../sanity";
import Tooltip from "@mui/material/Tooltip";
type Props = {
    directionLeft?: boolean;
    skill: Skill;
};

const Skill = ({ directionLeft, skill }: Props) => {
    return (
        <div className="group relative flex cursor-pointer">
            <Tooltip title={skill.title} arrow>
                <motion.img
                    initial={{
                        x: directionLeft ? -100 : 100,
                    }}
                    transition={{ duration: 1 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    src={urlFor(skill.image).url()}
                    className="bg-white rounded-full border border-gray-500 object-cover w-14 h-14 md:w-20 md:h-20  xl:w-24 xl:h-24 filter group-hover:grayscale transition duration-300 ease-in-out"
                />
            </Tooltip>
        </div>
    );
};

export default Skill;
