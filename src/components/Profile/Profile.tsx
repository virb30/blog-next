"use client";

import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export default function Profile() {

  const contactAccessed = (contactInfo: string) => {
    console.log(contactInfo);
  }

  return (
    <div className="w-full flex items-center justify-center flex-col p-2">
      <Image src="/images/profile.jpg" width={160} height={160} alt="avatar" className="h-40 w-40 rounded-full mb-8" />
      <h1 className="mb-4 text-3xl font-bold">
        Vinícius Bôscoa
      </h1>
      <span className="block font-thin mb-4 text-lg mt-2 text-center">
        Desenvolvimento Web, Segurança da Informação e Data Science
      </span>
      <div className="flex mt-6">
        <a href="https://www.linkedin.com/in/vinicius-boscoa"
          className="block bg-gray-300 rounded py-2 px-3 text-xl text-gray-800 hover:bg-indigo-700 hover:text-white" onClick={() => contactAccessed('linkedin')}
          id="contact-linkedin">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
        <a href="https://www.github.com/virb30" className="block bg-gray-300 rounded py-2 px-3 text-xl text-gray-800 ml-3 hover:bg-indigo-700 hover:text-white"
          onClick={() => contactAccessed('github')} id="contact-github">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </div>
  )
}
