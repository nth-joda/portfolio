import React from "react";
import {
    EnvelopeIcon,
    MapPinIcon,
    PhoneIcon,
    PaperAirplaneIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { useForm, SubmitHandler } from "react-hook-form";
import Link from "next/link";

/* --------------------------- Body value Declaration of Form --------------------------- */
type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

function Contact() {
    /* --------------------------- STATES & VARIABLES --------------------------- */
    const sectionTitle: string = "Contact";
    const phoneNumber: string = "+843 2828 9727";
    const address: string = "Tan Phu, Ho Chi Minh City";
    const email: string = "nthau.2k@gmail.com";

    const { register, handleSubmit } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:nthau.2k@hmail.com?subject=${formData.subject}&body=${formData.message}`;
    };

    /* --------------------------------- RENDER --------------------------------- */
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
                <h4 className="text-4xl font-semibold text-center">
                    I have got just what you need.{" "}
                    <span className="decoration-[#F7AB0A]/50 underline">
                        Lets talk
                    </span>
                </h4>

                <div className="space-y-5">
                    <div className="flex items-center space-x-5 justify-center">
                        <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
                        <p className="text-2xl">{phoneNumber}</p>
                    </div>

                    <div className="flex items-center space-x-5 justify-center">
                        <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
                        <p className="text-2xl">{email}</p>
                    </div>

                    <div className="flex items-center space-x-5 justify-center">
                        <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
                        <p className="text-2xl">{address}</p>
                    </div>
                </div>

                {/* FORM */}
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col space-y-2 w-fit mx-auto"
                >
                    <div className="flex space-x-2">
                        <input
                            {...register("name")}
                            placeholder="Name"
                            className="contactInput"
                            type="text"
                        />
                        <input
                            {...register("email")}
                            placeholder="Email"
                            className="contactInput"
                            type="text"
                        />
                    </div>

                    <input
                        {...register("subject")}
                        placeholder="Subject"
                        className="contactInput"
                        type="text"
                    />

                    <textarea
                        {...register("message")}
                        placeholder="Message"
                        className="contactInput"
                    />
                    <button
                        type="submit"
                        className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg flex items-center space-x-2 justify-center hover:space-x-5 transition duration-2000"
                    >
                        <p>Send </p>
                        <PaperAirplaneIcon className="text-black h-5 w-5" />
                    </button>
                </form>
                <Link href="#hero-section">
                    <footer className="sticky bottom-5 w-full cursor-pointer">
                        <div className="flex items-center justify-center">
                            <img
                                className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 transition duration-2000"
                                src="https://booksrun.com/img/tom_no_stress.svg"
                            />
                        </div>
                    </footer>
                </Link>
            </div>
        </motion.div>
    );
}

export default Contact;
