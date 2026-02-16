import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md bg-white border border-gray-200 shadow-lg rounded-lg p-8">
        <div className="flex items-center gap-3 mb-4">
          {/* We use a simple div/span instead of a Lucide icon to avoid extra imports during debug */}
          <div className="h-8 w-8 rounded-full bg-red-100 flex items-center justify-center">
            <span className="text-red-600 font-bold">!</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-900">404 Page Not Found</h1>
        </div>

        <p className="text-sm text-gray-600 mb-6">
          The page you're looking for doesn't exist. Did you forget to add the route to your app?
        </p>

        <Link href="/">
          <span className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors cursor-pointer">
            Return to Home
          </span>
        </Link>
      </div>
    </div>
  );
}