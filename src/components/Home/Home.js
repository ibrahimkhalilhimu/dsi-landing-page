import React from 'react';
import Banner from '../Banner/Banner';
import Contract from '../Contract/Contract';
import Footer from '../Footer/Footer';
import Middle from '../Middle/Middle';
import Header from '../NavBar/Header';
import Product from '../Product/Product';

const Home = () => {
    return (
        <div>
           <Header/> 
           <Banner/>
           <Middle/>
           <Product/>
           <Contract/>
           <Footer/>
        </div>
    );
};

export default Home;