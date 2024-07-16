import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";

const WeeklySummary = () => {
  const [weeklySummary, setWeeklySummary] = useState([]);

  useEffect(() => {
    // In a real app, this would fetch data from a backend or local storage
    const mockData = [
      { day: "Monday", glasses: 6 },
      { day: "Tuesday", glasses: 8 },
      { day: "Wednesday", glasses: 5 },
      { day: "Thursday", glasses: 7 },
      { day: "Friday", glasses: 6 },
      { day: "Saturday", glasses: 4 },
      { day: "Sunday", glasses: 5 },
    ];
    setWeeklySummary(mockData);
  }, []);

  const resetWeeklySummary = () => {
    // In a real app, this would clear the actual data
    setWeeklySummary(weeklySummary.map(day => ({ ...day, glasses: 0 })));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Weekly Water Consumption Summary</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-6">
        {weeklySummary.map((day) => (
          <Card key={day.day}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{day.day}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{day.glasses} glasses</div>
            </CardContent>
          </Card>
        ))}
      </div>
      <Button onClick={resetWeeklySummary} variant="outline" className="w-full">
        <RefreshCw className="mr-2 h-4 w-4" /> Reset Weekly Data
      </Button>
    </div>
  );
};

export default WeeklySummary;