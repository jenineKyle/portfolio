import Link from 'next/link';  // Assuming you're using Link from Next.js

export default function Layout({ children }) {
    return (
        <div className="flex min-h-screen bg-gray-100 text-gray-900">
            {/* Sidebar */}
            <nav className="w-[20%] bg-[#D2B29C] text-white py-4 px-8 flex flex-col">
                <div className="text-3xl font-extrabold my-12">Jenine Gutierrez</div>
                <ul className="flex flex-col space-y-6">
                    <li>
                        <Link href="/" className="text-xl font-medium hover:text-gray-400">About Me</Link>
                    </li>
                    <li>
                        <Link href="/resume" className="text-xl font-medium hover:text-gray-400">Resume and Cover Letter</Link>
                    </li>
                    <li>
                        <Link href="/sonographer" className="text-xl font-medium hover:text-gray-400">The Sonographer</Link>
                    </li>
                    <li>
                        <Link href="/contact" className="text-xl font-medium hover:text-gray-400">Contact</Link>
                    </li>
                </ul>
            </nav>


            {/* Main Content */}
            <main className="w-[80%] flex-grow">
                {children}
            </main>

            {/* Footer */}
        </div>
    );
}
