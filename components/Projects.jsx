import { CodeBracketIcon } from "@heroicons/react/24/solid";
import { projects } from "./data";
import Link from "next/link";
import Image from "next/image";

const Projects = () => {
    return (
        <section id='proj' className='py-16 bg-gray-800'>
            <div className=' mx-auto'>
                <div className='text-center mb-8'>
                    <CodeBracketIcon className='mx-auto inline-block w-10 mb-4 text-white' />
                    <h1 className='text-4xl font-bold text-white'>
                        My Projects
                    </h1>
                    <p className='lg:w-2/3 mx-auto leading-relaxed text-base text-white'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Explicabo facilis repellat ab cupiditate alias
                        vero aliquid obcaecati quisquam fuga dolore.
                    </p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {projects.map((project) => (
                        <div className='glassmorphism'>
                            <Link href={project.link} key={project.image}>
                                <div className='relative overflow-hidden rounded-lg p-6 text-gray hover:text-gray-50 transition duration-300'>
                                    <Image
                                        alt='gallery'
                                        className='absolute inset-0 w-full h-full object-cover object-center'
                                        src={project.image}
                                        width={640}
                                        height={400}
                                    />
                                    <div className='absolute inset-0 flex flex-col justify-end bg-white bg-opacity-0 backdrop-filter backdrop-blur'>
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
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// const Projects = () => {
//     return (
//         <section id='proj' className='py-16 bg-gray-800'>
//             <div className='container mx-auto'>
//                 <div className='text-center mb-8'>
//                     <CodeBracketIcon className='mx-auto inline-block w-10 mb-4 text-white' />
//                     <h1 className='text-4xl font-bold text-white'>
//                         My Projects
//                     </h1>
//                     <p className='lg:w-2/3 mx-auto leading-relaxed text-base text-white'>
//                         Lorem ipsum, dolor sit amet consectetur adipisicing
//                         elit. Explicabo facilis repellat ab cupiditate alias
//                         vero aliquid obcaecati quisquam fuga dolore.
//                     </p>
//                 </div>
//                 <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
//                     {projects.map((project) => (
//                         <Link href={project.link} key={project.image}>
//                             <div className='relative overflow-hidden bg-gray-800 bg-opacity-80 rounded-lg p-6 text-white hover:bg-opacity-100 transition duration-300'>
//                                 <Image
//                                     alt='gallery'
//                                     className='absolute inset-0 w-full h-full object-cover object-center'
//                                     src={project.image}
//                                     width={300}
//                                     height={300}
//                                 />
//                                 <div className='absolute inset-0 flex flex-col justify-end'>
//                                     <h2 className='tracking-widest text-sm title-font font-medium text-green-400 mb-1'>
//                                         {project.subtitle}
//                                     </h2>
//                                     <h1 className='title-font text-lg font-medium text-white mb-3'>
//                                         {project.title}
//                                     </h1>
//                                     <p className='leading-relaxed'>
//                                         {project.description}
//                                     </p>
//                                 </div>
//                             </div>
//                         </Link>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// const Projects = () => {
//     return (
//         <section id='proj'>
//             <div>
//                 <div>
//                     <CodeBracketIcon className='mx-auto inline-block w-10 mb-4' />
//                     <h1 className='head_text'>My all Projects</h1>
//                     <p className='lg:w-2/3 mx-auto leading-relaxed text-base'>
//                         Lorem ipsum, dolor sit amet consectetur adipisicing
//                         elit. Explicabo facilis repellat ab cupiditate alias
//                         vero aliquid obcaecati quisquam fuga dolore.
//                     </p>
//                 </div>
//                 <div>
//                     {projects.map((project) => (
//                         <Link
//                             href={project.link}
//                             key={project.image}
//                             className='prompt_card'>
//                             <div>
//                                 <Image
//                                     alt='gallery'
//                                     className='absolute inset-0 w-full h-full object-cover object-center'
//                                     src={project.image}
//                                     width={300}
//                                     height={300}
//                                 />
//                                 <div>
//                                     <h2 className='tracking-widest text-sm title-font font-medium text-green-400 mb-1'>
//                                         {project.subtitle}
//                                     </h2>
//                                     <h1 className='title-font text-lg font-medium text-white mb-3'>
//                                         {project.title}
//                                     </h1>
//                                     <p className='leading-relaxed'>
//                                         {project.description}
//                                     </p>
//                                 </div>
//                             </div>
//                         </Link>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

export default Projects;
