import React from "react";
import { Download } from "lucide-react";
function DownloadApp() {
  return (
    <section className='bg-[url("/download.png")] w-full bg-contain bg-no-repeat   h-[60vh]'>
      <div className="container lg:px-12 mx-auto flex  items-center h-full justify-start">
        <div className="leading-7 lg:w-[30%]">
          <p>
            The EaseUp app is the perfect solution for anyone looking for a
            hassle-free and convenient way to find and book home improvement
            services.
          </p>
          <br/>
          <p>Download the EaseUp app today and experience the difference!</p>
          <br/>
          <button className="flex justify-between px-6 py-2 rounded-full gap-x-2 bg-foreground text-background"><Download strokeWidth={2.75} />Download the app</button>
        </div>
      </div>
    </section>
  );
}

export default DownloadApp;
