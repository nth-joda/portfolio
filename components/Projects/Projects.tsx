import React from "react";
import { motion } from "framer-motion";
export default function Projects() {
    const sectionTitle: string = "Projects";
    const projects = [1, 2, 3, 4];
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

            <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
                {projects.map((project, index) => {
                    return (
                        <div
                            key={index}
                            className="w-screen flex-shink-0 snap-center flex flex-col space-y-1 items-center justify-center p-20 md:p-44 h-screen"
                        >
                            <motion.img
                                initial={{ y: -300, opacity: 0 }}
                                transition={{ duration: 1.2 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                src="https://picsum.photos/id/684/600/400"
                                alt=""
                            />
                            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                                <h4 className="underline decoration-[#F7AB0A]/50 text-xl font-semibold text-center">
                                    Project name
                                </h4>
                                <p className="text-lg text-center md:text-left">
                                    Ad cupidatat irure sunt et non in do eu et
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
