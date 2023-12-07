"use client"
import Link from "next/link"
import { links } from "@/contents/nav"

type display = {
    display: boolean
}
function Sidebar({display}:display) {
    return (
   

 
        <div className={`${display ? "w-[80%] max-w-[300px] opacity-[1]" : "w-0 max-w-0 opacity-0"} lg:hidden overflow-x-hidden fixed z-50 bg-[#fff] lg:top-[100px] top-[80px]   transition-all ease-in   h-[calc(100vh-80px)] `}>
             <ul className="flex flex-col   gap-y-7  w-full p-7">
            {links.map((link, id) => (
              <li key={id}>
                <Link className="text-lg  leading-7 font-medium" href={link.to}>
                  {link.name}
                </Link>
              </li>
            ))}
             </ul>

       
        </div>
    )
}

export default Sidebar
