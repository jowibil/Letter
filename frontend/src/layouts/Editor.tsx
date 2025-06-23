import { useState } from "react";
import Editor from "@monaco-editor/react";
import axios from "axios";
import { Button } from "@/components/ui/button"


const languages = [
    { id: 71, label: "Python (3.8.1)", default: "print('Hello, world!')" },
    { id: 54, label: "C++ (GCC 9.2.0)", default: "#include <iostream>\nint main() { std::cout << \"Hello, world!\"; return 0; }" },
    { id: 62, label: "Java (OpenJDK 13)", default: "class Main { public static void main(String[] args) { System.out.println(\"Hello, world!\"); } }" },
];

export default function CodeEditor() {
    const [language, setLanguage] = useState(languages[0]);
    const [code, setCode] = useState(language.default);
    const [output, setOutput] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const runCode = async () => {
        setLoading(true);
        setOutput(null);

        try {
            const submissionRes = await axios.post(
                "https://judge0-ce.p.rapidapi.com/submissions",
                {
                    language_id: language.id,
                    source_code: code,
                    stdin: "",
                },
                {
                    headers: {
                        "content-type": "application/json",
                        "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
                        "X-RapidAPI-Key": "4bc5a9afa0msh0820c6734b976b4p15151cjsn7c8838f74149", // Replace with your RapidAPI key
                    },
                }
            );

            const token = submissionRes.data.token;

            let result;
            while (true) {
                const res = await axios.get(
                    `https://judge0-ce.p.rapidapi.com/submissions/${token}`,
                    {
                        headers: {
                            "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
                            "X-RapidAPI-Key": "4bc5a9afa0msh0820c6734b976b4p15151cjsn7c8838f74149",
                        },
                    }
                );
                if (res.data.status.id <= 2) {
                    await new Promise((r) => setTimeout(r, 1000));
                } else {
                    result = res.data;
                    break;
                }
            }

            setOutput(result.stdout || result.stderr || "No output.");
        } catch (err) {
            console.error(err);
            setOutput("Error submitting code.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ padding: 20 }}>
            <select className="bg-gray-200 mb-2 p-1.5"
                onChange={(e) => {
                    const lang = languages.find((l) => l.label === e.target.value)!;
                    setLanguage(lang);
                    setCode(lang.default);
                    setOutput(null);
                }}
            >
                {languages.map((l) => (
                    <option key={l.id}>{l.label}</option>
                ))}
            </select>
            
            <div className="w-2xs h-96 md:w-2xl lg:w-4xl">
                <Editor
                    defaultLanguage="javascript"
                    value={code}
                    onChange={(value) => setCode(value || "")}
                    theme="vs-dark"
                />
            </div>

            <Button onClick={runCode} disabled={loading} variant={"destructive"} className="mt-3 ml-0">
                {loading ? "Running..." : "Run Code"}
            </Button>

            {output && (
                <pre style={{ background: "#111", color: "#0f0", padding: "1rem", marginTop: "1rem" }}>
                    {output}
                </pre>
            )}
        </div>
    );
}
