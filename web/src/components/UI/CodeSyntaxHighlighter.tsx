import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CodeSyntaxHighlighterProps {
  code: string;
  darkMode?: boolean;
}

const CodeSyntaxHighlighter: React.FC<CodeSyntaxHighlighterProps> = ({
  code,
}) => {
  const [copied, setCopied] = useState(false);
  const [language, setLanguage] = useState('javascript');

  const handleCopy = async (event: React.MouseEvent) => {
    // Prevent the parent click handler from running
    event.stopPropagation();

    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      setCopied(false);
    }
  };

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setLanguage(event.target.value);
  };

  return (
    <div className="bg-[#2a404d] rounded-md overflow-hidden h-full w-full z-0">
      <div
        onClick={handleCopy}
        className="flex justify-between px-4 pt-2 text-white text-xs items-center content-center"
      >
        <select
          value={language}
          onChange={handleLanguageChange}
          className="bg-[#1f2937] text-white rounded px-2 py-1 cursor-pointer focus:outline-none hover:bg-[#1a2533]"
        >
          <option value="javascript">JavaScript</option>
          <option value="typescript">TypeScript</option>
          <option value="python">Python</option>
          <option value="java">Java</option>
          <option value="c">C</option>
          <option value="cpp">C++</option>
          <option value="html">HTML</option>
          <option value="css">CSS</option>
          <option value="json">JSON</option>
        </select>

        {copied ? (
          <button className="py-1 inline-flex items-center gap-1">
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {' '}
                <path
                  d="M4 12.6111L8.92308 17.5L20 6.5"
                  stroke="#ffffff"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{' '}
              </g>
            </svg>
            Copied!
          </button>
        ) : (
          <button className="py-1 inline-flex items-center gap-1">
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {' '}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M19.5 16.5L19.5 4.5L18.75 3.75H9L8.25 4.5L8.25 7.5L5.25 7.5L4.5 8.25V20.25L5.25 21H15L15.75 20.25V17.25H18.75L19.5 16.5ZM15.75 15.75L15.75 8.25L15 7.5L9.75 7.5V5.25L18 5.25V15.75H15.75ZM6 9L14.25 9L14.25 19.5L6 19.5L6 9Z"
                  fill="#ffffff"
                ></path>{' '}
              </g>
            </svg>
            Copy code
          </button>
        )}
      </div>
      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        lineProps={{
          style: {
            wordBreak: 'break-all',
            whiteSpace: 'pre-wrap',
          },
        }}
        wrapLines
        showLineNumbers
        className="rounded-md overflow-hidden max-h-80 mt-0"
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeSyntaxHighlighter;
