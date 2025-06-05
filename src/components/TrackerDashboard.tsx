
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Plus, Calendar, Target, TrendingUp, Heart } from "lucide-react";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";

export const TrackerDashboard = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 4, 1)); // May 2025

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const emotions = ["calm", "content", "happy", "excited", "stressed", "frustrated", "angry", "overwhelmed"];
  
  const getEmotionValue = (emotion: string) => {
    const emotionMap: { [key: string]: number } = {
      "calm": 1,        // baseline
      "content": 1,     // baseline
      "happy": 1,       // baseline
      "excited": 1,     // baseline
      "stressed": 4,    // negative spike
      "frustrated": 5,  // negative spike
      "angry": 6,       // negative spike
      "overwhelmed": 7  // negative spike
    };
    return emotionMap[emotion] || 1;
  };

  const getRandomEmotion = (isSpike: boolean) => {
    if (isSpike) {
      return emotions[Math.floor(Math.random() * 4) + 4]; // stressed, frustrated, angry, overwhelmed
    } else {
      return emotions[Math.floor(Math.random() * 4)]; // calm, content, happy, excited
    }
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      if (direction === 'prev') {
        newDate.setMonth(prev.getMonth() - 1);
      } else {
        newDate.setMonth(prev.getMonth() + 1);
      }
      return newDate;
    });
  };

  // Generate data for the month
  const generateMonthData = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    const alyssaSpikes = [3, 8, 12, 15, 16, 17, 20, 22, 25, 28, 30];
    const jakeSpikes = [5, 9, 13, 17, 18, 21, 23, 25, 27, 29];
    
    const data = [];
    for (let day = 1; day <= daysInMonth; day++) {
      const alyssaEmotion = getRandomEmotion(alyssaSpikes.includes(day));
      const jakeEmotion = getRandomEmotion(jakeSpikes.includes(day));
      
      data.push({
        day: day,
        date: `${month + 1}/${day}`,
        alyssa: getEmotionValue(alyssaEmotion),
        jake: getEmotionValue(jakeEmotion),
        alyssaEmotion: alyssaEmotion,
        jakeEmotion: jakeEmotion,
      });
    }
    return data;
  };

  const chartData = generateMonthData();

  const chartConfig = {
    alyssa: {
      label: "Alyssa",
      color: "#ef4444", // red-500
    },
    jake: {
      label: "Jake (Partner)",
      color: "#3b82f6", // blue-500
    },
  };

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
          <p className="font-medium mb-2">{`Day ${label}`}</p>
          {payload.map((entry: any, index: number) => (
            <div key={index} className="flex items-center space-x-2">
              <div 
                className="w-3 h-3 rounded-full" 
                style={{ backgroundColor: entry.color }}
              />
              <span className="text-sm">
                {entry.name === "alyssa" ? "Alyssa" : "Jake (Partner)"}: {" "}
                <span className="font-medium">
                  {entry.name === "alyssa" ? entry.payload.alyssaEmotion : entry.payload.jakeEmotion}
                </span>
              </span>
            </div>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <section className="py-4 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-light text-gray-900 mb-6 font-playfair">
            Couples{" "}
            <span className="italic text-gray-600 font-playfair">
              tracker
            </span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto font-crimson italic">
            Track your relationship journey together
          </p>
        </div>

        {/* Header with Month Navigation and Add Partner */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => navigateMonth('prev')}
              className="border-gray-300 hover:bg-gray-50"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            
            <div className="flex items-center space-x-2">
              <Calendar className="w-5 h-5 text-gray-600" />
              <h3 className="text-xl font-light text-gray-900 font-playfair">
                {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
              </h3>
            </div>
            
            <Button
              variant="outline"
              size="sm"
              onClick={() => navigateMonth('next')}
              className="border-gray-300 hover:bg-gray-50"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          <Button
            variant="outline"
            size="sm"
            className="border-gray-300 hover:bg-gray-50 text-gray-600 font-crimson"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Partner
          </Button>
        </div>

        {/* Chart */}
        <Card className="border-gray-200 mb-6">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-lg font-normal font-playfair">
              <span>Monthly Activity</span>
            </CardTitle>
            <p className="text-sm text-gray-600 font-crimson">Days Angry + Frustrated</p>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[400px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData} margin={{ top: 20, right: 30, left: 0, bottom: 20 }}>
                  <XAxis 
                    dataKey="day" 
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 12, fill: '#6b7280' }}
                    interval="preserveStartEnd"
                  />
                  <YAxis hide />
                  <ChartTooltip 
                    content={<CustomTooltip />}
                  />
                  <Line
                    type="monotone"
                    dataKey="alyssa"
                    stroke="var(--color-alyssa)"
                    strokeWidth={2}
                    dot={{ fill: "var(--color-alyssa)", strokeWidth: 2, r: 3 }}
                    activeDot={{ r: 5, stroke: "var(--color-alyssa)", strokeWidth: 2 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="jake"
                    stroke="var(--color-jake)"
                    strokeWidth={2}
                    dot={{ fill: "var(--color-jake)", strokeWidth: 2, r: 3 }}
                    activeDot={{ r: 5, stroke: "var(--color-jake)", strokeWidth: 2 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Legend */}
        <div className="flex items-center justify-center space-x-6 mb-6">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <span className="text-sm text-gray-700 font-crimson">Alyssa</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span className="text-sm text-gray-700 font-crimson">Jake (Partner)</span>
          </div>
        </div>

        {/* Couples Dashboard */}
        <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
          <div className="text-center mb-6">
            <Heart className="w-8 h-8 text-gray-600 mx-auto mb-3" />
            <h3 className="text-2xl font-light text-gray-900 font-playfair">Couples Dashboard</h3>
            <p className="text-gray-700 font-crimson italic">Building stronger connections together</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {/* Monthly Goals */}
            <Card className="border-gray-200">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center space-x-2 text-lg font-normal font-playfair">
                  <Target className="w-5 h-5 text-blue-600" />
                  <span>Monthly Goals</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-700 font-crimson">
                  <li className="flex items-start space-x-2">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Practice daily check-ins together</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Schedule weekly date nights</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Reduce stress-triggered arguments</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Areas of Improvement */}
            <Card className="border-gray-200">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center space-x-2 text-lg font-normal font-playfair">
                  <TrendingUp className="w-5 h-5 text-orange-600" />
                  <span>Areas of Improvement</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-700 font-crimson">
                  <li className="flex items-start space-x-2">
                    <span className="w-1.5 h-1.5 bg-orange-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Not lying about cheating / infidelity</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-1.5 h-1.5 bg-orange-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Better communication during conflicts</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-1.5 h-1.5 bg-orange-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Being open and honest about all relationships</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Areas of Growth */}
            <Card className="border-gray-200">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center space-x-2 text-lg font-normal font-playfair">
                  <Heart className="w-5 h-5 text-green-600" />
                  <span>Areas of Growth</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-700 font-crimson">
                  <li className="flex items-start space-x-2">
                    <span className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Emotional support and understanding</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Shared goal setting and planning</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Celebrating small victories together</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button className="bg-gray-900 hover:bg-gray-800 border-0 font-crimson">
              Log Today's Activity
              <Plus className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
