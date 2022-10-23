import React from "react";
import { motion } from "framer-motion";
export default function About() {
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
                src="https://uploads.jovemnerd.com.br/wp-content/uploads/2021/08/confira-o-elenco-da-serie-live-action-de-avatar-a-lenda-de-aang.jpg"
                className="-mb-20 md:mb-0 flex-shink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64  md:h-95 xl:w-[400px] xl:h-[500px] "
            />
            <div className="space-y-10 px-0 md:px-10">
                <h4 className="text-4xl font-simibold">
                    Some information about me
                </h4>
                <p className="text-base">
                    Adipisicing dolor occaecat id aute nisi et velit et
                    cupidatat laboris excepteur labore. Officia ad amet laborum
                    proident Lorem officia quis aliquip nostrud ea enim
                    consequat esse. Aliqua et do excepteur esse deserunt laborum
                    velit aliqua exercitation esse exercitation. Sint fugiat
                    elit occaecat Lorem ut proident aute sunt id aliqua. Et
                    tempor esse aliquip voluptate fugiat minim aliqua quis non
                    elit. Veniam commodo dolor laborum tempor. Ex dolore qui est
                    aliqua Lorem ex eiusmod proident occaecat occaecat culpa
                    tempor dolore ullamco. Cillum dolore deserunt sit cillum
                    irure magna dolore enim in aliquip. Aliquip cillum do est
                    nisi ullamco occaecat sit non fugiat mollit commodo.
                    Voluptate ullamco dolore proident pariatur amet adipisicing
                    nisi incididunt deserunt laborum sunt. Cupidatat labore sint
                    fugiat aute adipisicing fugiat incididunt exercitation
                    officia Lorem adipisicing esse irure non. Incididunt
                    voluptate eu duis reprehenderit aute occaecat culpa mollit.
                </p>
            </div>
        </motion.div>
    );
}
