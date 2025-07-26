import { useState } from "react";
import PageHeader from "@/layouts/PageHeader";
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import avatar from "../assets/Graohic2.png"
import FooterContainer from "@/layouts/Footer";
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

const ExplorePage = () => {
    const [challenges] = useState([
        { title: "Binary Search Blitz", tags: ["Algorithms", "Speed Rounds"], plays: 1240 },
        { title: "Stack Mastery", tags: ["Data Structures"], plays: 980 },
        { title: "Recursive Fury", tags: ["Algorithms", "Hard"], plays: 870 },
        { title: "Escape the Maze", tags: ["JavaScript"], plays: 999 },
        { title: "PYRAMID CRAZY", tags: ["Java"], plays: 124 },
        { title: "Escape the Maze", tags: ["JavaScript", "Easy"], plays: 267 },
    ]);

    const [leaders] = useState([
        { name: "CodeMasterX", time: "0:45s", avatar: avatar },
        { name: "BugHunter77", time: "0:52s", avatar: avatar },
        { name: "CodeMasterX", time: "1:10s", avatar: avatar },
        { name: "BugHunter77", time: "1:22s", avatar: avatar },
        { name: "BugHunter77", time: "1:35s", avatar: avatar },
        { name: "BugHunter77", time: "1:40s", avatar: avatar },

    ]);

    const [customChallenges] = useState([
        { title: "Palindrome Duel", likes: 123, remixCount: 8 },
        { title: "FizzBuzz Frenzy", likes: 90, remixCount: 12 },
    ]);

    const [weeklyChamps] = useState([
        { name: "JSniper", avatar: avatar, score: 3000 },
        { name: "LoopQueen", avatar: avatar, score: 2860 },
        { name: "CodeGods", avatar: avatar, score: 2500 },
        { name: "JustYourAverageJoe", avatar: avatar, score: 1900 },
        { name: "MotoVlogger", avatar: avatar, score: 1700 },
    ]);

    return (
        <div className="max-h-screen max-w-full">
            <PageHeader />
            <div className="max-w-6xl m-auto mt-4">
                <h1 className="font-medium text-gray-500 text-[1.2rem]">Welcome to</h1>
                <h1 className="font-[MuseoModerno] text-black text-[2.5rem]">SyntaxRush Explore</h1>
            </div>
            <div className="p-4 space-y-5">
                <section className="p-4">
                    <h1 className="font-bold text-black text-3xl p-4">Popular Challenges</h1>
                    <Carousel
                        opts={{
                            align: "start",
                        }}
                        className="w-full mx-auto"
                    >
                        <CarouselContent className="-ml-2">
                            {challenges.map((c, i) => (
                                <CarouselItem key={i} className="md:basis-1/3 lg:basis-1/6 pl-3">
                                    <div className="p-2">
                                        <Card className="shadow hover:shadow-lg transition-all">
                                            <CardContent className="flex flex-col justify-between p-4 h-full">
                                                <div>
                                                    <h3 className="font-semibold text-sm mb-2 line-clamp-2">{c.title}</h3>
                                                    <div className="text-xs text-gray-600 mb-3">Plays: {c.plays}</div>
                                                </div>
                                                <div className="flex flex-wrap gap-1">
                                                    {c.tags.map((tag, tagIndex) => (
                                                        <span key={tagIndex} className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded-full">
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </section>


                <div className="text-center font-bold text-6xl mt-10 mb-6">
                    Discover more things in <span className="font-[MuseoModerno]">SyntaxRush</span>!
                </div>



                <div className="grid grid-cols-6 max-w-6xl mx-auto mt-10 p-4 items-center border-gray-300 rounded-md shadow-lg">

                    <div className="col-span-4 flex flex-col gap-6 p-6 h-[30rem] justify-center">
                        <h2 className="font-['Bebas_Neue'] text-font-semibold text-5xl uppercase">Be the Fastest Coder</h2>
                        <p className="font-[Raleway] font-medium text-[1.125rem] ">Participate in different leagues to showcase your skills.</p>
                        <ul className="space-y-2 mt-4">
                            <li><p className="font-[Raleway] font-bold text-[1rem]">Difficulty . <span className="text-[#FF4C00] font-medium">Varying difficulty to hone skills</span></p></li>
                            <li><p className="font-[Raleway] font-bold text-[1rem]">Community . <span className="text-[#FF4C00] font-medium">Experience the vast community of developers.</span></p></li>
                            <li><p className="font-[Raleway] font-bold text-[1rem]">Learnings . <span className="text-[#FF4C00] font-medium">Learn through playing</span></p></li>
                        </ul>
                    </div>

                    <div className="col-span-2 p-2">
                        <h2 className="font-['Bebas_Neue'] font-medium text-3xl tracking-wide mb-2 p-2">Leaderboard Highlights</h2>

                        <ScrollArea className="h-[33rem] w-full rounded-md">
                            <div className="space-y-3 p-2">
                                {leaders.map((l, i) => (
                                    <div key={i}>
                                        <div className="flex sm:flex-col md:flex-row items-center gap-4 p-3 border border-gray-300 rounded-md shadow hover:shadow-lg transition-all">
                                            <img src={l.avatar} alt={l.name} className="w-15 h-15 rounded-full" />
                                            <div className="flex-1">
                                                <p className="font-medium">{l.name}</p>
                                                <p className="text-sm text-gray-500">Time: {l.time}</p>
                                            </div>
                                            <button
                                                className="rounded-lg px-1.5 py-1 overflow-hidden relative group cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                                            >
                                                <div className="absolute inset-0 bg-gradient-to-r from-[#FF4C00] to-[#8B0000] rounded-lg"></div>
                                                <div className="absolute inset-[2px] bg-slate-50 rounded-md transition-colors duration-300 group-hover:bg-transparent"></div>
                                                <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-30 bg-gradient-to-r from-[#FF4C00] to-[#8B0000] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                                                <span className="relative text-[14px] font-normal text-black transition duration-300 group-hover:text-white hover:font-medium ease">
                                                    Challenge
                                                </span>
                                            </button>
                                        </div>
                                        {i < leaders.length - 1 && <Separator className="my-2" />}
                                    </div>
                                ))}
                            </div>
                        </ScrollArea>
                    </div>
                </div>

                <div className="">
                    <h2 className="text-[1.2rem] text-center font-bold mb-2 p-2">🎯 Weekly Champs  TOP 5</h2>
                    <div className="">
                        <div className="flex flex-wrap gap-4 justify-center mt-auto mb-auto">
                            {weeklyChamps.map((champ, i) => (
                                <div key={i} className="p-4 border border-red-400 rounded-lg w-[200px] text-center shadow hover:shadow-lg transition-all">
                                    <img src={champ.avatar} alt={champ.name} className="w-16 h-16 rounded-full mx-auto" />
                                    <h4 className="font-semibold mt-2">{champ.name}</h4>
                                    <p className="text-sm text-gray-600">Score: {champ.score}</p>
                                    <div className="mt-1 text-yellow-500">⭐ Weekly Champ</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="">
                    <h2 className="text-[1.2rem] font-bold mb-4">🧩 Custom Challenges by Community</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {customChallenges.map((cc, i) => (
                            <div key={i} className="p-4 border rounded-lg shadow hover:shadow-lg transition-all space-y-2">
                                <h3 className="font-semibold">{cc.title}</h3>
                                <div className="flex gap-2 text-sm">
                                    <span>❤️ {cc.likes}</span>
                                    <span>🔁 {cc.remixCount} Remix</span>
                                </div>
                                <div className="flex gap-2">
                                    <button className="text-sm bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-500">Try</button>
                                    <button className="text-sm bg-green-600 text-white px-3 py-1 rounded hover:bg-green-500">Like</button>
                                    <button className="text-sm bg-purple-600 text-white px-3 py-1 rounded hover:bg-purple-500">Remix</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="font-bold text-center text-4xl m-10">
                    TEXT FOR BUFFER HERE
                </div>

            </div>
            <FooterContainer />
        </div>
    );
};

export default ExplorePage;
