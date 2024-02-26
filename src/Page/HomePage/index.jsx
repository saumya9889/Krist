import React from 'react';
import Header from '../../Components/Home/Header';
import Banner from '../../Components/Home/Banner';
import CompanyBar from '../../Components/Home/CompanyBar';
import NewArrival from '../../Components/Home/NewArrival';
import  TopSelling  from '../../Components/Home/TopSelling';
import DressCards from '../../Components/Home/DressCards';
import Testimonial from '../../Components/Home/Testimonial';
import AboutOffers from '../../Components/Home/aboutOffers';
import Footer from '../../Components/Home/Footer';
import FooterCard from '../../Components/Home/footerCard';


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
      <AboutOffers />
      <Footer />    
      <FooterCard />  
    </div>
  );
};

export default HomePage;