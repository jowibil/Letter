import React, { useState } from 'react';

interface WeeklyChamp {
    name: string;
    avatar: string;
    score: number;
}

interface AnimatedPodiumProps {
    weeklyChamps: WeeklyChamp[];
}

const AnimatedPodium: React.FC<AnimatedPodiumProps> = ({ weeklyChamps = [] }) => {
    const [hoveredId, setHoveredId] = useState<number | null>(null);


    const podiumConfig = [
        { position: 1, baseHeight: "h-21", hoverHeight: "h-40", color: "bg-emerald-500" },
        { position: 2, baseHeight: "h-13", hoverHeight: "h-32", color: "bg-cyan-500" },
        { position: 3, baseHeight: "h-9", hoverHeight: "h-28", color: "bg-amber-500" },
        { position: 4, baseHeight: "h-5", hoverHeight: "h-24", color: "bg-purple-500" },
        { position: 5, baseHeight: "h-1", hoverHeight: "h-20", color: "bg-rose-500" }
    ];


    const displayChamps = (weeklyChamps || []).slice(0, 5).map((champ, index) => ({
        ...champ,
        ...podiumConfig[index],
        id: index
    }));

    return (
        <div className="absolute left-1/2 -translate-x-1/2 border-b-4 rounded-b-3xl flex items-end justify-center gap-4 px-20 h-50 select-none">
            <div className="flex items-end gap-2">
                {displayChamps.map((champ) => (
                    <div
                        key={champ.id}
                        className="relative flex flex-col items-center"
                        onMouseEnter={() => setHoveredId(champ.id)}
                        onMouseLeave={() => setHoveredId(null)}
                    >

                        {champ.position === 1 && (
                            <div className="mb-2">
                                <svg
                                    className="w-8 h-8 text-orange-500"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            </div>
                        )}


                        <img
                            src={champ.avatar}
                            alt={champ.name}
                            className="w-12 h-12 rounded-full border-2 border-white shadow-lg mb-2"
                        />


                        <h4 className="font-semibold text-sm text-center mb-2 text-gray-800 leading-tight">
                            {champ.name}
                        </h4>

                        <h4 className="font-normal text-sm text-center mb-2 text-gray-600 leading-1">
                            {champ.score}
                        </h4>


                        <div
                            className={`
                ${champ.color} 
                ${hoveredId === champ.id ? champ.hoverHeight : champ.baseHeight}
                w-20 rounded-t-lg transition-all duration-300 ease-in-out
                flex items-center justify-center
                shadow-lg hover:shadow-xl hover:opacity-100
              `}
                        >
                            <span className={`${hoveredId === champ.id ? 'opacity-100' : 'opacity-0'} text-white text-3xl font-bold`}>
                                {champ.position}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AnimatedPodium;