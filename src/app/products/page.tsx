import DownloadApp from "@/components/products/DownloadApp"
import Hero from "@/components/products/Hero"
import ProductDescription from "@/components/products/ProductDescription"
import Footer from "@/components/ui/Footer"


function page() {
    return (
        <main className="w-full h-fit    bg-background">
        <Hero/>
        <ProductDescription/>
        <DownloadApp/>
        <Footer/>
       </main>
    )
}

export default page
