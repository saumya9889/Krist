import React from 'react';
import Header from '../../Components/Home/Header';
import Banner from '../../Components/Home/Banner';
import CompanyBar from '../../Components/Home/CompanyBar';
import NewArrival from '../../Components/Home/NewArrival';


const HomePage = () => {
  return (
    <div>
      <Header />
      <Banner />
      <CompanyBar />
      <NewArrival />
     
    </div>
  );
};

export default HomePage;