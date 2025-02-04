import "../src/app/globals.css";

export default function NavBar() {
    return (
        <nav className="w-64 bg-gray-900 text-white py-4 px-8 flex flex-col">
            <div className="text-xl font-bold mb-6">My Portfolio</div>
            <ul className="flex flex-col space-y-4">
                <li>
                    <a href="/" className="hover:text-gray-400">Home</a>
                </li>
                <li>
                    <a href="/about" className="hover:text-gray-400">About Me</a>
                </li>
                <li>
                    <a href="/resume" className="hover:text-gray-400">Resume and Cover Letter</a>
                </li>
                <li>
                    <a href="/sonographer" className="hover:text-gray-400">The Sonographer</a>
                </li>
                <li>
                    <a href="/contact" className="hover:text-gray-400">Contact</a>
                </li>
            </ul>
        </nav>
    );
}
