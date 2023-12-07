import React from "react";
import { Download } from "lucide-react";
import Image from "next/image";
function DownloadApp() {
  return (
    <section className=' w-full bg-contain bg-no-repeat relative  min-h-[60vh]'>
      <div className="relative hidden sm:block w-full min-h-[60vh] h-full">
     <Image
     src="/download.png"
     layout="fill"
     className="object-cover"
     alt="Two happy clients on bench"
     />
      </div>
      <div className="relative  sm:hidden w-full min-h-[70vh] h-full">
     <Image
     src="/man-laptop.png"
     layout="fill"
     className="object-cover"
     alt="Tman using laptop smartphone while couch home "
     />
      </div>
      <div className=" absolute top-0 left-0 z-20 px-3 sm:px-6 lg:px-12 mx-auto flex  items-start sm:items-center h-full  py-6 justify-start">
        <div className="leading-4 sm:leading-7 text-[12px] sm:text-[16px] inline-block ml-auto sm:ml-0  text-background sm:text-foreground mt-[40px] sm:mt-0 w-[60%] sm:w-[50%]  ">
          <p>
            The EaseUp app is the perfect solution for anyone looking for a
            hassle-free and convenient way to find and book home improvement
            services.
          </p>
          <br/>
          <p>Download the EaseUp app today and experience the difference!</p>
          <br/>
          <button className="flex w-full sm:w-fit  items-center text-[13px] sm:text-base bg-background mx-auto sm:ml-0 justify-center px-6 py-[12px] rounded-full gap-x-1 sm:gap-x-2 sm:bg-foreground text-foreground sm:text-background"><Download strokeWidth={2.75} />Download the app</button>
        </div>
      </div>
    </section>
  );
}

export default DownloadApp;
