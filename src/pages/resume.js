const Resume = () => {
    return (
        <div style={{ margin: '50px' }} className="h-[80%] w-[90%] mx-auto bg-white shadow-2xl rounded-xl border border-gray-200 bg-gradient-to-t from-gray-100 to-white">

            {/* Container for Navigation and Content */}
            <div className="flex">

                {/* Left Navigation Bar */}
                <div className=" w-1/4 bg-gray-50 border-r-2 p-4">
                    <div className="flex flex-col space-y-6 p-6">
                        <a href="#contact" className="text-xl text-blue-600 hover:underline block">Contact</a>
                        <a href="#objective" className="text-xl text-blue-600 hover:underline block">Objective</a>
                        <a href="#education" className="text-xl text-blue-600 hover:underline block">Education</a>
                        <a href="#experience" className="text-xl text-blue-600 hover:underline block">Experience</a>
                        <a href="#skills" className="text-xl text-blue-600 hover:underline block">Skills</a>
                        <a href="#certifications" className="text-xl text-blue-600 hover:underline block">Certifications</a>
                        <a href="#references" className="text-xl text-blue-600 hover:underline block">References</a>
                    </div>
                </div>

                {/* Right Content Area */}
                <div className="w-3/4 p-6">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-gray-800">Jenine Kyle Gutierrez</h1>
                        <p className="text-xl text-gray-600 mt-2">Diagnostic Medical Sonography Student</p>
                    </div>

                    <section id="contact" className="mt-8">
                        <h2 className="text-2xl font-semibold text-gray-800">Contact Information</h2>
                        <div className="mt-2">
                            <p className="text-lg text-gray-700">Email: <a href="mailto:jgutierrez18@cnih.ca" className="text-blue-600">jgutierrez18@cnih.ca</a></p>
                            <p className="text-lg text-gray-700">Phone: <a href="tel:7788479104" className="text-blue-600">778-847-9104</a></p>
                        </div>
                    </section>

                    <section id="objective" className="mt-8">
                        <h2 className="text-2xl font-semibold text-gray-800">Objective</h2>
                        <p className="mt-2 text-lg text-gray-700">
                            A dedicated and compassionate Diagnostic Medical Sonography student at the Canadian National Institute of Health (CNIH), seeking a position where I can utilize my expertise in medical imaging and patient care to contribute to the healthcare industry. Passionate about early detection, diagnosis, and delivering high-quality patient-centered care.
                        </p>
                    </section>

                    <section id="education" className="mt-8">
                        <h2 className="text-2xl font-semibold text-gray-800">Education</h2>
                        <div className="mt-2">
                            <h3 className="text-xl font-semibold text-gray-700">Canadian National Institute of Health (CNIH)</h3>
                            <p className="text-lg text-gray-700">Diagnostic Medical Sonography (Expected Graduation: December 2025)</p>
                            <ul className="mt-2 text-lg text-gray-700 list-disc pl-6">
                                <li>12 months of theory and scan lab training, followed by an 8-month practicum rotation.</li>
                                <li>In good standing with CNIH.</li>
                                <li>Student member of Sonography Canada, ARDMS, and OARMS.</li>
                            </ul>
                        </div>
                    </section>

                    <section id="experience" className="mt-8">
                        <h2 className="text-2xl font-semibold text-gray-800">Experience</h2>
                        <div className="mt-2">
                            <h3 className="text-xl font-semibold text-gray-700">Clerk, Ultrasound Clinic</h3>
                            <p className="text-lg text-gray-700">December 2022 – Present</p>
                            <ul className="mt-2 text-lg text-gray-700 list-disc pl-6">
                                <li>Gained hands-on experience with patient interactions and clinic workflows.</li>
                                <li>Assisted in diagnostic imaging procedures, contributing to the accurate detection and diagnosis of medical conditions.</li>
                                <li>Developed strong communication skills, ensuring that patients felt cared for and understood.</li>
                                <li>Worked alongside sonographers to support efficient clinic operations and optimal patient care.</li>
                            </ul>
                        </div>
                    </section>

                    <section id="skills" className="mt-8">
                        <h2 className="text-2xl font-semibold text-gray-800">Skills</h2>
                        <ul className="mt-2 text-lg text-gray-700 list-disc pl-6">
                            <li>Diagnostic Imaging: Proficient in sonographic techniques for imaging and diagnosis.</li>
                            <li>Medical Office Operations: Experience with scheduling, patient intake, and maintaining office organization.</li>
                            <li>Patient Care: Skilled in providing compassionate, patient-centered care.</li>
                            <li>Technical Proficiency: Strong foundation in sonographic equipment and software.</li>
                            <li>Professional Development: Active member of Sonography Canada, ARDMS, and OARMS.</li>
                        </ul>
                    </section>

                    <section id="certifications" className="mt-8">
                        <h2 className="text-2xl font-semibold text-gray-800">Certifications</h2>
                        <ul className="mt-2 text-lg text-gray-700 list-disc pl-6">
                            <li>Medical Office Assistant Certification – CNIH, December 2022</li>
                            <li>Sonography Canada Membership</li>
                            <li>ARDMS Membership</li>
                            <li>OARMS Membership</li>
                        </ul>
                    </section>

                    <section id="references" className="mt-8">
                        <h2 className="text-2xl font-semibold text-gray-800">References</h2>
                        <p className="mt-2 text-lg text-gray-700">Available upon request.</p>
                    </section>

                </div>
            </div>
        </div>
    );
};

export default Resume;
