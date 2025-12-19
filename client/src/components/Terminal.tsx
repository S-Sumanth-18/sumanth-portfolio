import { useState, useEffect } from "react";
import { Copy, Check } from "lucide-react";
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';

SyntaxHighlighter.registerLanguage('javascript', js);

const codeSnippet = `// 0/1 Knapsack Problem - Dynamic Programming
function knapSack(capacity, weights, values, n) {
    // Initialize DP table
    let i, w;
    let K = new Array(n + 1);
    
    for (i = 0; i <= n; i++) {
        K[i] = new Array(capacity + 1);
        for (w = 0; w <= capacity; w++) {
            if (i === 0 || w === 0)
                K[i][w] = 0;
            else if (weights[i - 1] <= w)
                K[i][w] = Math.max(
                    values[i - 1] + K[i - 1][w - weights[i - 1]],
                    K[i - 1][w]
                );
            else
                K[i][w] = K[i - 1][w];
        }
    }
    
    // Optimal value
    return K[n][capacity];
}`;

export function CodeTerminal() {
  const [copied, setCopied] = useState(false);
  const [typedCode, setTypedCode] = useState("");
  
  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      if (i < codeSnippet.length) {
        setTypedCode(codeSnippet.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typing);
      }
    }, 10); // Typing speed
    
    return () => clearInterval(typing);
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-2xl mx-auto rounded-lg overflow-hidden border border-slate-800 shadow-2xl bg-[#011627] font-mono text-sm my-12">
      <div className="flex items-center justify-between px-4 py-2 bg-[#011627] border-b border-slate-800">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <div className="text-slate-500 text-xs">algo_visualizer.js</div>
        <button 
          onClick={copyToClipboard}
          className="text-slate-500 hover:text-white transition-colors"
        >
          {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
        </button>
      </div>
      <div className="p-4 overflow-x-auto max-h-[400px]">
        <SyntaxHighlighter 
          language="javascript" 
          style={nightOwl}
          customStyle={{ background: 'transparent', padding: 0 }}
          showLineNumbers
          lineNumberStyle={{ color: '#4b5563', minWidth: '2em', paddingRight: '1em' }}
        >
          {typedCode}
        </SyntaxHighlighter>
        <div className="animate-pulse inline-block w-2 h-4 bg-cyan-500 ml-1 align-middle" />
      </div>
    </div>
  );
}
