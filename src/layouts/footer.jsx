import React from "react";
import logo3 from '../assets';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-6">
      <div className="container mx-auto text-center">
        {/* Logo */}
        <div className="mb-4">
          <img
            src="./assets/logo3"
            alt="Logo"
            className="h-12 w-auto mx-auto"
          />
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-4">
          {/* Twitter */}
          <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer">
            <svg
              className="w-8 h-8 text-gray-500 hover:text-gray-500 transition"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M24 4.557a9.93 9.93 0 01-2.827.775A4.933 4.933 0 0023.338 3.1a9.864 9.864 0 01-3.127 1.196A4.916 4.916 0 0016.616 2c-2.724 0-4.927 2.203-4.927 4.927 0 .386.044.762.128 1.124C7.691 7.841 4.066 5.86 1.64 2.924a4.917 4.917 0 00-.666 2.476c0 1.71.87 3.217 2.188 4.099a4.906 4.906 0 01-2.228-.615v.062c0 2.388 1.699 4.382 3.946 4.835a4.902 4.902 0 01-2.224.084 4.917 4.917 0 004.59 3.417A9.864 9.864 0 010 21.54a13.94 13.94 0 007.548 2.212c9.055 0 14.01-7.504 14.01-14.01 0-.213-.004-.425-.014-.636A9.936 9.936 0 0024 4.557z" />
            </svg>
          </a>
          {/* Facebook */}
          <a href="https://facebook.com/your-profile" target="_blank" rel="noopener noreferrer">
            <svg
              className="w-8 h-8 text-gray-500 hover:text-gray-500 transition"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M22.675 0H1.325C.594 0 0 .594 0 1.326v21.348C0 23.406.594 24 1.325 24h11.49v-9.294H9.691v-3.622h3.124V8.413c0-3.1 1.894-4.787 4.66-4.787 1.325 0 2.463.099 2.794.143v3.24h-1.917c-1.505 0-1.797.715-1.797 1.763v2.311h3.593l-.468 3.622h-3.125V24h6.125C23.406 24 24 23.406 24 22.674V1.326C24 .594 23.406 0 22.675 0z" />
            </svg>
          </a>
          {/* LinkedIn */}
          <a href="https://linkedin.com/your-profile" target="_blank" rel="noopener noreferrer">
            <svg
              className="w-8 h-8 text-gray-500 hover:text-gray-500 transition"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M22.23 0H1.77C.792 0 0 .774 0 1.732v20.536C0 23.226.792 24 1.77 24h20.46c.978 0 1.77-.774 1.77-1.732V1.732C24 .774 23.208 0 22.23 0zM7.059 20.454H3.798V9h3.26v11.454zM5.429 7.653a1.884 1.884 0 110-3.769 1.884 1.884 0 010 3.769zm13.298 12.801h-3.26v-5.831c0-1.39-.03-3.179-1.94-3.179-1.943 0-2.24 1.515-2.24 3.079v5.931h-3.26V9h3.13v1.561h.045c.436-.826 1.497-1.694 3.079-1.694 3.29 0 3.895 2.166 3.895 4.985v6.602z" />
            </svg>
          </a>
          {/* YouTube */}
          <a href="https://youtube.com/your-profile" target="_blank" rel="noopener noreferrer">
            <svg
              className="w-8 h-8 text-gray-500 hover:text-gray-500 transition"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M23.499 6.186a2.954 2.954 0 00-2.078-2.087C19.347 3.504 12 3.504 12 3.504s-7.347 0-9.421.595a2.954 2.954 0 00-2.078 2.087C.001 8.261.001 12 .001 12s0 3.739.5 5.814a2.954 2.954 0 002.078 2.087c2.074.595 9.421.595 9.421.595s7.347 0 9.421-.595a2.954 2.954 0 002.078-2.087C23.999 15.739 23.999 12 23.999 12s0-3.739-.5-5.814zM9.749 15.02V8.98L15.751 12l-6.002 3.02z" />
            </svg>
          </a>
        </div>

        {/* Footer Text */}
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Tout droit reservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;


