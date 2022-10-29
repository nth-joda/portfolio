import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import { Tooltip } from "@mui/material";
import { motion } from "framer-motion";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";
import { Social } from "../../typings";
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
                                target="_blank"
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
                <Tooltip title="download my cv" arrow>
                    <a
                        href="../../assets/JavaDeveloper_NguyenTrungHau_2000.pdf"
                        download
                        className="bg-[#F7AB0A] border border-[#F7AB0A] py-1 px-5 rounded-md text-black font-bold text-lg flex items-center space-x-2 justify-center hover:bg-transparent hover:text-[#F7AB0A] transition duration-1000"
                    >
                        <ArrowDownTrayIcon className="h-5 w-5" />
                        <p>CV </p>
                    </a>
                </Tooltip>

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
