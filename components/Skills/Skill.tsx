import React from "react";
import { motion } from "framer-motion";
type Props = {
    directionLeft?: boolean;
    logo: string;
    title: string;
};

const Skill = ({ directionLeft, logo, title }: Props) => {
    return (
        <div className="group relative flex cursor-pointer">
            <motion.img
                initial={{
                    x: directionLeft ? -200 : 200,
                }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, x: 0 }}
                src={
                    logo
                        ? logo
                        : "https://e7.pngegg.com/pngimages/882/236/png-clipart-computer-icons-skill-skills-icon-angle-photography.png"
                }
                className="rounded-full border border-gray-500 object-cover w-20 h-20 xl:w-24 xl:h-24 filter group-hover:grayscale transition duration-300 ease-in-out"
            />
        </div>
    );
};

export default Skill;
