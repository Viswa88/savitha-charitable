
import { Card, CardContent } from "@/components/ui/card";

const ImpactSection = () => {
  const stats = [
    { number: "500+", label: "Lives Touched", icon: "❤️" },
    { number: "10,000+", label: "Meals Served", icon: "🍽️" },
    { number: "50+", label: "Events Organized", icon: "🎉" },
    { number: "5", label: "Years of Service", icon: "⭐" },
  ];

  return (
    <section id="impact" className="py-20 charity-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-white">Our Impact</h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Every act of service creates ripples of positive change. 
            Here's how we've been making a difference together.
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="border-0 bg-white/95 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-3xl font-bold charity-text-gradient mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Card className="border-0 bg-white/95 backdrop-blur-sm shadow-xl max-w-4xl mx-auto">
            <CardContent className="p-12">
              <blockquote className="text-2xl italic text-gray-700 mb-6">
                "The best way to find yourself is to lose yourself in the service of others."
              </blockquote>
              <cite className="text-charity-warm font-semibold">- Mahatma Gandhi</cite>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;