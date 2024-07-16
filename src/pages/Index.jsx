import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Plus, RefreshCw } from "lucide-react";

const Index = () => {
  const [waterCount, setWaterCount] = useState(0);

  useEffect(() => {
    const storedCount = localStorage.getItem('waterCount');
    if (storedCount) {
      setWaterCount(parseInt(storedCount, 10));
    }
  }, []);

  const addWater = () => {
    const newCount = waterCount + 1;
    setWaterCount(newCount);
    localStorage.setItem('waterCount', newCount.toString());
  };

  const resetWater = () => {
    setWaterCount(0);
    localStorage.setItem('waterCount', '0');
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow flex flex-col items-center justify-center p-4">
        <h1 className="text-3xl font-bold mb-8">Water Tracker</h1>
        <div className="text-center">
          <p className="text-xl mb-2">Glasses of water today:</p>
          <p className="text-6xl font-bold mb-8">{waterCount}</p>
          <div className="flex space-x-4">
            <Button onClick={addWater} className="text-lg">
              <Plus className="mr-2 h-5 w-5" /> Add Water
            </Button>
            <Button onClick={resetWater} variant="outline" className="text-lg">
              <RefreshCw className="mr-2 h-5 w-5" /> Reset
            </Button>
          </div>
        </div>
      </main>
      <footer className="bg-muted py-4 text-center">
        <p className="text-sm text-muted-foreground">
          Stay hydrated for a healthier you!
        </p>
      </footer>
    </div>
  );
};

export default Index;