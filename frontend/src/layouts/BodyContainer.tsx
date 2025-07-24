import { Link } from "react-router-dom";
import graphic from "../assets/Graphic1.png"
import graphic2 from "../assets/Graohic2.png"
import TrueFocus from "@/blocks/TextAnimations/TrueFocus/TrueFocus";

export function UpperContainer() {
    return (
        <div>
            <div className="grid grid-cols-1 gap-4 p-2 md:grid-cols-2">
                <div className="flex justify-center p-2">
                    <img src={graphic} alt="Learn to Code Image" className="w-xs lg:w-xl" />
                </div>
                <div className="flex flex-col gap-4 mt-4 md:mt-10 lg:mt-30 p-2 text-center md:text-left">
                    <h3 className="font-[MuseoModerno] font-bold text-3xl lg:text-4xl">
                        Learn to Code
                    </h3>
                    <p className="font-[Inter] p-2">
                        Jump into the world of programming with SyntaxRush — where coding
                        meets competition! Whether you're a beginner or a seasoned
                        developer, our platform gives you the tools to master languages like
                        Python, JavaScript, C++, and more.
                    </p>
                    <div className="p-2">
                        <div className="relative inline-block group overflow-hidden rounded-full z-10">
                            <div className="absolute inset-0 bg-[#FF4C00] rounded-full z-[-2]" />
                            <div className="absolute inset-0 bg-[#8B0000] w-0 group-hover:w-full transition-all duration-300 rounded-full z-[-1]" />
                            <Link
                                to="/signup"
                                className="relative inline-block px-6 py-3 text-white uppercase text-sm tracking-wider font-semibold z-10 transition-all duration-300"
                            >
                                Create Account &gt;
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-4 mt-40 p-2 md:grid-cols-2">
                <div className="flex flex-col gap-4 p-2 lg:mt-20">
                    <h3 className="font-[MuseoModerno] font-medium text-center md:text-right text-2xl lg:text-4xl">
                        Add Fun in Learning
                    </h3>
                    <p className="font-[Inter] p-2 text-justify md:text-right">
                        Who said coding has to be boring? At SyntaxRush, we’ve gamified
                        learning with real-time coding battles, leaderboard rankings, and
                        seasonal tournaments. Compete with friends or challengers worldwide
                        while mastering your favorite languages.
                    </p>
                    <Link
                        to="/explore"
                        className="font-[Inter] text-blue-700 hover:text-blue-500 hover:font-semibold ml-auto relative bg-gradient-to-r from-transparent to-transparent bg-[length:0%_3px] bg-no-repeat bg-bottom hover:bg-[length:100%_3px] transition-all duration-500 ease-in-out"
                        style={{
                            backgroundImage: 'linear-gradient(transparent, transparent), linear-gradient(#FF4C00, #8B0000)'
                        }}
                    >
                        {"Start Exploring >"}
                    </Link>
                </div>
                <div className="flex justify-center p-2">
                    <img src={graphic2} alt="Add Fun in Learning Image" className="w-xs md:w-xl" />
                </div>
            </div>
        </div>
    );
}
