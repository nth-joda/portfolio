import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "../utils/BackgroundCircles";

export default function Hero() {
    const [text, count] = useTypewriter({
        words: ["Hi, My name is NT-Hau", "Hello", "World"],
        loop: true,
        delaySpeed: 2000,
    });
    return (
        <div className="h-screen flex flex-col space-y-8 items-center justify-center overflow-hidden text-center">
            <BackgroundCircles />
            <h1>
                <span>{text}</span>
                <Cursor />
            </h1>
        </div>
    );
}
