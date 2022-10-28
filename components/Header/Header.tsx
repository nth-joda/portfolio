import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { Social } from "../../typings";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { Tooltip } from "@mui/material";
type Props = {
    socials: Social[];
};

export default function Header({ socials }: Props) {
    return (
        <header className="sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
            <motion.div
                initial={{ x: -500, opacity: 0, scale: 0.5 }}
                animate={{ x: 0, opacity: 1, scale: 1 }}
                transition={{
                    duration: 1,
                }}
                className="flex flex-row items-center"
            >
                {/* SOCIAL ICONS */}
                {socials.map((social) => {
                    return (
                        <Tooltip key={social._id} title={social.title} arrow>
                            <SocialIcon
                                url={social.url}
                                fgColor="gray"
                                bgColor="transparent"
                            />
                        </Tooltip>
                    );
                })}
            </motion.div>

            <motion.div
                initial={{ x: 500, opacity: 0, scale: 0.5 }}
                animate={{ x: 0, opacity: 1, scale: 1 }}
                transition={{
                    duration: 1,
                }}
                className="flex flex-row items-center text-gray-300 cursor-pointer space-x-6"
            >
                <button className="bg-[#F7AB0A] border border-[#F7AB0A] py-2 px-7 rounded-md text-black font-bold text-lg flex items-center space-x-2 justify-center hover:bg-transparent hover:text-[#F7AB0A] transition duration-1000">
                    <ArrowDownTrayIcon className="h-5 w-5" />
                    <p>CV </p>
                </button>
                <Link href="#contact-section">
                    <div>
                        <SocialIcon
                            className="cursor-pointer"
                            network="email"
                            fgColor="gray"
                            bgColor="transparent"
                        />
                        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
                            Get in touch
                        </p>
                    </div>
                </Link>
            </motion.div>
        </header>
    );
}
