"use client"
import React from "react";
import Image from "next/image";
import { useState } from "react";
function DropDown({question, answer}:{question:string, answer:string}) {
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = ()=>{
        setIsVisible((prev)=>!prev)
    }
  return (
    <React.Fragment>
      <div onClick={toggleVisibility} className={`flex justify-between px-6 mb-2  items-center  cursor-pointer ${isVisible?'shadow-md ': null}  py-2 border-[0.5px] border-foreground `}>
        <p>{question}</p>
        <div className={`relative transsition-all duration-200 ease-in-out shrink-0 w-[15px] h-[15px] ${isVisible ? "rotate-180" : "rotate-0"}`}>
          <Image
            src={"/bxs_up-arrow.png"}
            alt={"arrow indication dropdown state"}
            layout="fill"
          />
        </div>
      </div>
     
      <div className={`${isVisible ? 'h-auto py-6 border-[0.5px] mt-3 opacity-[1] mb-2 ':'h-0 opacity-0'} px-6 bg-background transition-all duration-200  ease-in-out overflow-hidden    leading-7 rounded-md `}>
        <p>
          {answer}
        </p>
      </div>
     
    </React.Fragment>
  );
}

export default DropDown;
