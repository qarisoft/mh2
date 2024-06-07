import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import { EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
export function EmblaCarousel() {
//   const [emblaRef] = useEmblaCarousel()
  return (    
    <Swiper modules={[EffectFade]} effect="fade">
      {[
        "/image/img1.jpg",
        "/image/img2.jpg",      
        "/image/img3.jpg",      
        "/image/img4.jpg",      
        ].map((i, el) => {
        return <SwiperSlide>Slide {el}</SwiperSlide>;
      })}
    </Swiper>
  )
}