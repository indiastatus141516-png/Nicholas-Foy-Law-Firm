import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

export default function Testimonials(){
  const testimonials = [
    { name: 'John Doe', text: 'Fast and easy process!' },
    { name: 'Jane Smith', text: 'Got my loan in 24 hours.' },
    { name: 'Bob Johnson', text: 'Great rates and support.' }
  ]

  return (
    <section id="testimonials" className="container">
      <h3 className="section-title">Testimonials</h3>
      <Swiper spaceBetween={50} slidesPerView={1}>
        {testimonials.map((t, index) => (
          <SwiperSlide key={index}>
            <div className="card">
              <p>"{t.text}"</p>
              <p>- {t.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
