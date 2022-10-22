import React from "react";
import { SocialIcon } from "react-social-icons";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
export default function Header() {
    return (
        <header id="header">
            <motion.div
                initial={{ x: -500, opacity: 0, scale: 0.5 }}
                animate={{ x: 0, opacity: 1, scale: 1 }}
                transition={{
                    duration: 1,
                }}
                id="header-social"
            >
                {/* SOCIAL ICONS */}
                <SocialIcon
                    url="https://www.linkedin.com/in/hau-nguyen-trung-8a776a211/"
                    fgColor="gray"
                    bgColor="transparent"
                />
                <SocialIcon
                    url="https://www.linkedin.com/in/hau-nguyen-trung-8a776a211/"
                    fgColor="gray"
                    bgColor="transparent"
                />
                <SocialIcon
                    url="https://www.linkedin.com/in/hau-nguyen-trung-8a776a211/"
                    fgColor="gray"
                    bgColor="transparent"
                />
            </motion.div>

            <motion.div
                initial={{ x: 500, opacity: 0, scale: 0.5 }}
                animate={{ x: 0, opacity: 1, scale: 1 }}
                transition={{
                    duration: 1,
                }}
                id="header-contact"
            >
                {/* EMAIL */}
                <SocialIcon
                    className="cursor-pointer"
                    network="email"
                    fgColor="gray"
                    bgColor="transparent"
                />
                <Typography
                    sx={{
                        fontStyle: "uppercase",
                        display: { sm: "inline-flex", xs: "none" },
                        color: "gray",
                    }}
                >
                    Get in touch
                </Typography>
            </motion.div>
        </header>
    );
}
