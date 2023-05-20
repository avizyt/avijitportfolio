import Navbar from "@/components/Navbar";

export const metadata = {
    title: "Avijit's Portfolio",
    description: "Hi, I'm Avijit Biswas. It is my portfolio",
};

const RootLayout = ({ children }) => {
    return (
        <html lang='en'>
            <body>
                <nav>
                    <Navbar />
                </nav>
                {children}
            </body>
        </html>
    );
};

export default RootLayout;
