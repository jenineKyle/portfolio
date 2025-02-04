"use client"; // This is necessary for hooks like useEffect to work in this file

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "/place1.jpg",
    "/place2.jpg",
    "/place3.jpg",
    "/place4.jpg",
    "/place5.jpg",
    "/place6.jpg",
    "/place7.jpg",
    "/place8.jpg",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 2 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [images.length]);

  return (
    <div
      className="w-[100%] flex min-h-screen bg-[#F9F9F9]"
    // style={{
    //   backgroundImage: `url(/place6.jpg)`, // Dynamically changing background image
    // }}
    >
      {/* Main Content */}
      <div className="flex-grow p-8 sm:p-20 gap-16">
        <h1 className="text-4xl font-bold my-10">About Me</h1>
        <div className="my-10 mx-auto w-[400px] h-auto overflow-hidden">
          <div className="flex flex-wrap justify-between">
            {images.map((item, i) => (
              <div key={i} className="w-1/4 p-2">
                <Image
                  src={item} // Dynamically changing image
                  alt="Jenine Kyle"
                  width={250} // Set the width to 250px
                  height={250} // Set the height to 250px
                  objectFit="cover" // This ensures the image will cover the div area without distortion
                />
              </div>
            ))}
          </div>
        </div>


        <p className="text-lg text-gray-600">
          Hi, I’m Jenine Gutierrez, a dedicated Diagnostic Medical Sonography student at the Canadian National Institute of Health (CNIH), on track to graduate in December 2025.
          <br /><br />
          From an early age, I was drawn to the healthcare field, inspired by the impact that compassionate, skilled professionals can have on people’s lives. My journey began with earning a Medical Office Assistant certificate in December 2022, equipping me with essential knowledge of medical office operations and patient care. Working as a Clerk at an ultrasound clinic, I became immersed in the world of diagnostic imaging, gaining hands-on experience with patient interactions, clinic workflows, and the vital role sonographers play in early detection and diagnosis.
          <br /><br />
          This experience solidified my passion for medical imaging and patient-centered care. Sonography is more than just a profession to me—it’s a way to combine my love for science, technology, and human connection. Every scan tells a story, and I am committed to ensuring that each patient feels seen, heard, and cared for during their healthcare journey.
          <br /><br />
          My sonography program consists of 12 months of theory and scan lab training, followed by an 8-month practicum rotation, where I will refine my technical skills and bedside manner in a clinical setting. I am in good standing with CNIH and a proud student member of Sonography Canada, ARDMS, and OARMS, staying engaged with the latest advancements in the field.
          <br /><br />
          With a strong foundation in both technical expertise and compassionate care, I am excited to contribute to the healthcare industry, helping to provide accurate diagnoses and make a meaningful difference in patients' lives.
        </p>
      </div>

      {/* Footer (if needed) */}
      {/* <footer className="w-full bg-gray-900 text-white py-4 text-center">
        © {new Date().getFullYear()} My Portfolio. All Rights Reserved.
      </footer> */}
    </div>
  );
}
