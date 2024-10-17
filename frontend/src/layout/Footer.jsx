import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="fixed bottom-0 w-full bg-gray-900 shadow-md z-50">
      <div className="max-w-7xl py-2 mx-auto flex justify-between items-center">
      <div className="max-w-7xl mx-auto text-center">
        <div className="text-sm text-white">
          &copy; {currentYear} Patrycja Bochnak. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
