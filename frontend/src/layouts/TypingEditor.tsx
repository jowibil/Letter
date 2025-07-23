import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";

const snippets = [
    `
function greet(name) {
  return "Hello, " + name + "!";
}
console.log(greet("Tailwind User"));
`.trim(),
    `
const add = (a, b) => a + b;
function calculate() {
  let total = 0;
  for (let i = 0; i < 5; i++) {
    total = add(total, i);
  }
  return total;
}
console.log("Sum:", calculate());
`.trim(),
    `
/**
 * Simulate fetching data from a server.
 */
async function fetchData(url) {
  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
  } catch (e) {
    console.error("Fetch failed:", e);
  }
}
fetchData("/api/data");
`.trim()
];

const TypingCodeCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [shouldRender, setShouldRender] = useState(true);

    
    useEffect(() => {
        const timer = setTimeout(() => {
            setShouldRender(false);
            setTimeout(() => {
                setCurrentIndex((prev) => (prev + 1) % snippets.length);
                setShouldRender(true);
            }, 100);
        }, 9500); // 8.5s per snippet

        return () => clearTimeout(timer);
    }, [currentIndex]);

    return (
        <div className="w-full bg-[#1e1e1e] text-white font-mono rounded-lg overflow-hidden shadow-lg border border-gray-700 h-96">
            {/* Fake editor header */}
            <div className="bg-gray-800 px-4 py-2 flex items-center space-x-2">
                <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                <span className="text-sm text-gray-300 ml-4">code.js</span>
            </div>
            <pre className="p-4 text-sm overflow-x-auto bg-[#1e1e1e]">
                <code className="text-white">
                    {shouldRender && (
                        <Typewriter
                            words={[snippets[currentIndex]]}
                            typeSpeed={30}
                            deleteSpeed={0}
                            delaySpeed={1000000}
                            loop={1}
                            cursor
                            cursorStyle="|"
                        />
                    )}
                </code>
            </pre>
        </div>
    );
};

export default TypingCodeCarousel;