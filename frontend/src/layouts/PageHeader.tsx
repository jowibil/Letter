import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/SyntaxRushIcon.png';
import { NavLink } from 'react-router-dom';


function PageHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const activeStyle: React.CSSProperties = {
    backgroundImage: "linear-gradient(transparent, transparent), linear-gradient(#FF4C00, #8B0000)",
    backgroundSize: "100% 3px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom",
    color: "#FF4C00",
  };


  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white border-b-2 z-[1000] relative">
      <div className="mx-auto max-w-6xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-18 items-center ">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className=''>
              <img src={logo} alt="" className='h-auto w-10'/>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:block lg:ml-10">
            <div className="flex space-x-4">
              <NavLink
                to="/explore"
                className={({ isActive }) =>
                  `rounded-md px-3 py-2 font-medium transition-all duration-500 ${isActive
                    ? "ml-auto relative underline-animate"
                    : "text-black hover:bg-gray-200 hover:text-[#FF4C00]"
                  }`
                }
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Explore
              </NavLink>

              <NavLink
                to="/problems"
                className={({ isActive }) =>
                  `rounded-md px-3 py-2 font-medium transition-all duration-500 ${isActive
                    ? "ml-auto relative underline-animate"
                    : "text-black hover:bg-gray-200 hover:text-[#FF4C00]"
                  }`
                }
                style={({isActive}) => (isActive ? activeStyle : undefined)}
              >
                Problems
              </NavLink>

              <NavLink
                to="/practice"
                className={({ isActive }) =>
                  `rounded-md px-3 py-2 font-medium transition-all duration-500 ${isActive
                    ? "ml-auto relative underline-animate"
                    : "text-black hover:bg-gray-200 hover:text-[#FF4C00]"
                  }`
                }
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Practice
              </NavLink>
            </div>
          </div>


          {/* Desktop Sign In */}
          <div className="hidden lg:block lg:ml-auto">
            <Link to="/login" className="rounded-md px-3 py-2 text-black font-medium hover:bg-gray-200 hover:text-[#FF4C00]">Sign In</Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden ml-auto">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-[#FF4C00] hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#8B0000] hover:scale-105"
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
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t absolute w-full">
            <Link
              to="/explore"
              className="block px-3 py-2 rounded-md text-base font-medium text-black hover:text-[#FF4C00] hover:bg-gray-200 transition-all duration-300"
            >
              Explore
            </Link>
            <Link
              to="/problems"
              className="block px-3 py-2 rounded-md text-base font-medium text-black hover:text-[#FF4C00] hover:bg-gray-200 transition-all duration-300"
            >
              Problems
            </Link>
            <Link
              to="/practice"
              className="block px-3 py-2 rounded-md text-base font-medium text-black hover:text-[#FF4C00] hover:bg-gray-200 transition-all duration-300"
            >
              Practice
            </Link>
            <Link
              to="/login"
              className="block px-3 py-2 rounded-md text-base font-medium text-black hover:text-[#FF4C00] hover:bg-gray-200 transition-all duration-300"
            >
              Sign In
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
export default PageHeader;
