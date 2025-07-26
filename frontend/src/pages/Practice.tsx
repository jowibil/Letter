import { useState, useEffect } from "react";
import { Editor } from "@monaco-editor/react";
import axios from "axios";
import PageHeader from "@/layouts/PageHeader";

// Encode string to Base64
const toBase64 = (str) => {
  return btoa(unescape(encodeURIComponent(str)));
};

// Decode Base64 using modern API
const fromBase64 = (str) => {
  try {
    return new TextDecoder().decode(Uint8Array.from(atob(str), c => c.charCodeAt(0)));
  } catch (err) {
    return "Error decoding output.";
  }
};

const languages = [
  {
    id: 93,
    name: "JavaScript",
    monaco: "javascript",
    boilerplate: `console.log("Hello, world!");`,
  },
  {
    id: 54,
    name: "C++",
    monaco: "cpp",
    boilerplate: `#include <iostream>

int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}`,
  },
  {
    id: 71,
    name: "Python",
    monaco: "python",
    boilerplate: `name = input("Enter your name: ")
print("Hello,", name)`,
  },
];

function CodeRunner() {
  const [languageId, setLanguageId] = useState(93); // ✅ JavaScript is now default
  const [code, setCode] = useState(
    languages.find((lang) => lang.id === 93).boilerplate
  );
  const [userInput, setUserInput] = useState(""); // ✅ New state for user input
  const [output, setOutput] = useState("");
  const [isRunning, setIsRunning] = useState(false);

  const selectedLanguage = languages.find((lang) => lang.id === languageId);

  useEffect(() => {
    setCode(selectedLanguage.boilerplate);
    setUserInput("");
  }, [languageId]);

  const runCode = async () => {
    setIsRunning(true);
    setOutput("Running...");
    console.log("Submitting code with language ID:", languageId);

    const options = {
      method: "POST",
      url: "https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=true&wait=true",
      headers: {
        "content-type": "application/json",
        "x-RapidAPI-Key": "0423400e1fmsh061e4e115b60ef3p1afde2jsn828442d438fa", // Replace with your key
        "x-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
      },
      data: {
        language_id: languageId,
        source_code: toBase64(code),
        stdin: toBase64(userInput),
      },
    };

    try {
      const response = await axios.request(options);

      const encodedResult =
        response.data.stdout ||
        response.data.stderr ||
        response.data.compile_output ||
        "";

      const result = encodedResult
        ? fromBase64(encodedResult)
        : "No output returned.";

      setOutput(result);
    } catch (error) {
      if (error.response?.status === 429) {
        setOutput("Error 429: Too Many Requests. Please try again later.");
      } else if (error.response?.status === 401) {
        setOutput("Error 401: Unauthorized. Check your RapidAPI key.");
      } else if (error.response?.data?.message) {
        setOutput("Error: " + error.response.data.message);
      } else {
        setOutput("Error: " + (error.message || "Unknown error occurred"));
      }
    } finally {
      setIsRunning(false);
    }
  };

  return (
    <div className="max-h-screen max-w-full">
      <PageHeader />

      <div style={{ padding: "1rem", fontFamily: "Arial" }}>
        <h1>Practice</h1>

        <label>
          Language: &nbsp;
          <select
            onChange={(e) => setLanguageId(Number(e.target.value))}
            value={languageId}
          >
            {languages.map((lang) => (
              <option key={lang.id} value={lang.id}>
                {lang.name}
              </option>
            ))}
          </select>
        </label>

        <Editor
          height="300px"
          defaultLanguage={selectedLanguage.monaco}
          language={selectedLanguage.monaco}
          value={code}
          onChange={(value) => setCode(value || "")}
          theme="vs-dark"
          options={{ fontSize: 14 }}
        />

        {/* ✅ User input box for stdin */}


        <button
          onClick={runCode}
          disabled={isRunning}
          style={{
            marginTop: "10px",
            padding: "8px 16px",
            fontSize: "16px",
            backgroundColor: "black",
            color: "white",
            cursor: isRunning ? "not-allowed" : "pointer",
          }}
        >
          {isRunning ? "Running..." : "Run"}
        </button>

        <pre
          style={{
            background: "#f0f0f0",
            padding: "1rem",
            marginTop: "1rem",
            whiteSpace: "pre-wrap",
          }}
        >
          {output}
        </pre>
      </div>
    </div>
  );
}

export default CodeRunner;