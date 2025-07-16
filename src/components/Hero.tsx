import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section id="home" className="pt-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Professional Irrigation Control,
                <span className="text-blue-600"> Egyptian Engineered</span>
              </h1>
              <p className="mt-6 text-xl text-gray-600 leading-relaxed">
                Designed specifically for Egyptian villas and gardens, Sparrow controllers 
                combine traditional reliability with modern features like Arabic language 
                support and seasonal adjustment.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Pre-Order Now
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>

            <div className="flex items-center space-x-6 text-sm text-gray-600">
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

          <div className="relative">
            <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-300 rounded-lg mx-auto mb-4"></div>
                <p className="text-gray-500">Irrigation Controller</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}