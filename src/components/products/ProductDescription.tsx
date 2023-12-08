import Image from "next/image";
import Heading2 from "../ui/Heading2";
function ProductDescription() {
  return (
    <section className="w-full  mt-[90vh] lg:mt-[100vh] z-20  lg:bg-gradient-to-l bg-gradient-to-bl from-[#000000]  via-[#bbcccb] to-[#d9edeb] flex items-center text-background justify-center    min-h-[70vh] h-full relative    bg-background">
      <div className="lg:flex lg:flex-row-reverse px-3 sm:px-6 lg:px-12 py-12 lg:py-0 container mx-auto gap-x-12 items-center justify-center min-h-[70vh]">
        <div className=" text-center basis-1/2 flex flex-col  justify-center  gap-y-6">
         <Heading2>Our Apps</Heading2>
          <p className="leading-6">
            Beaver offers a diverse array of services, empowering clients to
            choose from a range of skilled professionals for their specific
            needs. The app incorporates artificial intelligence (AI) to address
            customer queries and provide instant assistance, ensuring a
            user-friendly experience. Clients can track the progress of their
            bookings in real-time, from the initial request to the completion of
            the task
          </p>
          <p className="leading-6">
            <span className="block">Beaver pro:</span>
            Tailored for handymen, Beaver Pro is a specialized feature enabling
            tradespeople to accept jobs from clients seamlessly. Handymen can
            efficiently plan their schedules within the app, allowing clients to
            be informed about their availability. The platform enables handymen
            to track the progress of bookings, ensuring a tranvsparent and
            accountable service delivery process
          </p>
        </div>
        <div className="lg:basis-1/2 mt-6 h-[400px]  w-full  relative">
        <Image
             src="/earning.png"
              width={500}
              height={700}
              className=" absolute left-[50%] -translate-x-[calc(50%+25px)] lg:-translate-x-[calc(50%+110px)]  object-contain w-full h-full"
             alt="sharing transaction payments"
             />
              <Image
             src="/aiscreen.png"
              width={500}
              height={700}
              className=" absolute left-[50%] -translate-x-[calc(50%-25px)] lg:-translate-x-[50%] lg:top-0 z-10 top-9  object-contain w-full  h-full"
             alt="sharing transaction payments"
             />
               <Image
             src="/schedulescreen.png"
              width={500}
              height={700}
              className=" absolute left-[50%] -translate-x-[calc(50%-110px)] hidden lg:block top-0  object-contain w-full  h-full"
             alt="sharing transaction payments"
             />

        </div>
      </div>
    </section>
  );
}

export default ProductDescription;
