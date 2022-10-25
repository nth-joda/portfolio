import React from "react";
import { motion } from "framer-motion";
function Contact() {
    const sectionTitle: string = "Contact";
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
                duration: 1.5,
            }}
            className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
        >
            <h3 className="sectionTitle">{sectionTitle}</h3>

            <div className="flex flex-col space-y-10">
                <h4>
                    I have got just what you need.{" "}
                    <span className="decoration-[#F7AB0A]/50 underline">
                        Lets talk
                    </span>
                </h4>
                <div>
                    <div className="flex items-center space-x-5"></div>
                </div>
            </div>
        </motion.div>
    );
}

export default Contact;
