
import "../src/app/globals.css"


export default function Layout({ children }) {
    return (
        <div className="flex flex-col min-h-screen bg-gray-100 text-gray-900">
            {/* Navbar */}
            <nav className="w-full bg-gray-900 text-white py-4 px-8 flex justify-between items-center">
                <div className="text-xl font-bold">My Portfolio</div>
                <ul className="flex space-x-6">
                    <li>
                        <a href="/" className="hover:text-gray-400">About Me</a>
                    </li>
                    <li>
                        <a href="/about" className="hover:text-gray-400">Resume and Cover Letter</a>
                    </li>
                    <li>
                        <a href="/projects" className="hover:text-gray-400">Projects</a>
                    </li>
                    <li>
                        <a href="/contact" className="hover:text-gray-400">Contact</a>
                    </li>
                </ul>
            </nav>
            {/* Main Content */}
            <main className="flex-grow flex flex-col items-center justify-center p-8 sm:p-20">
                {children}
            </main>

            {/* Footer */}
            <footer className="w-full bg-gray-900 text-white py-4 text-center">
                © {new Date().getFullYear()} My Portfolio. All Rights Reserved.
      </footer>
        </div>
    );
}
