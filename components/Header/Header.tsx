import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { Social } from "../../typings";
import Link from "next/link";
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
                        <SocialIcon
                            key={social._id}
                            url={social.url}
                            fgColor="gray"
                            bgColor="transparent"
                        />
                    );
                })}
            </motion.div>
            <Link href="#contact-section">
                <motion.div
                    initial={{ x: 500, opacity: 0, scale: 0.5 }}
                    animate={{ x: 0, opacity: 1, scale: 1 }}
                    transition={{
                        duration: 1,
                    }}
                    className="flex flex-row items-center text-gray-300 cursor-pointer"
                >
                    {/* EMAIL */}
                    <SocialIcon
                        className="cursor-pointer"
                        network="email"
                        fgColor="gray"
                        bgColor="transparent"
                    />
                    <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
                        Get in touch
                    </p>
                </motion.div>
            </Link>
        </header>
    );
}
