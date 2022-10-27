import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
export default function Skills() {
    const sectionTitle: string = "Skills";
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
                duration: 1,
            }}
            className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
        >
            <h3 className="sectionTitle">{sectionTitle}</h3>
            <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
                Hover over a skill for currency profieciency
            </h3>
            <div className="absolute top-48 grid grid-cols-4 gap-5">
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
            </div>
        </motion.div>
    );
}
