import Image from "next/image"

function Loading() {
    return (
       

 <section className="w-full flex flex-col items-center justify-center h-screen absolute top-0 bg-background ">
<div className="relative w-[120px] h-[34px]">
    <Image
          layout="fill"
          className=""
          src={"/logo.png"}
          alt="Easp up logo"
        />
        </div>
        <div className="w-[200px] overflow-x-hidden mt-3 h-[5px] rounded-full bg-[#fff]">
            <div className="w-[70%] animate-loader h-full bg-foreground">

            </div>
        </div>
 </section>
      
    )
}

export default Loading

