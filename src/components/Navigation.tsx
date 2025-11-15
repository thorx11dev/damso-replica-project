import { Button } from "@/components/ui/button";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="bg-primary text-primary-foreground px-3 py-1 text-sm font-bold tracking-tight">
          DAMSO.COM
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <Button 
          variant="outline" 
          size="sm"
          className="border-border hover:bg-accent transition-all duration-300"
        >
          TOURNÉE
        </Button>
        <Button 
          variant="outline" 
          size="sm"
          className="border-border hover:bg-accent transition-all duration-300"
        >
          TOURNÉE
        </Button>
      </div>
    </nav>
  );
};
