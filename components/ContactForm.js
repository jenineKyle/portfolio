import { FaEnvelope, FaPhone } from "react-icons/fa";

export default function Contact() {
    return (
        <div className="h-auto flex items-center justify-center bg-gradient-to-br from-blue-50 to-gray-100 p-6 m-20">
            <div className="w-full max-w-md bg-white/80 backdrop-blur-lg p-8 rounded-3xl shadow-lg border border-gray-300">
                <h1 className="text-3xl font-bold text-center text-[#B95C17] mb-6">
                    Contact Information
        </h1>
                <div className="space-y-6">

                    {/* Email Section */}
                    <div className="flex items-center gap-4 p-3 bg-gray-100 rounded-xl hover:bg-gray-200 transition">
                        <FaEnvelope className="text-2xl text-blue-600" />
                        <div>

                            <a
                                href="mailto:jgutierrez18@cnih.ca"
                                className="block text-lg text-blue-600 hover:underline"
                            >
                                jgutierrez18@cnih.ca
              </a>
                        </div>
                    </div>

                    {/* Phone Section */}
                    <div className="flex items-center gap-4 p-3 bg-gray-100 rounded-xl hover:bg-gray-200 transition">
                        <FaPhone className="text-2xl text-blue-600" />
                        <div>

                            <a
                                href="tel:+17788479104"
                                className="block text-lg text-blue-600 hover:underline"
                            >
                                778-847-9104
              </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
