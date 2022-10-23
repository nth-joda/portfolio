import React from "react";
import { motion } from "framer-motion";
type Props = {};

export default function BackgroundCircles({}: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
                borderRadius: ["20%", "20%", "50%", "80%", "20%"],
            }}
            transition={{ duration: 2.0 }}
            className="relative flex justify-center items-center mt-20"
        >
            <div className="absolute border border-[#333333] rounded-full h-[280px] w-[280px] mt-52  animate-ping" />
            <div className="absolute border border-[#333333] rounded-full h-[250px] w-[250px] mt-52" />
            <div className="absolute border border-[#333333] rounded-full h-[450px] w-[450px] mt-52" />
            <div className="absolute border border-[#F7AB0A] rounded-full h-[600px] w-[600px] mt-52 animate-pulse" />
            <div className="absolute border border-[#333333] rounded-full h-[700px] w-[700px] mt-52" />
        </motion.div>
    );
}
