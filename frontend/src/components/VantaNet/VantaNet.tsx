// components/VantaNet.tsx
import { useEffect, useRef, useState } from "react";

declare global {
    interface Window {
        VANTA: any;
    }
}

const isWebGLAvailable = (): boolean => {
    try {
        const canvas = document.createElement("canvas");
        return !!(
            window.WebGLRenderingContext &&
            (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
        );
    } catch {
        return false;
    }
};

const VantaNet = () => {
    const vantaRef = useRef<HTMLDivElement>(null);
    const [vantaEffect, setVantaEffect] = useState<any>(null);
    const [webglSupported, setWebglSupported] = useState(true);

    useEffect(() => {
        const supported = isWebGLAvailable();
        setWebglSupported(supported);

        if (supported && !vantaEffect && window.VANTA && window.VANTA.NET) {
            try {
                setVantaEffect(
                    window.VANTA.NET({
                        el: vantaRef.current,
                        mouseControls: true,
                        touchControls: true,
                        gyroControls: false,
                        minHeight: 200.0,
                        minWidth: 200.0,
                        scale: 1.0,
                        scaleMobile: 1.0,
                        color: 0x8b0000,
                        backgroundColor: 0xffffff,
                        backgroundAlpha: 1.0,
                        maxDistance: 20,
                        points: 10,
                        showDots: true,
                        spacing: 15,
                    })
                );
            } catch (err) {
                console.error("Vanta initialization error:", err);
                setWebglSupported(false);
            }
        }

        return () => {
            if (vantaEffect) vantaEffect.destroy();
        };
    }, [vantaEffect]);

    return (
        <div
            ref={vantaRef}
            className={`w-full h-screen pointer-events-none ${!webglSupported ? "bg-white" : ""
                }`}
        >
            {!webglSupported && (
                <div className="w-full h-full bg-gradient-to-b from-[#EF3B36] to-[#FFFFFF] absolute inset-0" />
            )}
        </div>
    );
};

export default VantaNet;
