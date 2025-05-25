
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
    <section className="py-20 px-4 sm:px-6 lg:px-8 cosmic-sparkle">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-light text-white mb-6 font-playfair">
            The{" "}
            <span className="italic text-white/80 font-playfair">
              unserious stats
            </span>
            {" "}our users love
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto font-crimson italic">
            Because sometimes the best insights come from tracking how many times you cried last month 
            (and realizing your happiest days are always in summer).
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group hover:scale-105 transition-all duration-300">
              <div className="glass-card rounded-lg p-8 border border-white/20 shadow-sm hover:shadow-md">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-sm flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-light text-white mb-2 font-playfair">{stat.number}</div>
                <div className="text-lg font-normal text-white/90 mb-2 font-playfair">{stat.label}</div>
                <div className="text-sm text-white/80 font-crimson italic">{stat.description}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 glass-card rounded-lg p-8 md:p-12 border border-white/20">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-light text-white mb-4 font-playfair">
              Your emotional journey, visualized
            </h3>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto font-crimson italic">
              From tracking your seasonal mood patterns to understanding why Thursdays always hit different, 
              Audra helps you see the bigger picture of your emotional landscape.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="glass-card rounded-lg p-6 border border-white/20">
                <div className="text-2xl mb-2">😭</div>
                <div className="text-lg font-normal text-white font-playfair">Cry Counter</div>
                <div className="text-sm text-white/80 font-crimson italic">Track those emotional releases and see the patterns</div>
              </div>
              
              <div className="glass-card rounded-lg p-6 border border-white/20">
                <div className="text-2xl mb-2">☀️</div>
                <div className="text-lg font-normal text-white font-playfair">Seasonal Happiness</div>
                <div className="text-sm text-white/80 font-crimson italic">Discover when you're naturally most content</div>
              </div>
              
              <div className="glass-card rounded-lg p-6 border border-white/20">
                <div className="text-2xl mb-2">💔</div>
                <div className="text-lg font-normal text-white font-playfair">Situationship Clarity</div>
                <div className="text-sm text-white/80 font-crimson italic">Finally understand your relationship patterns</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
