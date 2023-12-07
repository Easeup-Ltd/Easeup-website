import Image from "next/image";

function OurAppsSection() {
  return (
    <section
      id="our-app"
      className="bg-gradient-to-b overflow-x-hidden lg:bg-gradient-to-r   text-background from-[#000000] via-[#BBCCCB] to-[#D9EDEB]   w-full  px-3  sm:px-6 lg:px-12   flex items-center  justify-center   z-10   min-h-[70vh] relative "
    >

<div className="lg:flex py-12 lg:py-0 container mx-auto gap-x-12 items-center justify-center min-h-[70vh] ">
        <div className="text-center lg:text-left  basis-1/2 flex flex-col justify-center gap-y-6">
        <h2 className="lg:text-3xl text-2xl  font-medium ">Our apps</h2>
          <p className="leading-6">
            <span className="block"> Mobile App Platform:</span>
            At the heart of EaseUps operations is our innovative mobile app,
            providing a seamless platform for handymen and clients to connect
            effortlessly.
          </p>
          <p className="leading-6">
            The app serves as a virtual marketplace, facilitating the exchange
            of services with efficiency and convenience.
          </p>
        </div>
        <div className="basis-1/2 flex items-center justify-center relative h-[400px]  ">
   



          <Image
             src="/ourApp2.png"
              width={300}
              height={400}
              className=" absolute lg:block hidden left-[50%] -translate-x-[calc(50%+50px)]  object-contain w-full z-10 h-full"
             alt={"craftsmen smilling 2"}
             />
             
               <Image
             src="/ourApp1.png"
              width={300}
              height={400}
              className="absolute left-[50%] lg:block hidden -translate-x-[calc(50%-50px)] top-0 h-full object-contain  w-full"
             alt={"craftsmen smilling 1"}
             />
                <Image
             src="/man-helmet.png"
              width={300}
              height={400}
              className=" absolute lg:hidden block left-[50%] -translate-x-[calc(50%+50px)]  object-contain w-full z-10 h-full"
             alt={"craftsmen smilling 2"}
             />
             
               <Image
             src="/popular-services.png"
              width={300}
              height={400}
              className="absolute left-[50%] lg:hidden block -translate-x-[calc(50%-50px)] top-0 h-full object-contain  w-full"
             alt={"craftsmen smilling 1"}
             />
          
        
        </div>
      </div>
    </section>
  );
}

export default OurAppsSection;
