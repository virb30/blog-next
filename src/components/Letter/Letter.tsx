"use client";

import { useCallback, useState } from "react";
import LetterFold from "./LetterFold";
import LetterFold2 from "./LetterFold2";
import LetterFold3 from "./LetterFold3";

type LetterProps = {
    title: string,
    surname: string,
    gender: "F" | "M",
}

export default function Letter({title, surname, gender}: LetterProps) {
    const [unfolded, setUnfolded] = useState(false);
    const [fold2Unfolded, setFold2Unfolded] = useState(false);
    const [fold3Unfolded, setFold3Unfolded] = useState(false);
    const [flipped, setFlipped] = useState(false);
    const [animationDirection, setAnimationDirection] = useState<"forward" | "reverse">("forward");

    const handleUnfold = useCallback(() => {
        if (unfolded === false) {
          setUnfolded(true);
          setFold2Unfolded(true);
          setTimeout(() => {
            setFold3Unfolded(true)
          }, 500);
        } else if (flipped === false) {
          setFold3Unfolded(false);
          setTimeout(() => {
            setFold2Unfolded(false);
            setUnfolded(false);
          }, 500);
        }
      }, [unfolded, flipped]);
      
      const handleFlip = useCallback(() => {
        if (fold3Unfolded === true) {
          setTimeout(() => {
            setFlipped(!flipped);
            setAnimationDirection(animationDirection === "forward" ? "reverse" : "forward");
            setTimeout(() => {
              setFold3Unfolded(true);
            }, 500)
          });
        }
      }, [fold3Unfolded, flipped, animationDirection]);


    return (
      <div className="letter__container">
        <div className={`letter forward ${unfolded? "unfolded": ""} ${flipped? 'flipped': ""}` }>
          <div className="fold fold1" onClick={handleUnfold}>
            <LetterFold />
          </div>
          <div className={`fold fold2 ${!fold2Unfolded ? "folded" : ""}`}>
            <LetterFold2 title={title} surname={surname} gender={gender} />
          </div>
          <div className={`sharp-fold fold fold3 ${!fold3Unfolded ? "folded" : ""}`} onClick={handleFlip}>
            <LetterFold3 />
          </div>
        </div>
      </div>
    )
}
