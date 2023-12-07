function AboutSection() {
  return (
    <section
      id="about"
      className="w-full  lg:px-12 px-3 sm:px-6 py-12 lg:py-0   mt-[90vh] lg:mt-[100vh] -z-10 min-h-[90vh]   flex items-center  bg-background"
    >
      <div className="lg:flex container mx-auto gap-x-12 items-center justify-center h-fit">
        <div className="text-[15px] text-center lg:text-left basis-1/2 flex flex-col justify-center gap-y-6">
          <h2 className="lg:text-3xl text-2xl font-medium ">About Us</h2>
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
        <div className="lg:basis-1/2  h-[450px] lg:h-[450px] mt-8  ">
        <div className="relative bg-[url('/about.png')] bg-no-repeat bg-cover  cursor-pointer transition-all ease-in-out  w-full h-full rounded-[50px] lg:rounded-[100px] overflow-hidden ">
          </div>
        </div>
      </div>
    </section>


  );
}

export default AboutSection;
