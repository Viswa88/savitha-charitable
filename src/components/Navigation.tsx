import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

interface NavigationProps {
  isScrolled: boolean;
}

const Navigation = ({ isScrolled }: NavigationProps) => {
  const location = useLocation();
  
  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      return;
    }
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <div className="w-10 h-10 bg-charity-yellow rounded-full flex items-center justify-center mr-3">
              <span className="text-xl font-bold text-gray-900">S</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Savitha</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {location.pathname === '/' ? (
              <>
                <button 
                  onClick={() => scrollToSection('hero')}
                  className="text-gray-700 hover:text-charity-warm transition-colors duration-200"
                >
                  Home
                </button>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-gray-700 hover:text-charity-warm transition-colors duration-200"
                >
                  About
                </button>
                <button 
                  onClick={() => scrollToSection('impact')}
                  className="text-gray-700 hover:text-charity-warm transition-colors duration-200"
                >
                  Impact
                </button>
                <button 
                  onClick={() => scrollToSection('schedule')}
                  className="text-gray-700 hover:text-charity-warm transition-colors duration-200"
                >
                  Schedule
                </button>
              </>
            ) : (
              <>
                <Link 
                  to="/"
                  className="text-gray-700 hover:text-charity-warm transition-colors duration-200"
                >
                  Home
                </Link>
                <Link 
                  to="/#about"
                  className="text-gray-700 hover:text-charity-warm transition-colors duration-200"
                >
                  About
                </Link>
                <Link 
                  to="/#impact"
                  className="text-gray-700 hover:text-charity-warm transition-colors duration-200"
                >
                  Impact
                </Link>
                <Link 
                  to="/#schedule"
                  className="text-gray-700 hover:text-charity-warm transition-colors duration-200"
                >
                  Schedule
                </Link>
              </>
            )}
            <Link 
              to="/gallery"
              className="text-gray-700 hover:text-charity-warm transition-colors duration-200"
            >
              Gallery
            </Link>
            <Button className="charity-gradient text-white hover:opacity-90 transition-opacity">
              Get Involved
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
