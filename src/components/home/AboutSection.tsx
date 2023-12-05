function AboutSection() {
  return (
    <section
      id="about"
      className="w-full   mt-[100vh] -z-10 h-[90vh]   flex items-center  bg-background"
    >
            <div className="flex container mx-auto gap-x-12 items-center justify-center h-[60%]">
        <div className="font-medium basis-1/2 flex flex-col justify-center gap-y-6">
          <h2 className="lg:text-3xl">About Us</h2>
          <p>
            EaseUp is committed to bridging the gap between clients seeking
            reliable home services and skilled handymen looking for
            opportunities.
          </p>
          <p>
            Our mobile app, with its user-friendly interface and advanced
            features, exemplifies our dedication to making the entire process
            hassle-free and transparent.
          </p>
          <p>
            Whether youre a client in need of home improvement services or a
            skilled tradesperson seeking opportunities, EaseUp and the Beaver
            mobile app are here to simplify your experience.
          </p>
        </div>
        <div className="basis-1/2 h-full">
        <div className="relative bg-[url('/about.png')] bg-no-repeat bg-cover  cursor-pointer transition-all ease-in-out  w-full h-full rounded-[100px] overflow-hidden ">
          </div>
        </div>
      </div>

    </section>


  );
}

export default AboutSection;
