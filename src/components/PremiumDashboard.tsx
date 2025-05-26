

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Brain, 
  Heart, 
  TrendingUp, 
  Users, 
  Star, 
  Crown, 
  UserPlus,
  Calendar,
  MessageCircle,
  Award,
  Target,
  Zap
} from "lucide-react";

export const PremiumDashboard = () => {
  const [selectedReport, setSelectedReport] = useState("emotional");

  const reports = [
    {
      id: "emotional",
      title: "Emotional Intelligence",
      icon: Brain,
      score: 85,
      trend: "+12%",
      description: "Your ability to understand and manage emotions"
    },
    {
      id: "relationship",
      title: "Relationship Dynamics",
      icon: Heart,
      score: 78,
      trend: "+8%",
      description: "How you connect and communicate with others"
    },
    {
      id: "growth",
      title: "Personal Growth",
      icon: TrendingUp,
      score: 92,
      trend: "+15%",
      description: "Your progress in self-development journey"
    }
  ];

  const insights = [
    {
      category: "Emotional Patterns",
      insight: "You show increased emotional regulation during morning hours",
      action: "Schedule important conversations before noon"
    },
    {
      category: "Communication Style",
      insight: "Your empathy scores peak when discussing personal growth topics",
      action: "Lead with personal stories to build deeper connections"
    },
    {
      category: "Stress Response",
      insight: "Journaling reduces your stress indicators by 23%",
      action: "Maintain daily journaling practice during busy periods"
    }
  ];

  return (
    <div id="premium" className="py-20 cosmic-sparkle relative overflow-hidden">
      {/* Floating shapes */}
      <div className="flow-shape"></div>
      <div className="flow-shape"></div>
      <div className="flow-shape"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center">
              <Crown className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-light cosmic-title font-playfair">
              Emotional Intelligence Reports
            </h2>
          </div>
          <p className="text-xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed font-crimson">
            Get deep insights into your emotional patterns, relationship dynamics, and personal growth journey
          </p>
        </div>

        {/* Report Selection */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {reports.map((report) => (
            <button
              key={report.id}
              onClick={() => setSelectedReport(report.id)}
              className={`flex items-center gap-3 px-6 py-3 rounded-2xl transition-all ${
                selectedReport === report.id
                  ? 'bg-purple-500/30 border-purple-400/50 text-white'
                  : 'glass-card text-white/70 hover:text-white'
              }`}
            >
              <report.icon className="w-5 h-5" />
              <span className="font-light">{report.title}</span>
            </button>
          ))}
        </div>

        {/* Selected Report Details */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Score Card */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-4 mb-6">
              {reports.find(r => r.id === selectedReport)?.icon && (
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center">
                  {React.createElement(reports.find(r => r.id === selectedReport)!.icon, { className: "w-6 h-6 text-white" })}
                </div>
              )}
              <h3 className="text-2xl font-light text-white font-playfair">
                {reports.find(r => r.id === selectedReport)?.title}
              </h3>
            </div>
            
            <div className="text-center mb-6">
              <div className="text-6xl font-light text-white mb-2">
                {reports.find(r => r.id === selectedReport)?.score}
              </div>
              <div className="text-green-400 text-sm flex items-center justify-center gap-1">
                <TrendingUp className="w-4 h-4" />
                {reports.find(r => r.id === selectedReport)?.trend} this month
              </div>
            </div>
            
            <p className="text-white/70 text-center font-light">
              {reports.find(r => r.id === selectedReport)?.description}
            </p>
          </div>

          {/* Insights */}
          <div className="glass-card p-8">
            <h3 className="text-xl font-light text-white mb-6 font-playfair">Key Insights</h3>
            <div className="space-y-4">
              {insights.map((insight, index) => (
                <div key={index} className="border-l-2 border-purple-400/30 pl-4">
                  <div className="text-purple-300 text-sm font-medium mb-1">
                    {insight.category}
                  </div>
                  <div className="text-white/80 text-sm mb-2 font-light">
                    {insight.insight}
                  </div>
                  <div className="text-green-400 text-sm font-light">
                    💡 {insight.action}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Action Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Partner Invitation */}
          <div className="glass-card p-8 text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-light text-white font-playfair">
                Couples Analysis
              </h3>
            </div>
            <p className="text-sm md:text-base text-white/80 mb-6 max-w-md mx-auto font-light leading-relaxed">
              Invite your partner to join and get shared relationship insights together
            </p>
            <div className="flex justify-center">
              <button className="cosmic-button px-12 py-2 font-light w-full max-w-xs">
                <UserPlus className="w-4 h-4 mr-2" />
                Invite Partner
              </button>
            </div>
          </div>

          {/* Upgrade Prompt */}
          <div className="glass-card p-8 text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 flex items-center justify-center">
                <Crown className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-light text-white font-playfair">
                Premium Features
              </h3>
            </div>
            <p className="text-sm md:text-base text-white/80 mb-6 max-w-md mx-auto font-light leading-relaxed">
              Upgrade to Premium to access detailed emotional reports, voice-aware AI coaching, 
              and couples' shared insights. Transform your relationship journey with data-driven growth.
            </p>
            <div className="flex justify-center">
              <button className="cosmic-button px-12 py-2 text-lg font-light w-full max-w-xs">
                <Crown className="w-5 h-5 mr-2" />
                Upgrade to Premium
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
