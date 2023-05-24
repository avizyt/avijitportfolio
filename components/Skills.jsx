import { BsCpuFill, BsFillPatchCheckFill } from "react-icons/bs";

import { skills } from "./data";
import "@/styles/globals.css";

const Skills = () => {
    return (
        <section id='skills' className='glassmorphism relative py-16 mt-20'>
            <div className=' px-5 mx-auto'>
                <div className='text-center mb-20'>
                    <BsCpuFill className='text-size-lg inline-block mb-4' />
                    <h1 className='sm:text-4xl text-3xl font-medium title-font text-white mb-4'>
                        Skills &amp; Technologies
                    </h1>
                    <p className='text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Nisi sit ipsa delectus eum quo voluptas aspernatur
                        accusantium distinctio possimus est.
                    </p>
                </div>
                <div className='flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2'>
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className=' glassmorphism px-2 sm:w-1/2 w-full'>
                            <div className='rounded flex p-4 h-full items-center'>
                                <
                                    skill.icon
                                    className='text-slate-800 w-6 h-6 flex-shrink-0 mr-4'
                                />
                                <span className='title-font font-medium text-gray-800 hover:text-slate-400'>
                                    {skill.name}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
