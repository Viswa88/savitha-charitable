import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowDown } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import Navigation from "@/components/Navigation";
import ScheduleSection from "@/components/ScheduleSection";
import AboutSection from "@/components/AboutSection";
import ImpactSection from "@/components/ImpactSection";

const Index = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSchedule = () => {
    document.getElementById('schedule')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-charity-yellow-light via-white to-charity-yellow-light">
      <Navigation isScrolled={isScrolled} />
      
      <main>
        <HeroSection onScrollToSchedule={scrollToSchedule} />
        <AboutSection />
        <ImpactSection />
        <ScheduleSection />
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-12 bg-charity-yellow rounded-full flex items-center justify-center mr-3">
              <span className="text-2xl font-bold text-gray-900">S</span>
            </div>
            <span className="text-xl font-semibold">Savitha</span>
          </div>
          <p className="text-gray-400 mb-4">
            Dedicated to serving the community and creating positive change
          </p>
          <p className="text-sm text-gray-500">
            © 2024 Savitha. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
