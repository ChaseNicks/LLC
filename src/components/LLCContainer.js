import React, { useState } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';
// import NavBar from './NavBar';

const PortfolioContainer = () => {
  const [currentPage, setCurrentPage] = useState("Home");
  
  const handlePageChange = page => {
    setCurrentPage(page);
  };

  const renderPage = () => {
      if (currentPage === "Home") {
        return <Home handlePageChange={handlePageChange} />;
      }
      if (currentPage === "About") {
        return <About handlePageChange={handlePageChange} />;
      }
      if (currentPage === "Work") {
        return <Work />;
      }
      return <Contact />;
  };
    
    return (
      <>
        <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />

          {renderPage()}
      </>
    );
};

export default PortfolioContainer;