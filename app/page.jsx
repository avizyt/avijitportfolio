import RootLayout from "./layout";
import Link from "next/link";

const page = () => {
    return (
        <div>
            <RootLayout />
            <Link href='/blog'>Blog</Link>
            <h1>Hi, I'm Avijit</h1>
        </div>
    );
};

export default page;
