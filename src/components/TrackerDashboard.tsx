
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Plus, Calendar } from "lucide-react";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";

export const TrackerDashboard = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 4, 1)); // May 2025

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

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
    
    const alyssaSpikes = [8, 15, 16, 17, 20, 25];
    const jakeSpikes = [9, 17, 18, 25];
    
    const data = [];
    for (let day = 1; day <= daysInMonth; day++) {
      const alyssa = alyssaSpikes.includes(day) ? Math.random() * 3 + 7 : Math.random() * 2 + 3;
      const jake = jakeSpikes.includes(day) ? Math.random() * 3 + 7 : Math.random() * 2 + 3;
      
      data.push({
        day: day,
        date: `${month + 1}/${day}`,
        alyssa: Math.round(alyssa * 10) / 10,
        jake: Math.round(jake * 10) / 10,
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
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[400px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                  <XAxis 
                    dataKey="day" 
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 12, fill: '#6b7280' }}
                    interval="preserveStartEnd"
                  />
                  <YAxis 
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 12, fill: '#6b7280' }}
                    domain={[0, 10]}
                  />
                  <ChartTooltip 
                    content={<ChartTooltipContent />}
                    labelFormatter={(value) => `Day ${value}`}
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

        {/* CTA Section */}
        <div className="text-center bg-gray-50 rounded-lg p-6 border border-gray-200">
          <Calendar className="w-10 h-10 text-gray-600 mx-auto mb-4" />
          <h3 className="text-xl font-light text-gray-900 mb-3 font-playfair">Track together</h3>
          <p className="text-gray-700 mb-4 font-crimson italic">
            Build stronger connections by understanding each other's patterns
          </p>
          <Button className="bg-gray-900 hover:bg-gray-800 border-0 font-crimson">
            Log Today's Activity
            <Plus className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};
