import "@/styles/globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
    title: "Avijit's Portfolio",
    description: "Hi, I'm Avijit Biswas. It is my portfolio",
};

const RootLayout = ({ children }) => {
    return (
        <html lang='en'>
            <body>
                <div className='main'>
                    <div className='gradient'></div>
                </div>
                <main className='app'>
                    <Navbar />

                    {children}
                </main>
            </body>
        </html>
    );
};

export default RootLayout;
