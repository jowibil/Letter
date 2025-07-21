// components/VantaNet.tsx
import { useEffect, useRef, useState } from "react";

declare global {
    interface Window {
        VANTA: any;
    }
}

const VantaNet = () => {
    const vantaRef = useRef<HTMLDivElement>(null);
    const [vantaEffect, setVantaEffect] = useState<any>(null);

    useEffect(() => {
        if (!vantaEffect && window.VANTA) {
            setVantaEffect(
                window.VANTA.NET({
                    el: vantaRef.current,
                    mouseControls: true,
                    touchControls: false,
                    gyroControls: false,
                    minHeight: 200.0,
                    minWidth: 200.0,
                    scale: 1.0,
                    scaleMobile: 1.0,
                    color: 0x8b0000,
                    backgroundColor: 0xFFFFFF,
                    backgroundAlpha: 1.0,
                    maxDistance: 20,
                    points: 10,
                    showDots: true,
                    spacing: 15,
                })
            );
        }

        return () => {
            if (vantaEffect) vantaEffect.destroy();
        };
    }, [vantaEffect]);

    return <div ref={vantaRef} className="w-full h-screen pointer-events-none" />;
};

export default VantaNet;
