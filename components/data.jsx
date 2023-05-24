import {
    FaPython,
    FaJs,
    FaHtml5,
    FaGitAlt,
    FaReact,
    FaNode,
    FaJava,
    FaCss3,
    FaDatabase,
} from "react-icons/fa";
import { SiTensorflow, SiPytorch } from "react-icons/si";

export const projects = [
    {
        title: "React Reserve",
        subtitle: "MERN Stack",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
        image: "/assets/images/image-1.jpg",
        link: "https://reactbootcamp.com",
    },
    {
        title: "React Tracks",
        subtitle: "React and Python",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
        image: "/assets/images/image-2.jpg",
        link: "https://reedbarger.com",
    },
    {
        title: "DevChat",
        subtitle: "React and Firebase",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
        image: "/assets/images/image-3.jpg",
        link: "https://jsbootcamp.com",
    },
    {
        title: "Epic Todo App",
        subtitle: "React Hooks",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
        image: "/assets/images/image-4.jpg",
        link: "https://pythonbootcamp.com",
    },
];

export const skills = [
    { name: "HTML", icon: FaHtml5 },
    { name: "JavaScript", icon: FaJs },
    { name: "CSS", icon: FaCss3 },
    { name: "Python,", icon: FaPython },
    { name: "React", icon: FaReact },
    { name: "Node", icon: FaNode },
    { name: "Java", icon: FaJava },
    { name: "SQL", icon: FaDatabase },
    { name: "Git", icon: FaGitAlt },
    { name: "Pytorch", icon: SiPytorch },
    { name: "TensorFlow", icon: SiTensorflow },
];

export const testimonials = [
    {
        quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium neque non erat commodo, in auctor quam euismod.",
        image: "/assets/images/image-5.jpg",
        name: "John Doe",
        company: "ABC Company",
    },
    {
        quote: "Praesent consectetur sagittis massa, ut venenatis nulla ultrices ut. Mauris interdum velit id nunc luctus, a elementum nunc egestas.",
        image: "/assets/images/image-6.jpg",
        name: "Jane Smith",
        company: "XYZ Corporation",
    },
    // Add more testimonials here
];
