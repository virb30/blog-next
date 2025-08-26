"use client";

import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useCallback } from "react";
import { sendGTMEvent } from "@next/third-parties/google";
import { useSession } from "@/providers/SessionContext";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Profile() {

  const { sessionId } = useSession();

  const contactAccessed = useCallback((contactInfo: string) => {
    sendGTMEvent({
      event: 'contact',
      value: {
        type: contactInfo,
        sessionId
      }
    })
  }, [sessionId]);

  return (
    <div className="w-full flex items-center justify-center flex-col p-2">
      <Image src="/images/profile.jpg" width={160} height={160} alt="avatar" className="h-40 w-40 rounded-full mb-8" />
      <h1 className="mb-4 text-3xl font-bold">
        Vinícius Bôscoa
      </h1>
      <span className="block font-light italic mb-4 text-lg mt-2 text-center">
        Desenvolvimento Web, Segurança da Informação e Data Science
      </span>
      <div className="flex mt-6 gap-3">
        <Button asChild variant="secondary" size="icon">
          <Link 
            href="https://www.linkedin.com/in/vinicius-boscoa"
            onClick={() => contactAccessed('linkedin')}
            id="contact-linkedin"
            aria-label="Linkedin profile"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </Link>
        </Button>
        <Button asChild variant="secondary" size="icon">
          <Link 
            href="https://www.github.com/virb30"
            onClick={() => contactAccessed('github')}
            id="contact-github"
            aria-label="Github profile"
          >
            <FontAwesomeIcon icon={faGithub} />
          </Link>
        </Button>
      </div>
    </div>
  )
}
