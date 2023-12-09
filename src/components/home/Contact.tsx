"use client";
import Link from "next/link";
import { Button } from "../ui/Button";
import Input from "../ui/Input";
import { easeOut, motion } from "framer-motion";
import { useRef, useState } from "react";
import { cubicBezier } from 'framer-motion';
import emailjs from "@emailjs/browser";
import { useToast } from "../ui/use-toast";
import Heading2 from "../ui/Heading2";
function Contact() {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const eased = cubicBezier(0.65, 0, 0.35, 1)
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        "service_ro3ee9u",
        "template_t0auxky",
        formRef.current!,
        "knCjSi6d060X6nlaz"
      )
      .then(
        (result) => {
          setLoading(false);
          toast({
            title: "Email successfully sent",
            description: "We will reach out soon",
          });
          formRef.current!.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section
      id={"contact"}
      className="w-full h-screen  px-3 sm:px-6 lg:px-12 z-10 relative bg-inherit flex items-center justify-center flex-col "
    >
      <Heading2 className="text-center mb-12">Contact Us</Heading2>
      <motion.form
      initial={{y:120, scale:0.9}}
      whileInView={{y:0, scale:1}}
      transition={{type:"tween", ease:eased,delay:0.1, duration:0.75 }}
      viewport={{once:true}}
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        ref={formRef}
        className="max-w-[900px] w-[90%] mx-auto"
      >
        <div className="flex lg:flex-row flex-col gap-x-4 lg:gap-y-0 gap-y-4 justify-between">
          <Input
            name="sender_name"
            id="name"
            placeholder="Name"
            type="string"
          />
          <Input
            name="sender_email"
            id="email"
            placeholder="Email address"
            type="email"
          />
        </div>
        <textarea
          required
          name="message"
          placeholder="leave a message"
          rows={8}
          className="placeholder:text-foreground placeholder:text-base  w-full py-5 px-8 mt-4 border-[0.5px] outline-none border-[#121212] height-[150px] shadow-md resize-none"
        ></textarea>
        <div className="text-center mt-9">
          <Button size={"lg"} className="rounded-full lg:px-12">
            {loading ? "Sending..." : "Send"}
          </Button>
        </div>
      </motion.form>
      <p className="text-center w-full mt-9">
        For inquiries and services, please reach out to us at{" "}
        <span>
          <Link href="mailto:info@easeupgh.tech">info@easeupgh.tech</Link>
        </span>
      </p>
    </section>
  );
}

export default Contact;
