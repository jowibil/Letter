import { PageHeader } from "../layouts/PageHeader";
import { UpperContainer } from "../layouts/BodyContainer";
import { FooterContainer } from "../layouts/Footer";
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import syntax from '../assets/BlackAndWhiteIcon.png'
import TypingCodeCarousel from "@/layouts/TypingEditor";



export default function LandingPage() {
    return (
        <div className="max-h-screen max-w-full">
            <div className="fixed top-0 left-0 w-full z-50">
                <PageHeader />
            </div>
            <Parallax pages={3}>
                <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#1a1a2e' }} />
                <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#16213e' }} />
                <ParallaxLayer
                    offset={0}
                    speed={0}
                    factor={3}
                    style={{
                        background: 'white',
                        backgroundSize: 'cover',
                    }}>
                </ParallaxLayer>
                <ParallaxLayer offset={0.1} speed={0.5}>
                    <div className="flex">
                    <img src={syntax} alt="" className="w-2xs md:w-md h-auto m-auto" />
                    </div>
                    <h1 className="font-[MuseoModerno] not-italic font-extrabold text-[60px] lg:text-9xl leading-[237px] text-center mt-10 lg:mt-20">
                        <span className="text-[#1C1C1C]">SYNTAX</span>
                        <span className="text-red-600">RUSH</span>
                    </h1>


                </ParallaxLayer>

                <ParallaxLayer offset={1} speed={0.5} style={{
                }}>
                    <div className="flex flex-col p-2 mt lg:max-w-5xl m-auto z-50">
                        <div>
                            <UpperContainer />
                        </div>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer offset={1.8} speed={0.5}>
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
                </ParallaxLayer>

                <ParallaxLayer offset={2.735} speed={0.3}>
                    <footer className="">
                        <FooterContainer />
                    </footer> 
                </ParallaxLayer>
            </Parallax>
            



            {/* <PageHeader />
            <div className="flex flex-col p-2 mt lg:max-w-5xl m-auto z-50">
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
                    <TypingCodeBlock />
                </div>
            </div>
            <footer className="mt-40">
                <FooterContainer />
            </footer> */}
        </div>
    );
}