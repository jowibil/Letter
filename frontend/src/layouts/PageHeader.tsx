import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/SyntaxRushIcon.png';


export function PageHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white border-b-2">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-18 items-center ">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className=''>
              <img src={logo} alt="" className='h-auto w-10'/>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:block lg:ml-10">
            <div className="flex space-x-4">
              <a href="#" className="rounded-md px-3 py-2 text-black font-medium hover:bg-gray-200 hover:text-blue-500 transition-all duration-300">Explore</a>
              <a href="#" className="rounded-md px-3 py-2 text-black font-medium hover:bg-gray-200 hover:text-blue-500 transition-all duration-300">Problems</a>
              <a href="#" className="rounded-md px-3 py-2 text-black font-medium hover:bg-gray-200 hover:text-blue-500 transition-all duration-300">Practice</a>
            </div>
          </div>

          {/* Desktop Sign In */}
          <div className="hidden lg:block lg:ml-auto">
            <Link to="/login" className="rounded-md px-3 py-2 text-black font-medium hover:bg-gray-200 hover:text-blue-500">Sign In</Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden ml-auto">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-blue-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 hover:scale-105"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-black hover:text-blue-700 hover:bg-gray-200 transition-all duration-300"
            >
              Explore
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-black hover:text-blue-700 hover:bg-gray-200 transition-all duration-300"
            >
              Problems
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-black hover:text-blue-700 hover:bg-gray-200 transition-all duration-300"
            >
              Practice
            </a>
            <Link
              to="/login"
              className="block px-3 py-2 rounded-md text-base font-medium text-black hover:text-blue-700 hover:bg-gray-200 transition-all duration-300"
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
