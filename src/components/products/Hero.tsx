import React from "react";
import Nav from "../ui/Nav";
import Image from "next/image";
function Hero() {
  return (
    <React.Fragment>
      <Nav />
      <section className="fixed  -z-10 top-[100px] left-0 w-full  min-h-[calc(100vh-100px)] ">
        <div className="w-full h-full relative ">
          <div className="bg-gradient-to-r absolute -left-[10%] -top-[20%]  to-[#311996]/[.1] from-[#40A4FF]/[.1] w-[650px] h-[650px] rounded-full"></div>
          <div className="absolute  w-full h-full top-0 left-0">
            <h2 className="lg:text-3xl my-7 text-center ">
              Beaver and Beaver Pro
            </h2>
            <div className="container lg:flex items-center gap-x-12 mx-auto lg:px-12">
              <div className="basis-1/2 leading-7">
                <p>
                  Introducing Beaver and Beaver Pro, the revolutionary mobile
                  app that simplifies your handyman service needs. Book a
                  skilled professional to handle your tasks from the comfort of
                  your own home, all with just a few taps. Say goodbye to stress
                  and let Easeup take care of everything, leaving you free to
                  relax and unwind.
                </p>
                <br/>
                
                <p>
                  Escape the hustle and bustle of everyday tasks with Easeup,
                  the mobile app that simplifies your handyman service needs.
                  Effortlessly book a skilled professional to handle your tasks
                  from the comfort of your own home, all with just a few taps.
                  Say goodbye to stress and let Easeup take care of everything,
                  leaving you free to relax and unwind
                </p>
              </div>
              <div className="basis-1/2 relative flex ">
              
               <Image
                src={"/rectangle-2.png"}
                alt={"ease-up service description image "}
                className="object-contain -right-[160px] absolute  w-full h-full"
                width={200}
                height={400}
                />
                  <Image
                src={"/rectangle.png"}
                alt={"ease-up service description image "}
                className="object-contain z-20 w-full h-full"
                width={200}
                height={400}
                />
                  <Image
                src={"/rectangle-3.png"}
                alt={"ease-up service description image "}
                className="object-contain absolute right-[160px]  w-full h-full"
                width={200}
                height={400}
                />
              
              
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Hero;
