
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Star, Phone, Globe, Heart, TrendingUp, AlertTriangle } from "lucide-react";

export const ToolsDashboard = () => {
  const therapists = [
    {
      name: "Dr. Sarah Johnson",
      specialty: "Relationship Counseling",
      rating: 4.9,
      location: "Downtown",
      phone: "(555) 123-4567",
      website: "drsarahjohnson.com",
      reason: "Specializes in communication issues and conflict resolution"
    },
    {
      name: "Dr. Michael Chen",
      specialty: "Couples Therapy",
      rating: 4.8,
      location: "Midtown",
      phone: "(555) 234-5678",
      website: "drmichaelchen.com",
      reason: "Expert in stress management and emotional regulation"
    },
    {
      name: "Dr. Emily Rodriguez",
      specialty: "Marriage & Family Therapy",
      rating: 4.7,
      location: "Uptown",
      phone: "(555) 345-6789",
      website: "dremilyrodriguez.com",
      reason: "Focuses on trust rebuilding and relationship transparency"
    }
  ];

  return (
    <section className="py-4 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-light text-gray-900 mb-6 font-playfair">
            Recommended{" "}
            <span className="italic text-gray-600 font-playfair">
              tools
            </span>
          </h2>
        </div>

        {/* AI Insights */}
        <Card className="border-gray-200 mb-6">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-lg font-normal font-playfair">
              <TrendingUp className="w-5 h-5 text-blue-600" />
              <span>AI Insights from Your Tracker Data</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 p-3 bg-orange-50 rounded-lg border border-orange-200">
                <AlertTriangle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-orange-800 font-crimson">Pattern Detected</p>
                  <p className="text-sm text-orange-700 font-crimson">
                    Both partners show increased stress levels on weekdays 15-17 and 22-25. 
                    This suggests external stressors may be affecting your relationship.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                <Heart className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-blue-800 font-crimson">Recommendation</p>
                  <p className="text-sm text-blue-700 font-crimson">
                    Based on your tracker data, we recommend focusing on communication strategies 
                    and stress management techniques with a qualified therapist.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recommended Therapists */}
        <div className="mb-6">
          <h3 className="text-xl font-light text-gray-900 mb-4 font-playfair">
            Recommended Couples Therapists
          </h3>
          <p className="text-sm text-gray-600 mb-6 font-crimson">
            Based on your tracker insights and relationship patterns
          </p>
          
          <div className="space-y-4">
            {therapists.map((therapist, index) => (
              <Card key={index} className="border-gray-200">
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="text-lg font-medium text-gray-900 font-playfair">
                        {therapist.name}
                      </h4>
                      <p className="text-sm text-gray-600 font-crimson">
                        {therapist.specialty}
                      </p>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium text-gray-700 font-crimson">
                        {therapist.rating}
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span className="font-crimson">{therapist.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Phone className="w-4 h-4" />
                      <span className="font-crimson">{therapist.phone}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Globe className="w-4 h-4" />
                      <span className="font-crimson">{therapist.website}</span>
                    </div>
                  </div>
                  
                  <div className="p-3 bg-gray-50 rounded-lg mb-4">
                    <p className="text-sm text-gray-700 font-crimson italic">
                      <strong>Why recommended:</strong> {therapist.reason}
                    </p>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button 
                      size="sm" 
                      className="bg-gray-900 hover:bg-gray-800 border-0 font-crimson"
                    >
                      Book Appointment
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="border-gray-300 hover:bg-gray-50 font-crimson"
                    >
                      View Profile
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Resources */}
        <Card className="border-gray-200">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-lg font-normal font-playfair">
              <Heart className="w-5 h-5 text-purple-600" />
              <span>Additional Resources</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                <h4 className="font-medium text-purple-900 mb-2 font-playfair">
                  Self-Help Resources
                </h4>
                <ul className="space-y-1 text-sm text-purple-800 font-crimson">
                  <li>• Communication exercises</li>
                  <li>• Conflict resolution guides</li>
                  <li>• Stress management techniques</li>
                </ul>
              </div>
              
              <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                <h4 className="font-medium text-green-900 mb-2 font-playfair">
                  Emergency Support
                </h4>
                <ul className="space-y-1 text-sm text-green-800 font-crimson">
                  <li>• Crisis hotline: 988</li>
                  <li>• Online support groups</li>
                  <li>• 24/7 chat support</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
