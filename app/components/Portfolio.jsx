
import React from "react";
import Link from "next/link";
import Image from "next/image";
import img1 from "../img/1.jpg";
import img2 from "../img/2.jpg";
import img3 from "../img/3.jpg";
import img4 from "../img/4.jpg";
import img5 from "../img/5.jpg";
import img6 from "../img/6.jpg";
import img0 from "../img/bg2.png";


function Portfolio() {
  return (
    <section className="h-[100rem] w-full bg-black">
      <div className="mx-[15rem]">
        <div className="pt-[8rem]">
          <p className="text-[30px] text-[#B84C60] uppercase ">PORTFOLIO</p>
          <h1 className="pt-1 text-[40px] font-extrabold text-white tracking-[1px]">
            Featured Works
          </h1>
        </div>

        {/* Portfolio navbar - start  */}

        <div className="mt-40">
          <ul className="flex gap-10">
            <li className="text-[20px] font-bold tracking-[1px] text-[#B84C60]">
              <Link href={"#"}>All</Link>
            </li>
            <li className="text-[20px] font-bold tracking-[1px] text-white hover:text-[#B84C60]">
              <Link href={"#"}>Design</Link>
            </li>
            <li className="text-[20px] font-bold tracking-[1px] text-white hover:text-[#B84C60]">
              <Link href={"#"}>Branding</Link>
            </li>
            <li className="text-[20px] font-bold tracking-[1px] text-white hover:text-[#B84C60]">
              <Link href={"#"}>Photography</Link>
            </li>
          </ul>
        </div>

        {/* Portfolio navbar - start  */}

        {/* Portfolio image section - strt  */}

        <div className="mt-10 grid grid-cols-3 gap-[50px]">
          <div className="mt-5">
            <Image src={img1} alt="Pic 1" className="h-[450px] w-[400px]" />
          </div>

          <div className="mt-5">
            <Image src={img2} alt="Pic 1" className="h-[450px] w-[400px]" />
          </div>

          <div className="mt-5">
            <Image src={img3} alt="Pic 1" className="h-[450px] w-[400px]" />
          </div>

          <div className="mt-5">
            <Image src={img4} alt="Pic 1" className="h-[450px] w-[400px]" />
          </div>

          <div className="mt-5">
            <Image src={img5} alt="Pic 1" className="h-[450px] w-[400px]" />
          </div>

          <div className="mt-5">
            <Image src={img6} alt="Pic 1" className="h-[450px] w-[400px]" />
          </div>
        </div>

        {/* Portfolio image section - strt  */}
        
      </div>
    </section>
  );
}

export default Portfolio;
