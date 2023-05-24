import About from "@/components/About";
import "@/styles/globals.css";
import RootLayout from "./layout";
import Link from "next/link";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Testimonial from "@/components/Testimonial";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";

const Home = () => {
    return (
        <div className='flex_start'>
            <Navbar />
            <About />
            <Projects />
            <Skills />
            <Testimonial />
            <Contact />
        </div>
    );
};

export default Home;
