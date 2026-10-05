import { useEffect, useRef, useState, type FormEvent } from "react";
import { Bot, Send, Sparkles } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { getKnightResponse } from "../lib/knight";

type Message = { role: "user" | "knight"; text: string };
type KnightAssistantProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initialQuestion?: string;
  onInitialQuestionHandled: () => void;
};

const suggestions = ["Who is Sumanth?", "Show projects", "Which technologies are listed?"];

export function KnightAssistant({ open, onOpenChange, initialQuestion, onInitialQuestionHandled }: KnightAssistantProps) {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { role: "knight", text: "K.N.I.G.H.T. online. Ask about information verified in this portfolio." },
  ]);
  const endOfMessages = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endOfMessages.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, open]);

  useEffect(() => {
    if (!open || !initialQuestion) return;
    setMessages((current) => [
      ...current,
      { role: "user", text: initialQuestion },
      { role: "knight", text: getKnightResponse(initialQuestion) },
    ]);
    onInitialQuestionHandled();
  }, [initialQuestion, onInitialQuestionHandled, open]);

  const ask = (question: string) => {
    const trimmed = question.trim();
    if (!trimmed) return;
    setMessages((current) => [
      ...current,
      { role: "user", text: trimmed },
      { role: "knight", text: getKnightResponse(trimmed) },
    ]);
    setInput("");
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    ask(input);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="flex max-h-[min(82dvh,680px)] w-[calc(100%-1.25rem)] max-w-xl flex-col gap-0 overflow-hidden border-cyan-400/20 bg-[#111214] p-0 text-slate-100">
        <DialogHeader className="border-b border-cyan-400/15 px-5 py-4 pr-12 text-left">
          <DialogTitle className="flex items-center gap-2 font-mono text-base tracking-wide text-cyan-200">
            <Bot className="h-5 w-5" aria-hidden="true" /> K.N.I.G.H.T.
          </DialogTitle>
          <DialogDescription className="mt-1 text-xs text-slate-500">
            Kernel-based Neural Intelligence &amp; Graphic Heuristic Tool
          </DialogDescription>
        </DialogHeader>

        <div
          className="min-h-0 flex-1 space-y-4 overflow-y-auto px-4 py-5 sm:px-5"
          aria-live="polite"
          aria-relevant="additions"
          aria-label="Conversation with K.N.I.G.H.T."
        >
          {messages.map((message, index) => (
            <div key={`${message.role}-${index}`} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
              <div className={`max-w-[88%] border px-3.5 py-3 text-sm leading-relaxed ${
                message.role === "user"
                  ? "border-cyan-400/15 bg-cyan-400/10 text-cyan-50"
                  : "border-slate-700/70 bg-slate-900/70 text-slate-300"
              }`}>
                {message.role === "knight" && <span className="mb-1 flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-cyan-400"><Sparkles className="h-3 w-3" aria-hidden="true" /> System response</span>}
                {message.text}
              </div>
            </div>
          ))}
          <div ref={endOfMessages} />
        </div>

        {messages.length === 1 && (
          <div className="flex flex-wrap gap-2 px-4 pb-3 sm:px-5">
            {suggestions.map((suggestion) => (
              <button
                key={suggestion}
                type="button"
                onClick={() => ask(suggestion)}
                className="min-h-9 border border-slate-700 px-2.5 text-left text-xs text-slate-400 transition-colors hover:border-cyan-400/40 hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
              >
                {suggestion}
              </button>
            ))}
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex gap-2 border-t border-cyan-400/15 bg-slate-950/60 p-3 sm:p-4">
          <label className="sr-only" htmlFor="knight-question">Ask K.N.I.G.H.T.</label>
          <input
            id="knight-question"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="Ask about this portfolio..."
            className="min-h-11 min-w-0 flex-1 border border-slate-700 bg-slate-900 px-3 font-mono text-sm text-slate-100 outline-none placeholder:text-slate-600 focus:border-cyan-400/60 focus:ring-1 focus:ring-cyan-400/40"
          />
          <button
            type="submit"
            aria-label="Send question"
            disabled={!input.trim()}
            className="flex min-h-11 min-w-11 items-center justify-center bg-cyan-400 text-slate-950 transition-colors hover:bg-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <Send className="h-4 w-4" aria-hidden="true" />
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
}