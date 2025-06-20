
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            <span className="charity-text-gradient">About Our Mission</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Rooted in the ancient Sanskrit principle of "Seva" - selfless service - 
            our foundation is committed to creating lasting positive impact in our community.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 charity-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🍽️</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-charity-warm">Food Distribution</h3>
              <p className="text-gray-600">
                Regular meal programs ensuring no one in our community goes hungry, 
                with fresh, nutritious food distributed with love and dignity.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 charity-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🧘</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-charity-warm">Wellness Programs</h3>
              <p className="text-gray-600">
                Holistic wellness initiatives including yoga, meditation, and health awareness 
                programs for physical and mental well-being.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 charity-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-charity-warm">Community Outreach</h3>
              <p className="text-gray-600">
                Building bridges within our community through cultural programs, 
                festivals, and collaborative initiatives that bring people together.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;