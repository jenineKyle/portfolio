
import "../src/app/globals.css"
export default function NavBar() {
    return (<nav className="w-full bg-gray-900 text-white py-4 px-8 flex justify-between items-center">
        <div className="text-xl font-bold">My Portfolio</div>
        <ul className="flex space-x-6">
            <li>
                <a href="/" className="hover:text-gray-400">Home</a>
            </li>
            <li>
                <a href="/about" className="hover:text-gray-400">About Me</a>
            </li>
            <li>
                <a href="/projects" className="hover:text-gray-400">Projects</a>
            </li>
            <li>
                <a href="/contact" className="hover:text-gray-400">Contact</a>
            </li>
        </ul>
    </nav>)
}