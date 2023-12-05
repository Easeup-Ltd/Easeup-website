import Image from "next/image";

function OurAppsSection() {
  return (
    <section
      id="our-app"
      className="w-full flex items-center text-background justify-center   z-0 h-[70vh] relative    bg-background"
    >
      <div className="bg-gradient-to-r from-[#000000] via-[#BBCCCB] to-[#D9EDEB] h-full w-full"></div>
      <div className="flex absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%] container mx-auto gap-x-12 items-center justify-center h-[100%]">
        <div className="font-medium basis-1/2 flex flex-col justify-center gap-y-6">
          <h2 className="lg:text-3xl">Our apps</h2>
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
        <div className="basis-1/2 relative flex flex-start  h-full">
           
              <Image
             src="/ourApp2.png"
              width={300}
              height={400}
              className="object-contain w-full z-10 h-full"
             alt={"craftsmen smilling 2"}
             />
               <Image
             src="/ourApp1.png"
              width={300}
              height={400}
              className="absolute left-[100px]  top-0 h-full object-contain  w-full"
             alt={"craftsmen smilling 1"}
             />
        
        </div>
      </div>
    </section>
  );
}

export default OurAppsSection;
