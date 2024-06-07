"use client";

// import { Link } from "@nextui-org/link";
// import { Snippet } from "@nextui-org/snippet";
// import { Code } from "@nextui-org/code";
// import { button as buttonStyles } from "@nextui-org/theme";
// import { siteConfig } from "@/config/site";
// import { title, subtitle } from "@/components/primitives";
// import { GithubIcon } from "@/components/icons";
// import { SlideItem } from "@/components/item";
// import { ThumItem } from "@/components/thum_item";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
// import { useSwiper } from "swiper/react";
// import useEmblaCarousel from 'embla-carousel-react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
// import 'swiper/css/autoplay';
import 'animate.css';
export default function Home() {

  const images = [
    "/image/img1.jpg",
    "/image/img2.jpg",
    "/image/img3.jpg",
    "/image/img4.jpg",
  ]
  const [activeImage, setActiveImage] = useState(0)
  let a = 0

  let aa = 0
  useEffect(() => {
    let aa = setTimeout(() => {
      setActiveImage(activeImage > 2 ? 0 : activeImage + 1)
    }, 6000)
    a++
    return () => {
    }

  }, [activeImage])

  return (
    <div className="relative h-full ">
              {
                  images.map((img,index)=>(
                      <div 
                      className={`h-full absolute top-0 left-0 w-screen bg-repeat-round slide
                                  z-11 ${activeImage==index?'active':'inactive'}
                                    `}
                      style={{ backgroundImage: `url(${img})` }}
                      key={index}>
                      </div>
                  ))
              }
              

      <div className="absolute top-0 left-0 right-[50%] h-10 w-100 bg-red-700  z-10">dsadsdfs</div>
    </div>
  );
}


interface ItemProps {
  img: string
}
function Item({ img }: ItemProps) {
  return (

    <div className="slide   h-full w-[100vw] bg-repeat-round text-white flex flex-col justify-center relative"

      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="absolute w-full bg-slate-500 h-full opacity-25 z-0"></div>
      <div className="content md:ps-10 lg:ps-48 ">

        <div className="author">LUNDEV</div>
        <div className="title">DESIGN SLIDER</div>
        <div className="topic">ANIMAL</div>
        <div className="des max-w-3xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt
          minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda
          facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi
          reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum
          laudantium?
        </div>
        <div className="buttons">
          <button>SEE MORE</button>
          <button>SUBSCRIBE</button>
        </div>
      </div>
    </div>
  )
}


{/* <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}>Make&nbsp;</h1>
        <h1 className={title({ color: "violet" })}>beautiful&nbsp;</h1>
        <br />
        <h1 className={title()}>
          websites regardless of your design experience.
        </h1>
        <h2 className={subtitle({ class: "mt-4" })}>
          Beautiful, fast and modern React UI library.
        </h2>
      </div>

      <div className="flex gap-3">
        <Link
          isExternal
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href={siteConfig.links.docs}
        >
          Documentation
        </Link>
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.github}
        >
          <GithubIcon size={20} />
          GitHub
        </Link>
      </div>

      <div className="mt-8">
        <Snippet hideCopyButton hideSymbol variant="flat">
          <span>
            Get started by editing <Code color="primary">app/page.tsx</Code>
          </span>
        </Snippet>
      </div> */
}


//                   <div className="item">
{/* <img src="/image/img2.jpg"/>
<div className="content">
    <div className="author">LUNDEV</div>
    <div className="title">DESIGN SLIDER</div>
    <div className="topic">ANIMAL</div>
    <div className="des">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt
        minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda
        facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi
        reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum
        laudantium?
    </div>
    <div className="buttons">
        <button>SEE MORE</button>
        <button>SUBSCRIBE</button>
    </div>
</div>
</div>
<div className="item">
<img src="/image/img3.jpg"/>
<div className="content">
    <div className="author">LUNDEV</div>
    <div className="title">DESIGN SLIDER</div>
    <div className="topic">ANIMAL</div>
    <div className="des">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt
        minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda
        facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi
        reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum
        laudantium?
    </div>
    <div className="buttons">
        <button>SEE MORE</button>
        <button>SUBSCRIBE</button>
    </div>
</div>
</div>
<div className="item">
<img src="/image/img4.jpg"/>
<div className="content">
    <div className="author">LUNDEV</div>
    <div className="title">DESIGN SLIDER</div>
    <div className="topic">ANIMAL</div>
    <div className="des">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt
        minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda
        facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi
        reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum
        laudantium?
    </div>
    <div className="buttons">
        <button>SEE MORE</button>
        <button>SUBSCRIBE</button>
    </div>
</div>
</div> */}