
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

interface HeroSectionProps {
  onScrollToSchedule: () => void;
}

const HeroSection = ({ onScrollToSchedule }: HeroSectionProps) => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 charity-gradient opacity-10"></div>
      
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="text-center lg:text-left animate-fade-in">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6">
            <span className="charity-text-gradient">Seva</span>
            <br />
            <span className="text-gray-900">Through Service</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Dedicated to serving our community through compassionate action, 
            bringing hope and positive change to those who need it most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button 
              onClick={onScrollToSchedule}
              className="charity-gradient text-white hover:opacity-90 transition-opacity text-lg px-8 py-6"
            >
              View Daily Schedule
            </Button>
            <Button 
              variant="outline" 
              className="text-charity-warm border-charity-warm hover:bg-charity-yellow-light text-lg px-8 py-6"
            >
              Learn More
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 animate-slide-in">
          <div className="space-y-4">
            <div className="rounded-2xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <img 
                src="/photos/charity.png" 
                alt="Community service - food distribution"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-300">
              <img 
                src="photos/anna-canteen.png" 
                alt="Community gathering and support"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-300">
              <div className="bg-charity-yellow-light p-6 h-32 flex items-center justify-center">
                <p className="text-charity-warm font-semibold text-center">
                  "Service to others is the rent we pay for our room here on earth."
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-4 mt-8">
            <div className="rounded-2xl overflow-hidden shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-300">
              <img 
                src="photos/press-breif.png" 
                alt="Press Brief"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-300">
              <img 
                src="photos/bc-welfare.png" 
                alt="Community meal service"
                className="w-full h-56 object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl transform -rotate-1 hover:rotate-0 transition-transform duration-300">
              <img 
                src="photos/army.png" 
                alt="Supporting military families"
                className="w-full h-40 object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-300">
              <div className="charity-gradient p-6 h-40 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-3xl font-bold mb-2">500+</div>
                  <div className="text-sm opacity-90">Lives Touched</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={onScrollToSchedule}
          className="text-charity-warm hover:bg-charity-yellow-light"
        >
          <ArrowDown className="w-5 h-5" />
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;