import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content */}
      <div className="flex flex-row flex-grow items-center justify-center p-8 sm:p-20 gap-16">
        {/* Left Side - Image */}
        <div className="flex-shrink-0">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
        </div>

        {/* Right Side - Text & Buttons */}
        <div className="flex flex-col gap-6 max-w-md">
          <h1 className="text-3xl font-bold">Welcome to My Portfolio</h1>
          <p className="text-gray-600">
            Get started by exploring my projects and learning more about my journey.
          </p>
          <div className="flex gap-4">
            <a
              className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-500 transition"
              href="/about"
            >
              About Me
            </a>
            <a
              className="border border-gray-400 px-5 py-2 rounded-md hover:bg-gray-100 transition"
              href="/contact"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      {/* <footer className="w-full bg-gray-900 text-white py-4 text-center">
        © {new Date().getFullYear()} My Portfolio. All Rights Reserved.
      </footer> */}
    </div>
  );
}
