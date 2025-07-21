import { PageHeader } from "../layouts/PageHeader";
import { UpperContainer } from "../layouts/BodyContainer";
import { FooterContainer } from "../layouts/Footer";
import syntax from '../assets/BlackAndWhiteIcon.png'
import TypingCodeCarousel from "@/layouts/TypingEditor";

export default function LandingPage() {
    return (
        <div className="max-h-screen max-w-full">
            <PageHeader />
            <div className="flex flex-col bg-gray-200 m-4 md:m-7 rounded-[29px]">
                <img src={syntax} alt="" className="w-2xs md:w-md h-auto m-auto p-2" />
                <h1 className="font-[MuseoModerno] not-italic font-extrabold text-[40px] md:text-8xl lg:text-9xl leading-[237px] text-center mt-5 lg:mt-10">
                    <span className="text-[#1C1C1C]">SYNTAX</span>
                    <span className="text-red-600">RUSH</span>
                </h1>
            </div>
            <div className="flex flex-col p-2 mt-40 lg:max-w-6xl m-auto z-50">
                <div>
                    <UpperContainer />
                </div>
            </div>
            <div className="flex flex-col mt-40 lg:max-w-5xl m-auto">
                <h1 className="text-center p-2 text-3xl font-bold lg:text-4xl">Code Playground</h1>
                <p className="text-center p-2 m-2">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos nihil eos nemo dolorem quo voluptatem soluta voluptatibus
                    <br /> ad placeat est iste enim, natus ducimus, minima sit, ex vel accusamus eius?
                </p>
                <div className="flex items-center justify-center p-4 mt-8">
                    <TypingCodeCarousel />
                </div>
            </div>
            <footer className="mt-40">
                <FooterContainer />
            </footer>
        </div>
        
    );
}