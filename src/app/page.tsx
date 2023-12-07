import AboutSection from "@/components/home/AboutSection"
import Contact from "@/components/home/Contact"
import FaqSection from "@/components/home/FaqSection"
import Footer from "@/components/ui/Footer"
import HeroSection from "@/components/home/HeroSection"
import OurAppsSection from "@/components/home/OurAppsSection"



function page() {
    return (
       <main className="w-full h-fit   bg-background ">
        <HeroSection/>  
        <AboutSection/>
        <OurAppsSection/>
        <FaqSection/>
        <Contact/>
        <Footer/>
       </main>
    )
}

export default page
