import Link from 'next/link';  // Assuming you're using Link from Next.js
import Image from "next/image";

export default function Layout({ children }) {
    return (
        <div className="flex min-h-screen bg-gray-100 text-gray-900">
            {/* Sidebar */}
            <nav className="min-w-[200px] w-[20%] bg-[#7C9AA0] text-white py-4 px-8 flex flex-col">

                <Image
                    src={'/place2.jpg'} // Dynamically changing image
                    alt="Jenine Kyle"
                    width={250} // Set the width to 300px
                    height={100} // Set the height to 300px
                    objectFit="cover" // Ensures the image covers the square container without distortion
                    className="rounded-full mx-auto" // Ensures the image has rounded corners
                />

                <div className="text-3xl font-extrabold my-6 mx-auto">Jenine Gutierrez</div>
                <ul className="flex flex-col space-y-4 mt-6 content-center">
                    <li>
                        <Link href="/" className="text-md font-medium hover:text-[#234C5D]">ABOUT ME</Link>
                    </li>
                    <li>
                        <Link href="/resume" className="text-md font-medium hover:text-[#234C5D]">RESUME</Link>
                    </li>
                    <li>
                        <Link href="/coverletter" className="text-md font-medium hover:text-[#234C5D]">COVER LETTER</Link>
                    </li>
                    <li>
                        <Link href="/sonographer" className="text-md font-medium hover:text-[#234C5D]">THE SONOGRAPHER</Link>
                    </li>
                    <li>
                        <Link href="/contact" className="text-md font-medium hover:text-[#234C5D]">CONTACT</Link>
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
