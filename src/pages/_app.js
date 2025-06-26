import "@/styles/globals.css";
import Link from "next/link";

export default function App({ Component, pageProps }) {
  return (
    <>
    <nav className="bg-white shadow-md fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex space-x-6">
            <Link href="/" className="text-lg font-medium text-gray-700 hover:text-blue-500 transition-colors">
              Home
            </Link>
            <Link href="/contacts" className="text-lg font-medium text-gray-700 hover:text-blue-500 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </nav>
    
    <div className="pt-16 min-h-screen bg-gray-100">
        <Component {...pageProps} />
      </div>

    </>
  );
}
