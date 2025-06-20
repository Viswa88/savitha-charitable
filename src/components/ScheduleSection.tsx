
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, MapPin, Users } from "lucide-react";

const ScheduleSection = () => {
  const scheduleItems = [
    {
      time: "6:00 AM - 7:00 AM",
      title: "Morning Meditation",
      description: "Start your day with peaceful meditation and mindfulness practice",
      location: "Community Center",
      participants: "Open to all",
      icon: "🧘",
      color: "bg-blue-50 border-blue-200"
    },
    {
      time: "8:00 AM - 10:00 AM",
      title: "Community Breakfast",
      description: "Free nutritious breakfast for everyone in need",
      location: "Main Hall",
      participants: "100+ served daily",
      icon: "🍽️",
      color: "bg-green-50 border-green-200"
    },
    {
      time: "11:00 AM - 2:00 PM",
      title: "Food Distribution",
      description: "Fresh groceries and meals distributed to families",
      location: "Distribution Center",
      participants: "50+ families",
      icon: "🛒",
      color: "bg-orange-50 border-orange-200"
    },
    {
      time: "3:00 PM - 5:00 PM",
      title: "Wellness Programs",
      description: "Yoga, health checkups, and wellness consultations",
      location: "Wellness Center",
      participants: "20-30 people",
      icon: "💪",
      color: "bg-purple-50 border-purple-200"
    },
    {
      time: "6:00 PM - 8:00 PM",
      title: "Community Dinner",
      description: "Shared evening meal bringing the community together",
      location: "Main Hall",
      participants: "80+ served daily",
      icon: "🍛",
      color: "bg-red-50 border-red-200"
    }
  ];

  return (
    <section id="schedule" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            <span className="charity-text-gradient">Daily Schedule</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every day brings new opportunities to serve. Join us in our daily activities 
            and be part of creating positive change in our community.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-6">
          {scheduleItems.map((item, index) => (
            <Card key={index} className={`border-2 ${item.color} hover:shadow-lg transition-shadow duration-300`}>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex items-center gap-4 md:w-1/3">
                    <div className="text-3xl">{item.icon}</div>
                    <div>
                      <Badge variant="secondary" className="mb-2">
                        {item.time}
                      </Badge>
                      <h3 className="text-xl font-semibold text-charity-warm">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                  
                  <div className="md:w-2/3">
                    <p className="text-gray-600 mb-3">{item.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{item.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>{item.participants}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Card className="border-0 bg-charity-yellow-light shadow-lg max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold charity-text-gradient mb-4">
                Want to Get Involved?
              </h3>
              <p className="text-gray-700 mb-4">
                Join us for any of these activities! No prior experience needed - 
                just bring your heart and willingness to serve.
              </p>
              <div className="flex items-center justify-center gap-2 text-charity-warm">
                <Clock className="w-5 h-5" />
                <span className="font-medium">Open daily • All are welcome</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;