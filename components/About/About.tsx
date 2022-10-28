import React from "react";
import { motion } from "framer-motion";
import { PageInfo } from "../../typings";
import { urlFor } from "../../sanity";
type Props = {
    pageInfo: PageInfo;
};
export default function About({ pageInfo }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 relative h-screen justify-evenly mx-auto items-center"
        >
            <h3 className="sectionTitle">About</h3>

            <motion.img
                initial={{ x: -200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                    duration: 1.2,
                }}
                viewport={{ once: true }}
                src={urlFor(pageInfo?.profilePic).url()}
                className="-mb-20 md:mb-0 flex-shink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64  md:h-95 xl:w-[400px] xl:h-[500px] "
            />
            <div className="space-y-10 px-0 md:px-10">
                <h4 className="text-4xl font-simibold">
                    Some information about me
                </h4>
                <p className="text-base">{pageInfo?.backgroundInfo}</p>
            </div>
        </motion.div>
    );
}
