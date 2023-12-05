
import Image from "next/image";




function ProductDescription() {
    return (
        <section
   
        className="w-full mt-[100vh] flex items-center text-background justify-center   z-0 h-[70vh] relative    bg-background"
      >
        <div className="bg-gradient-to-r to-[#000000] via-[#BBCCCB] from-[#D9EDEB] h-full w-full"></div>
        <div className="flex absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%] container mx-auto gap-x-12 items-center justify-center h-[80%]">
          <div className="basis-1/2 h-full flex justify-between">

              <Image
                width="200"
                height="400"
                src="/earning.png"
                className="object-contain"
                alt="sharing transaction payments"
              />
               <Image
                width="300"
                height="400"
                src="/aiscreen.png"
                className="object-contain"
                alt="sharing transaction payments"
              />
               <Image
                width="200"
                height="400"
                src="/schedulescreen.png"
                className="object-contain"
                alt="sharing transaction payments"
              />
           
          </div>
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
        </div>
      </section>
    )
}

export default ProductDescription
