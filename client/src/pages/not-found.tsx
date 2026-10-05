import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-zinc-950 p-4">
      <div className="w-full max-w-md bg-zinc-900 border border-zinc-700 shadow-lg rounded-lg p-8">
        <div className="flex items-center gap-3 mb-4">
          {/* We use a simple div/span instead of a Lucide icon to avoid extra imports during debug */}
          <div className="h-8 w-8 rounded-full bg-zinc-800 flex items-center justify-center">
            <span className="text-zinc-300 font-bold">!</span>
          </div>
          <h1 className="text-2xl font-bold text-zinc-100">404 Page Not Found</h1>
        </div>

        <p className="text-sm text-zinc-400 mb-6">
          The page you're looking for doesn't exist. Did you forget to add the route to your app?
        </p>

        <Link href="/">
          <span className="inline-block px-4 py-2 bg-zinc-300 text-zinc-950 rounded hover:bg-zinc-200 transition-colors cursor-pointer">
            Return to Home
          </span>
        </Link>
      </div>
    </div>
  );
}