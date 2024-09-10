import React, { ReactNode, useEffect, useState } from "react";
import Navbar from "./navbar";
import Footer from "./footer";


const Layout/*: React.FC<LayoutProps> */= ({ children }) => {
    /*
      layout settings
      */   
  
    return (
        <div className="flex flex-col min-h-screen">
        {/* Navbar */}
            <Navbar />
    
            {/* Page content */}
            <main className="flex-grow">
                {children}
            </main>
    
            {/* Footer */}
            <Footer />
      </div>
    );
  };
  
  export default Layout;