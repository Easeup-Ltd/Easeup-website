import Image from "next/image";
import Button from "../ui/Button";
import React from "react";
import Nav from "../ui/Nav";

function HeroSection() {
  return (
    <React.Fragment>
       <Nav/>
    <section id="home" className="fixed -z-10 top-[100px] left-0 w-full h-[calc(100vh-100px)]   ">
     
      <div className="h-[calc(100vh-100px)]  w-full">

   
      <div className="h-full  relative ">
        <div className="w-full h-full flex ">
          <div className=" basis-1/2 relative">
            <Image
              className="basis-1/2"
              src={"/electrician.png"}
              layout="fill"
              alt="image of an electrician"
            />
          </div>
          <div className=" basis-1/2 relative">
            <Image
              className="basis-1/2"
              src={"/client.png"}
              layout="fill"
              alt="image of an electrician"
            />
          </div>
        </div>
        <div className="bg-foreground/[0.25]  text-background flex items-center justify-center    absolute left-0 top-0 w-full h-full">
          <div className="container mx-auto gap-y-6 lg:px-[200px] flex-col flex items-center justify-center ">
            <h1 className="text-center lg:text-4xl leading-[54px] font-semibold">
              Connecting You with Skilled Handymen for All Your Home Improvement
              Needs
            </h1>
            <p className="text-center lg:text-lg leading-[24px] font-medium">
              EaseUp is a dynamic service provider offering a range of home
              improvement solutions, including plumbing, electrical work,
              tiling, painting, carpentry, and more.
            </p>
            <p className="text-center lg:text-lg leading-[24px] font-medium">
              Our primary mission is to streamline the process of connecting
              clients with skilled handymen, making life easier for customers
              while simultaneously creating job opportunities for talented
              tradespeople.
            </p>
            <div>
            <Button name={"Contact Us"}/>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
    </React.Fragment>
  );
}

export default HeroSection;
