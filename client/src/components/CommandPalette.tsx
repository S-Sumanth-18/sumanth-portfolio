import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { BookOpen, Command, Cpu, FileText, Github, Home, Layers3, LifeBuoy, Send, Sparkles, Terminal } from "lucide-react";
import {
  Command as CommandMenu,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./ui/command";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "./ui/dialog";

type CommandPaletteProps = {
  onOpenKnight: (question?: string) => void;
};

const commands = [
  { value: "/about", label: "About", description: "Open the home page", icon: Home, path: "/" },
  { value: "/skills", label: "Skills", description: "Browse listed technologies", icon: Terminal, path: "/skills" },
  { value: "/projects", label: "Projects", description: "Browse verified projects", icon: Layers3, path: "/projects" },
  { value: "/education", label: "Education", description: "Ask K.N.I.G.H.T. about education", icon: BookOpen, question: "education" },
  { value: "/contact", label: "Contact", description: "Open contact information", icon: Send, path: "/contact" },
  { value: "/github", label: "GitHub", description: "Check listed GitHub details", icon: Github, question: "github" },
  { value: "/resume", label: "Resume", description: "Check for a public resume link", icon: FileText, question: "resume" },
  { value: "/knight", label: "K.N.I.G.H.T.", description: "Open the portfolio intelligence system", icon: Cpu, question: "help" },
  { value: "/help", label: "Help", description: "See what K.N.I.G.H.T. can answer", icon: LifeBuoy, question: "help" },
];

export function CommandPalette({ onOpenKnight }: CommandPaletteProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [, setLocation] = useLocation();

  useEffect(() => {
    const handleShortcut = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setIsOpen((open) => !open);
      }
    };
    window.addEventListener("keydown", handleShortcut);
    return () => window.removeEventListener("keydown", handleShortcut);
  }, []);

  const runCommand = (command: (typeof commands)[number]) => {
    setIsOpen(false);
    setQuery("");
    if (command.path) {
      setLocation(command.path);
    } else if (command.question) {
      onOpenKnight(command.question);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label="Open command palette, shortcut Control K or Command K"
        className="fixed right-4 top-16 z-40 flex min-h-12 items-center gap-2 border border-slate-600/70 bg-slate-950/90 px-3 font-mono text-xs text-slate-300 shadow-lg shadow-black/30 backdrop-blur transition-colors hover:border-cyan-400/50 hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 sm:right-6 sm:top-[4.5rem]"
      >
        <Command className="h-4 w-4" aria-hidden="true" />
        <span className="hidden sm:inline">COMMAND</span>
          <kbd className="hidden rounded border border-slate-700 px-1.5 py-0.5 text-[10px] text-slate-500 sm:inline">Ctrl/⌘ K</kbd>
      </button>

      <Dialog open={isOpen} onOpenChange={(open) => { setIsOpen(open); if (!open) setQuery(""); }}>
        <DialogContent className="top-[12vh] max-h-[76dvh] w-[calc(100%-1.25rem)] max-w-xl translate-y-0 overflow-hidden border-cyan-400/20 bg-[#111214] p-0 text-slate-100 shadow-[0_24px_100px_rgba(0,0,0,0.55)]">
          <DialogTitle className="sr-only">Portfolio command palette</DialogTitle>
          <DialogDescription className="sr-only">
            Search commands to navigate portfolio sections or open K.N.I.G.H.T.
          </DialogDescription>
          <CommandMenu shouldFilter={false} className="bg-transparent">
            <div className="flex items-center gap-2 border-b border-cyan-400/15 px-4 text-cyan-400">
              <Sparkles className="h-4 w-4 shrink-0" aria-hidden="true" />
              <CommandInput
                value={query}
                onValueChange={setQuery}
                placeholder="Type a command, e.g. /projects"
                aria-label="Search portfolio commands"
                className="font-mono text-sm placeholder:font-sans placeholder:text-slate-600"
              />
              <kbd className="hidden shrink-0 rounded border border-slate-700 px-1.5 py-1 font-mono text-[10px] text-slate-500 sm:inline">ESC</kbd>
            </div>
            <CommandList className="max-h-[min(56dvh,420px)] p-2">
              <CommandEmpty className="py-8 font-mono text-xs text-slate-500">No matching system commands.</CommandEmpty>
              <CommandGroup heading="NAVIGATION" className="font-mono text-[10px] tracking-wider text-slate-500">
                {commands.filter((command) => `${command.value} ${command.label} ${command.description}`.toLowerCase().includes(query.toLowerCase())).map((command) => {
                  const Icon = command.icon;
                  return (
                    <CommandItem
                      key={command.value}
                      value={command.value}
                      onSelect={() => runCommand(command)}
                      className="min-h-14 cursor-pointer rounded-none border border-transparent px-3 text-slate-200 aria-selected:border-cyan-400/20 aria-selected:bg-cyan-400/10 aria-selected:text-cyan-100"
                    >
                      <Icon className="h-4 w-4 text-cyan-400" aria-hidden="true" />
                      <span className="font-mono text-xs">{command.value}</span>
                      <span className="min-w-0 flex-1 truncate text-right font-sans text-xs text-slate-500">{command.description}</span>
                    </CommandItem>
                  );
                })}
              </CommandGroup>
            </CommandList>
            <div className="flex items-center justify-between border-t border-cyan-400/15 px-4 py-2.5 font-mono text-[10px] text-slate-600">
              <span>PORTFOLIO SYSTEM</span>
              <span>↑↓ SELECT <span className="mx-1 text-slate-700">·</span> ENTER RUN</span>
            </div>
          </CommandMenu>
        </DialogContent>
      </Dialog>
    </>
  );
}