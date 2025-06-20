import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Grid, List } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

const Gallery = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'masonry'>('grid');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const galleryImages = [
    {
      id: 1,
      src: "photos/charity.png",
      alt: "Community service - food distribution",
      category: "community",
      title: "Food Distribution Drive",
      description: "Providing nutritious meals to families in need"
    },
    {
      id: 2,
      src: "photos/bc-welfare.png",
      alt: "Community gathering and support",
      category: "events",
      title: "Community Gathering",
      description: "Bringing people together for support and connection"
    },
    {
      id: 3,
      src: "photos/press-breif.png",
      alt: "Yoga and wellness program",
      category: "wellness",
      title: "Wellness Program",
      description: "Promoting health and mindfulness in our community"
    },
    {
      id: 4,
      src: "photos/anna-canteen.png",
      alt: "Community meal service",
      category: "community",
      title: "Community Kitchen",
      description: "Serving warm meals with love and compassion"
    },
    {
      id: 5,
      src: "photos/army.png",
      alt: "Supporting military families",
      category: "support",
      title: "Military Family Support",
      description: "Honoring and supporting our military families"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'community', name: 'Community Service' },
    { id: 'events', name: 'Events' },
    { id: 'wellness', name: 'Wellness' },
    { id: 'support', name: 'Support Programs' }
  ];

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-charity-yellow-light to-white">
      <Navigation isScrolled={true} />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <Link to="/" className="inline-flex items-center text-charity-warm hover:text-charity-yellow mb-6 transition-colors">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </Link>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="charity-text-gradient">Our</span>
              <br />
              <span className="text-gray-900">Gallery</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Capturing moments of service, compassion, and community impact through our charitable work
            </p>
          </div>

          {/* Controls */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className={selectedCategory === category.id 
                    ? "charity-gradient text-white" 
                    : "border-charity-warm text-charity-warm hover:bg-charity-yellow-light"
                  }
                >
                  {category.name}
                </Button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="flex gap-2">
              <Button
                variant={viewMode === 'grid' ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode('grid')}
                className={viewMode === 'grid' 
                  ? "charity-gradient text-white" 
                  : "border-charity-warm text-charity-warm hover:bg-charity-yellow-light"
                }
              >
                <Grid className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === 'masonry' ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode('masonry')}
                className={viewMode === 'masonry' 
                  ? "charity-gradient text-white" 
                  : "border-charity-warm text-charity-warm hover:bg-charity-yellow-light"
                }
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Gallery Grid */}
          <div className={`
            ${viewMode === 'grid' 
              ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' 
              : 'columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8'
            }
          `}>
            {filteredImages.map((image, index) => (
              <Card 
                key={image.id} 
                className={`
                  group overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 
                  ${viewMode === 'masonry' ? 'break-inside-avoid mb-8' : ''}
                  animate-fade-in
                `}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-lg font-semibold mb-2">{image.title}</h3>
                    <p className="text-sm opacity-90">{image.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-16 bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold charity-text-gradient mb-2">500+</div>
                <div className="text-gray-600">Lives Touched</div>
              </div>
              <div>
                <div className="text-3xl font-bold charity-text-gradient mb-2">50+</div>
                <div className="text-gray-600">Events Hosted</div>
              </div>
              <div>
                <div className="text-3xl font-bold charity-text-gradient mb-2">25+</div>
                <div className="text-gray-600">Programs Running</div>
              </div>
              <div>
                <div className="text-3xl font-bold charity-text-gradient mb-2">5</div>
                <div className="text-gray-600">Years of Service</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
