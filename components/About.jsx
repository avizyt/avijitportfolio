import "@/styles/globals.css";
import Link from "next/link";
import Image from "next/image";

const About = () => {
    return (
        <section>
            <div>
                <div>
                    <h1>
                        Hi, I,m Avijit
                        <br />A passionate ML/DL and Webdevelopmer
                    </h1>
                    <p className='mb-8 leading-relaxed'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Qui laborum quasi, incidunt dolore iste nostrum
                        cupiditate voluptas? Laborum, voluptas natus?
                    </p>
                    <div>
                        <Link href='#contact'>Work With Me</Link>
                        <Link href='#projects'>See my Past Work</Link>
                    </div>
                </div>
                <div>
                    <Image
                        src='/assets/images/myoctocat.png'
                        alt='octocat'
                        width={300}
                        height={300}
                        className='object-contain'
                    />
                </div>
            </div>
        </section>
    );
};

export default About;
