import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";
function Footer() {
  //Please do not mind this section id be optimising
  return (
    <footer className="relative h-[30vh]  w-full text-background bg-foreground pt-10">
      <div className="container mx-auto h-full px-12 flex justify-between items-start">
        <div>
          <div className="relative w-[120px] mb-3 h-[34px] ">
            <Image
              layout="fill"
              className=""
              src={"/logo.png"}
              alt="Easp up logo"
            />
          </div>
          <ul className="text-[13px] flex flex-col gap-y-3 w-full">
            <li>Experience Effortless Task Completion with EaseUp</li>
            <li>Embrace the Power of Simplicity!</li>
          </ul>
        </div>
        <div>
          <h2 className="font-medium  mb-3 lg:text-lg">Resources</h2>
          <ul className=" text-[13px] flex flex-col gap-y-3 w-full">
            <li>Help</li>
            <li>Live support</li>
          </ul>
        </div>
        <div>
          <h2 className="font-medium mb-3 lg:text-lg">Company</h2>
          <ul className="text-[13px] flex flex-col gap-y-3 w-full">
            <li>About Us</li>
            <li>Terms and conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <h2 className="font-medium mb-3 lg:text-lg ">Location</h2>
          <ul className="text-[13px] flex flex-col gap-y-3 w-full">
            <li className="flex items-center gap-x-2">
              <MapPin />
              Accra, Ghana
            </li>
            <li className="flex items-center gap-x-2">
              <Phone />
              26 453 5539
            </li>
            <li className="flex items-center gap-x-2">
              <Mail />
              support@easeupgh.tech
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-[#121212] flex items-center justify-center w-full h-[40px] absolute bottom-0">
        <p className="text-center">
          © Easeup Limited Company, All rights reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
