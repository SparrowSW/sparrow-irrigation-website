import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section id="home" className="pt-16 aurora-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8 text-left">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight drop-shadow-sm">
                Professional Irrigation Control,
                <span className="text-primary"> Egyptian Engineered</span>
              </h1>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                Reliable irrigation solutions, meticulously built for the unique challenges 
                and beauty of Egyptian gardens. Experience effortless control and lasting durability.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200">
                Pre-Order Now
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 transition-colors duration-200">
                Learn More
              </Button>
            </div>

            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                <span>Made in Egypt</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                <span>2-Year Warranty</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                <span>Free Installation</span>
              </div>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="glass-card rounded-2xl p-8 h-96 w-full flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-white/50 rounded-lg mx-auto mb-4"></div>
                <p className="text-muted-foreground">Irrigation Controller Image Placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}