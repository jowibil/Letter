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
                    <div className="p-2 m-2">
                        <Link
                            to="/signup"
                            className="rounded-2xl gap-1.5 px-3 py-2.5 has-[>svg]:px-2.5 bg-[#FF4C00] text-white hover:bg-[#8B0000]">
                            {"Create Account \u003E"}
                        </Link>
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
                        className="ml-auto text-blue-500 hover:text-blue-700 hover:underline"
                    >
                        <TrueFocus
                            sentence="Start Exploring>"
                            manualMode={true}
                            blurAmount={5}
                            borderColor="red"
                            animationDuration={0.3}
                            pauseBetweenAnimations={1}
                        />
                    </Link>
                </div>
                <div className="flex justify-center p-2">
                    <img src={graphic2} alt="Add Fun in Learning Image" className="w-xs md:w-xl" />
                </div>
            </div>
        </div>
    );
}
