import Link from "next/link";
import Button from "../ui/Button";
import Input from "../ui/Input";

function Contact() {
  return (
    <section id={"contact"} className="w-full h-screen z-0 flex items-center justify-center flex-col ">
      <h2 className="lg:text-3xl text-center mb-12">Contact Us</h2>
      <form className="max-w-[900px] w-[90%] mx-auto">
        <div className="flex gap-x-4 justify-between">
          <Input name="name" id="name" placeholder="Name" type="string"/>
          <Input name="email" id="email" placeholder="Email address" type="email"/>
        </div>
        <textarea placeholder="leave a message" rows={8} className="placeholder:text-foreground placeholder:text-base  w-full py-5 px-8 mt-4 border-[0.5px] outline-none border-[#121212] height-[150px] shadow-md resize-none"></textarea>
<div className="text-center mt-9">
<Button name="Send"/>
</div>
      </form>
      <p className="text-center w-full mt-9">For inquiries and services, please reach out to us at <span><Link href="mailto:info@easeupgh.tech">info@easeupgh.tech</Link></span></p>
    </section>
  );
}

export default Contact;
