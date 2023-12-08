import React from "react";
import Nav from "../ui/Nav";
import Image from "next/image";
import Heading2 from "../ui/Heading2";
function Hero() {
  return (
    <React.Fragment>
      <section className="  fixed  z-[1] lg:top-[100px] top-[80px]  w-full  lg:min-h-[calc(100vh-100px)]  min-h-[calc(90vh-80px)]  ">
        <div className="bg-gradient-to-r  absolute -left-[90%] -top-[30%] sm:-left-[60%] lg:-left-[10%] lg:-top-[20%]  to-[#311996]/[.1] from-[#40A4FF]/[.1] w-[650px] h-[650px] rounded-full"></div>
           <h2 className="lg:text-3xl text-2xl font-medium  pt-4 my-7 text-center">
           Beaver and Beaver Pro
           </h2>

        <div className="px-3 sm:px-6 container h-full lg:flex  items-center gap-x-12 mx-auto lg:px-12">
          <div className="basis-1/2 leading-7">
            <p>
              Introducing Beaver and Beaver Pro, the revolutionary mobile app
              that simplifies your handyman service needs. Book a skilled
              professional to handle your tasks from the comfort of your own
              home, all with just a few taps. Say goodbye to stress and let
              Easeup take care of everything, leaving you free to relax and
              unwind.
            </p>
            <br />

            <p>
              Escape the hustle and bustle of everyday tasks with Easeup, the
              mobile app that simplifies your handyman service needs.
              Effortlessly book a skilled professional to handle your tasks from
              the comfort of your own home, all with just a few taps. Say
              goodbye to stress and let Easeup take care of everything, leaving
              you free to relax and unwind
            </p>
          </div>
          <div className="lg:basis-1/2   w-full h-[400px] relative  ">
            <Image
              src={"/popular-services.png"}
              alt={"ease-up service description image "}
              className="object-contain  left-[50%] -translate-x-[calc(50%+80px)] absolute  w-full h-full"
              width={300}
              height={600}
            />
            <Image
              src={"/man-helmet.png"}
              alt={"ease-up service description image "}
              className="object-contain z-20 left-[50%] -translate-x-[50%] absolute  w-full h-full"
              width={300}
              height={600}
            />
            <Image
              src={"/earnings.png"}
              alt={"ease-up service description image "}
              className="object-contain absolute left-[50%] -translate-x-[calc(50%-80px)]   w-full h-full"
              width={300}
              height={600}
            />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Hero;
