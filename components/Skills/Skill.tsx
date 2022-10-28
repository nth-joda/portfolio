import React from "react";
import { motion } from "framer-motion";
import { Skill } from "../../typings";
import { urlFor } from "../../sanity";
type Props = {
    directionLeft?: boolean;
    skill: Skill;
};

const Skill = ({ directionLeft, skill }: Props) => {
    return (
        <div className="group relative flex cursor-pointer">
            <motion.img
                initial={{
                    x: directionLeft ? -100 : 100,
                }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, x: 0 }}
                src={urlFor(skill.image).url()}
                className="bg-white rounded-full border border-gray-500 object-cover w-20 h-20 xl:w-24 xl:h-24 filter group-hover:grayscale transition duration-300 ease-in-out"
            />
        </div>
    );
};

export default Skill;
