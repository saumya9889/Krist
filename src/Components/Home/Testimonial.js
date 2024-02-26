import React from 'react';
import { TestimonialData } from '../../Mock/home-data';
import { TestiCard } from '../Common/testiCard';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
};

const Testimonial = () => {
  return (
    <>
      <div className='testimonial'>
        <div className='container-wrapper'>
          <section>
          <div className='text-left'>
            <h1 className='text-[32px] leading-[57.6px] mt-12 font-sans font-bold'>{TestimonialData.mainTitle}</h1>
          </div> 
            <div className='bg-[white] rounded-[20px] mb-20'>
              <div className="card-wrapper">
                <Carousel responsive={responsive} >
                  {TestimonialData.cardsData.map((item, index) => (
                    <TestiCard
                      key={index}
                      verified={item.verified}
                      name={item.name}
                      description={item.description}
                      reviews={item.reviews}
                      img={item.img}
                    />
                  ))}
                </Carousel>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Testimonial;