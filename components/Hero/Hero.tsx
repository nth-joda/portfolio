import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { urlFor } from "../../sanity";
import { PageInfo } from "../../typings";
import BackgroundCircles from "../utils/BackgroundCircles";

type Props = {
    pageInfo: PageInfo;
};

export default function Hero({ pageInfo }: Props) {
    const [text, count] = useTypewriter({
        words: [
            `Hi, My name is ${pageInfo?.name}.`,
            "I major in Computer Science at HCMUS.",
            "and I'm a Fullstack Developer.",
        ],
        loop: true,
        delaySpeed: 2000,
    });
    return (
        <div className="h-screen flex flex-col space-y-8 items-center justify-center overflow-hidden text-center">
            <BackgroundCircles />
            <img
                src={urlFor(pageInfo?.heroImage).url()}
                alt="avatar"
                className="relative rounded-full w-32 h-32 mx-auto object-cover"
            />
            <div className="z-20">
                <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
                    {pageInfo?.role}
                </h2>
                <h1 className="text-3xl lg:text-4xl font-semibold px-10">
                    <span className="mr-3">{text}</span>
                    <Cursor />
                </h1>
                <div className="pt-5">
                    <Link href="#about-section">
                        <button className="heroButton">About</button>
                    </Link>

                    <Link href="#experience-section">
                        <button className="heroButton">Experience</button>
                    </Link>
                    <Link href="#skills-section">
                        <button className="heroButton">Skills</button>
                    </Link>
                    <Link href="#projects-section">
                        <button className="heroButton">Projects</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
