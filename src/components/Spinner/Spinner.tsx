"use client";

import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Spinner() {
    return (
        <FontAwesomeIcon className="animate-spin h-20 w-20 mr-3 text-3xl text-gray-900 dark:text-gray-50" icon={faSpinner} />
    )
}