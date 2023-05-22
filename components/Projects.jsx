import { CodeBracketIcon } from "@heroicons/react/24/solid";
import { projects } from "./data";
import Link from "next/link";
import Image from "next/image";

const Projects = () => {
    return (
        <section id='proj'>
            <div>
                <div>
                    <CodeBracketIcon className='mx-auto inline-block w-10 mb-4' />
                    <h1 className='head_text'>My all Projects</h1>
                    <p className='lg:w-2/3 mx-auto leading-relaxed text-base'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Explicabo facilis repellat ab cupiditate alias
                        vero aliquid obcaecati quisquam fuga dolore.
                    </p>
                </div>
                <div>
                    {projects.map((project) => (
                        <Link
                            href={project.link}
                            key={project.image}
                            className='prompt_card'>
                            <div>
                                <Image
                                    alt='gallery'
                                    className='absolute inset-0 w-full h-full object-cover object-center'
                                    src={project.image}
                                    width={300}
                                    height={300}
                                />
                                <div>
                                    <h2 className='tracking-widest text-sm title-font font-medium text-green-400 mb-1'>
                                        {project.subtitle}
                                    </h2>
                                    <h1 className='title-font text-lg font-medium text-white mb-3'>
                                        {project.title}
                                    </h1>
                                    <p className='leading-relaxed'>
                                        {project.description}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
