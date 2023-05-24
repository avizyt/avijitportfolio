import "@/styles/globals.css";
import Link from "next/link";
import Image from "next/image";

const About = () => {
    return (
        <section className='py-20 bg-white'>
            <div className='glassmorphism mt-20 flex flex-wrap items-center'>
                <div className='lg:w-1/2 w-full lg:pr-10'>
                    <h1 className='text-4xl font-bold mb-4'>
                        Hi, I'm Avijit
                        <br />A passionate ML/DL and Web Developer
                    </h1>
                    <p className='text-lg leading-relaxed mb-8'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Qui laborum quasi, incidunt dolore iste nostrum
                        cupiditate voluptas? Laborum, voluptas natus?
                    </p>
                </div>
                <div className='lg:w-1/2 w-full'>
                    <div className='mx-auto lg:max-w-sm'>
                        <Image
                            src='/assets/images/myoctocat.png'
                            alt='octocat'
                            width={300}
                            height={300}
                            className='object-contain'
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

// const About = () => {
//     return (
//         <section>
//             <div>
//                 <div>
//                     <h1>
//                         Hi, I,m Avijit
//                         <br />A passionate ML/DL and Webdevelopmer
//                     </h1>
//                     <p className='mb-8 leading-relaxed'>
//                         Lorem ipsum dolor sit amet, consectetur adipisicing
//                         elit. Qui laborum quasi, incidunt dolore iste nostrum
//                         cupiditate voluptas? Laborum, voluptas natus?
//                     </p>
//                 </div>
//                 <div>
//                     <Image
//                         src='/assets/images/myoctocat.png'
//                         alt='octocat'
//                         width={300}
//                         height={300}
//                         className='object-contain'
//                     />
//                 </div>
//             </div>
//         </section>
//     );
// };

export default About;
