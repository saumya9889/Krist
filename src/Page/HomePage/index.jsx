import React from 'react';
import Header from '../../Components/Home/Header';
import Banner from '../../Components/Home/Banner';
import CompanyBar from '../../Components/Home/CompanyBar';
import NewArrival from '../../Components/Home/NewArrival';
import  TopSelling  from '../../Components/Home/TopSelling';
import DressCards from '../../Components/Home/DressCards';
import Testimonial from '../../Components/Home/Testimonial';


const HomePage = () => {
  return (
    <div>
      <Header />
      <Banner />
      <CompanyBar />
      <NewArrival />
      <TopSelling />
      <DressCards />
      <Testimonial />
      
    </div>
  );
};

export default HomePage;