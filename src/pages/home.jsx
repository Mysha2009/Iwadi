import React from 'react';
import Layout from "../layouts/index";
import Hero from "../components/hero";
import Pic_desc from "../components/pic_desc";
import Stat from "../components/stat";
import Pic_desc1 from '../components/pic_desc1';
import { Link } from 'react-router-dom';


const HomePage = () => {
  return (
    <Layout>
        <Hero />
        <Pic_desc />
        <Pic_desc1 />
        <Stat />
        
    </Layout>
  );
};


export default HomePage;
