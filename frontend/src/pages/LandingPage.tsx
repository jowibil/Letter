import { PageHeader } from "../layouts/PageHeader";
import { UpperContainer } from "../layouts/BodyContainer";
import { FooterContainer } from "../layouts/Footer";
import syntax from '../assets/BlackAndWhiteIcon.png'
import TypingCodeCarousel from "@/layouts/TypingEditor";
import RotatingText from '../blocks/TextAnimations/RotatingText/RotatingText'
import VantaNet from "@/components/VantaNet/VantaNet";

export default function LandingPage() {
    return (
        <div className="max-h-screen max-w-full">
            <PageHeader />
            <div className="relative">
                <VantaNet />
                <div className="absolute top-[-70px] left-0 flex flex-col w-full h-full items-center justify-center">
                    <img src={syntax} alt="" className="w-2xs md:w-md p-2" />
                    <h1 className="font-[MuseoModerno] not-italic font-extrabold text-[40px] md:text-8xl lg:text-9xl leading-[237px] text-center lg:mt-10">
                        <span className="text-[#1C1C1C]">SYNTAX</span>
                        <span className="text-red-600">RUSH</span>
                    </h1>
                </div>
            </div>
            <div className="flex flex-col p-2 mt-40 lg:max-w-6xl m-auto z-50">
                <div>
                    <UpperContainer />
                </div>
            </div>
            <div className="flex flex-col mt-40 lg:max-w-5xl m-auto">
                <div className="flex items-center justify-center p-4">
                    <h1 className="font-bold p-2 text-3xl lg:text-4xl">Code</h1>
                    <RotatingText
                        texts={['Playground', 'Rush', 'Fun', 'Tournaments!']}
                        mainClassName="px-2 md:px-3 py-2 md:py-1.2 bg-[#8B0000] text-white text-2xl md:text-3xl font-[MuseoModerno] font-bold overflow-hidden justify-center rounded-lg"
                        staggerFrom={"last"}
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-120%" }}
                        staggerDuration={0.025}
                        splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                        transition={{ type: "spring", damping: 30, stiffness: 400 }}
                        rotationInterval={2000}
                    />
                </div>
                <p className="font-[Inter] text-center p-4">
                    Learn alot from practicing and beating the records from other people across the world,
                    <br /> Do you have what it takes? Code along now!
                </p>
                <div className="flex items-center justify-center p-4 mt-4">
                    <TypingCodeCarousel />
                </div>
            </div>
            <footer className="mt-40">
                <FooterContainer />
            </footer>
        </div>
        
    );
}