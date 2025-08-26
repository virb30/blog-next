"use client";

import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Spinner() {
  return (
    <FontAwesomeIcon aria-label="Loading spinner" className="animate-spin h-20 w-20 mr-3 text-3xl text-foreground" icon={faSpinner} />
  )
}