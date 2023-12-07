import Image from "next/image";
import DropDown from "../ui/DropDown";
import { faqData } from "@/contents/faq";
function FaqSection() {
  return (
    <section className="w-full  lg:px-12 px-3 sm:px-6  min-h-[90vh]  z-0  flex items-center justify-center">
      <div className="container mx-auto gap-x-12 lg:px-12 lg:flex items-center justify-center h-[80%] ">
        <div className="basis-2/5 text-center lg:text-left">
          <h2 className="lg:text-3xl text-2xl mb-6 font-medium ">Frequently asked questions</h2>
          <p className="leading-7">
            Weve compiled a list of commonly asked questions to provide you with
            quick and easy access to the information you need. Were always
            expanding our FAQ section, so if you dont find the answer to your
            question here, please feel free to contact us
          </p>
        </div>
        <div className="basis-3/5 mt-8 lg:mt-0">
          <div className="text-[15px] ">
            {faqData.map((faq, id) => (
              <DropDown question={faq.question} answer={faq.answer} key={id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FaqSection;
