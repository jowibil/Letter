import { Link } from "react-router-dom";


export function UpperContainer() {
    return (
        <div>
            <div className="grid grid-cols-1 p-2 lg:grid-cols-2 md:grid-cols-2">
                <div className="w-2xs h-64 p-2 m-auto">
                </div>
                <div className="grid grid-cols-1 gap-4 text-center p-2">
                    <h3 className="scroll-m-20 text-center text-3xl m-2 font-bold tracking-tight text-balance lg:text-4xl">
                        Learn to Code
                    </h3>
                    <p className="p-1">
                        Jump into the world of programming with SyntaxRush — where coding
                        meets competition! Whether you're a beginner or a seasoned
                        developer, our platform gives you the tools to master languages like
                        Python, JavaScript, C++, and more.
                    </p>
                    <div className="p-2 m-3">
                        <Link
                            to="/signup"
                            className="rounded-2xl gap-1.5 px-3 py-2.5 has-[>svg]:px-2.5 bg-blue-700 text-white hover:bg-blue-500">
                            {"Create Account \u003E"}
                        </Link>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 mt-40 p-2 lg:grid-cols-2 md:grid-cols-2 sm: gap-4">
                <div className="grid grid-cols-1 gap-4 p-2 mb-7">
                    <h3 className="text-center text-2xl font-medium md:text-right">
                        Add Fun in Learning
                    </h3>
                    <p className="p-1 text-justify md:text-right">
                        Who said coding has to be boring? At SyntaxRush, we’ve gamified
                        learning with real-time coding battles, leaderboard rankings, and
                        seasonal tournaments. Compete with friends or challengers worldwide
                        while mastering your favorite languages.
                    </p>
                    <Link
                        to="/explore"
                        className="text-blue-700 hover:text-blue-500 hover:font-medium hover:underline ml-auto">
                        {"Start Exploring \u003E"}
                    </Link>
                </div>
                <div className="w-2xs h-64 m-auto p-2"></div>
            </div>
        </div>
    );
}
