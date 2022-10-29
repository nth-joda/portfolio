import {
    EnvelopeIcon,
    MapPinIcon,
    PaperAirplaneIcon,
    PhoneIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { SubmitHandler, useForm } from "react-hook-form";

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
            <h3 className="absolute text-center px-4 top-36 uppercase tracking-[3px] text-gray-500 text-sm">
                I have got just what you need.{" "}
                <span className="decoration-[#F7AB0A]/50 underline">
                    Lets talk
                </span>
            </h3>

            <div className="absolute top-48 flex flex-col space-y-6">
                <div className="space-y-5">
                    <div className="flex items-center space-x-5 justify-center">
                        <PhoneIcon className="text-[#F7AB0A] h-5 w-5 md:h-7 md:w-7 animate-pulse" />
                        <p className="text-xl md:text-2xl">{phoneNumber}</p>
                    </div>

                    <div className="flex items-center space-x-5 justify-center">
                        <EnvelopeIcon className="text-[#F7AB0A] h-5 w-5 md:h-7 md:w-7  animate-pulse" />
                        <p className="text-xl md:text-2xl">{email}</p>
                    </div>

                    <div className="flex items-center space-x-5 justify-center">
                        <MapPinIcon className="text-[#F7AB0A] h-5 w-5 md:h-7 md:w-7  animate-pulse" />
                        <p className="text-xl md:text-2xl">{address}</p>
                    </div>
                </div>

                {/* FORM */}
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col space-y-2 w-fit md:mx-auto mx-4"
                >
                    <div className="md:flex md:space-x-2 md:space-y-0 space-y-2">
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
            </div>
        </motion.div>
    );
}

export default Contact;
