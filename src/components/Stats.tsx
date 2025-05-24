
import { TrendingUp, Heart, Calendar, Users } from "lucide-react";

export const Stats = () => {
  const stats = [
    {
      icon: Heart,
      number: "87%",
      label: "Report better self-awareness",
      description: "Users gain deeper emotional insight"
    },
    {
      icon: TrendingUp,
      number: "3x",
      label: "Faster emotional processing",
      description: "Compared to traditional journaling"
    },
    {
      icon: Calendar,
      number: "28",
      label: "Days to see patterns",
      description: "Average time to notice trends"
    },
    {
      icon: Users,
      number: "10k+",
      label: "Emotional insights generated",
      description: "Helping users understand themselves"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            The{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              unserious stats
            </span>
            {" "}our users love
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Because sometimes the best insights come from tracking how many times you cried last month 
            (and realizing your happiest days are always in summer).
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group hover:scale-105 transition-all duration-300">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-purple-100 shadow-lg hover:shadow-xl">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-gray-800 mb-2">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl p-8 md:p-12 border border-purple-100">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Your emotional journey, visualized
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              From tracking your seasonal mood patterns to understanding why Thursdays always hit different, 
              Audra helps you see the bigger picture of your emotional landscape.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-purple-100">
                <div className="text-2xl mb-2">😭</div>
                <div className="text-lg font-semibold text-gray-900">Cry Counter</div>
                <div className="text-sm text-gray-600">Track those emotional releases and see the patterns</div>
              </div>
              
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-purple-100">
                <div className="text-2xl mb-2">☀️</div>
                <div className="text-lg font-semibold text-gray-900">Seasonal Happiness</div>
                <div className="text-sm text-gray-600">Discover when you're naturally most content</div>
              </div>
              
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-purple-100">
                <div className="text-2xl mb-2">💔</div>
                <div className="text-lg font-semibold text-gray-900">Situationship Clarity</div>
                <div className="text-sm text-gray-600">Finally understand your relationship patterns</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
