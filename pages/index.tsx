import type { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import ExperienceSection from "../components/Experience/Experience";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";
import { Experience, PageInfo, Project, Skill, Social } from "../typings";
import { fetchExperiences } from "../utils/fetchExperiences";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchSocials } from "../utils/fetchSocials";
import Link from "next/link";

type Props = {
    pageInfo: PageInfo;
    experiences: Experience[];
    skills: Skill[];
    socials: Social[];
    projects: Project[];
};

const Home = ({ pageInfo, experiences, skills, socials, projects }: Props) => {
    return (
        <div className=" bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrooll-bar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
            <Head>
                <title>NTHau Portfolio</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header socials={socials} />
            <section id="hero-section" className="snap-start">
                <Hero pageInfo={pageInfo} />
            </section>

            <section id="about-section" className="snap-center">
                <About pageInfo={pageInfo} />
            </section>

            <section id="experience-section" className="snap-center">
                <ExperienceSection experiences={experiences} />
            </section>

            <section id="skills-section" className="snap-start">
                <Skills skills={skills} />
            </section>

            <section id="projects-section" className="snap-start">
                <Projects projects={projects} />
            </section>

            <section id="contact-section" className="snap-start">
                <Contact />
            </section>

            {/* <footer className="sticky bottom-5 h-10 w-full cursor-pointer">
                <div className="flex items-center justify-center">
                    <Link href="#hero-section">
                        <img
                            className="h-14 w-14 rounded-full filter grayscale hover:grayscale-0 transition duration-2000"
                            src="https://booksrun.com/img/tom_no_stress.svg"
                        />
                    </Link>
                </div>
            </footer> */}
        </div>
    );
};

export default Home;

export async function getStaticProps() {
    const pageInfo: PageInfo = await fetchPageInfo();
    const experiences: Experience[] = await fetchExperiences();
    const skills: Skill[] = await fetchSkills();
    const projects: Project[] = await fetchProjects();
    const socials: Social[] = await fetchSocials();
    return {
        props: {
            pageInfo,
            experiences,
            skills,
            projects,
            socials,
        },
        revalidate: 10,
    };
}

