import React from "react";
import { Download } from "lucide-react";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/Button";
import Paragraph from "../ui/Paragraph";
import Link from "next/link";

function DownloadApp() {
  return (
    <section className=" w-full z-10  bg-inherit bg-contain bg-no-repeat relative  min-h-[60vh]">
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
          <Paragraph>
            The EaseUp app is the perfect solution for anyone looking for a
            hassle-free and convenient way to find and book home improvement
            services.
          </Paragraph>
          <br />
          <Paragraph delay={0.2}>
            Download the EaseUp app today and experience the difference!
          </Paragraph>
          <br />
          <DropdownMenu>
            <DropdownMenuTrigger className="outline-none">
              <Button
                size={"lg"}
                className="flex  outline-none items-center gap-x-2 "
              >
                <Download strokeWidth={2.75} />
                <span> Download app</span>
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-52 ">
              <DropdownMenuLabel>Choose a Product</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer">
                <Link className="w-full block  py-1" target="blank" href="https://play.google.com/store/apps/details?id=com.io.easeup">
                  Beaver
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <Link className="w-full block py-1" target="blank" href="https://play.google.com/store/apps/details?id=com.easeup.worker">
                  Beaver Pro
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </section>
  );
}

export default DownloadApp;
