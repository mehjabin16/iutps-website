import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const LayoutDefault = ({ children }) => (
  <>
    
    <Header />
    <div className="site-content">
      {children}
    </div>
    <Footer />
    
  </>
);

export default LayoutDefault;  