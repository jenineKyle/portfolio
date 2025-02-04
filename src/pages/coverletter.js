const Resume = () => {
    return (
        <div style={{ margin: '50px' }} className="h-[80%] w-[90%] mx-auto bg-white shadow-2xl rounded-xl border border-gray-200 bg-gradient-to-t from-gray-100 to-white">

            {/* Container for Navigation and Content */}
            <div className="flex">


                {/* Right Content Area */}
                <div className="p-6">


                    <section id="cover-letter" className="mt-8">
                        <h2 className="text-2xl font-semibold text-gray-800">Cover Letter</h2>
                        <div className="mt-2 text-lg text-gray-700">
                            <p>Jenine Kyle Gutierrez</p>
                            <p>jgutierrez18@cnih.ca</p>
                            <p>778-847-9104</p>
                            <p>[Date]</p>
                            <br />
                            <p>Hiring Manager</p>
                            <p>[Healthcare Facility Name]</p>
                            <p>[Healthcare Facility Address]</p>
                            <p>[City, State, Zip Code]</p>
                            <br />
                            <p>Dear Hiring Manager,</p>
                            <p>
                                I am writing to express my interest in applying for the Diagnostic Medical Sonographer position at [Healthcare Facility Name]. I am currently a Diagnostic Medical Sonography student at the Canadian National Institute of Health (CNIH), set to graduate in December 2025. I am deeply passionate about medical imaging and patient care, and I believe my background, skills, and dedication would allow me to make a valuable contribution to your team.
                            </p>
                            <p>
                                My journey in healthcare began with the completion of a Medical Office Assistant certificate in December 2022, followed by a position as a Clerk at an ultrasound clinic. This experience immersed me in the field of diagnostic imaging and fueled my passion for sonography. Through my work, I developed strong technical skills and a profound understanding of patient-centered care, which I believe is essential in the medical imaging field.
                            </p>
                            <p>
                                In addition to my formal education, I have had the privilege of working hands-on with patients and diagnostic equipment. I am committed to ensuring that every patient feels seen, heard, and cared for during their healthcare journey. I am also an active member of Sonography Canada, ARDMS, and OARMS, which keeps me updated with the latest advancements in the field.
                            </p>
                            <p>
                                I am excited to bring my technical expertise, compassionate care, and commitment to making a meaningful difference to your healthcare facility. I am confident that I can help deliver accurate diagnoses and contribute to your high standards of patient care. I would welcome the opportunity to discuss my qualifications further and look forward to the possibility of joining your team.
                            </p>
                            <p>Thank you for considering my application. I look forward to the opportunity to meet with you.</p>
                            <br />
                            <p>Sincerely,</p>
                            <p>Jenine Kyle Gutierrez</p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Resume;
