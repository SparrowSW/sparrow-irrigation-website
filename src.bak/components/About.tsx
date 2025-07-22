export default function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Engineering Irrigation for Egypt's Future
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Founded in 2024, Sparrow was born from a simple observation: Egyptian villa owners 
              deserved irrigation controllers designed specifically for their needs, climate, and 
              language.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Our team of Egyptian engineers combined proven irrigation technology with deep 
              understanding of local gardens, water conditions, and user preferences to create 
              controllers that just work - beautifully.
            </p>
            <p className="text-lg text-muted-foreground">
              Today, we're proud to serve thousands of Egyptian homes, with a vision to expand 
              into smart irrigation solutions while maintaining our commitment to reliability 
              and local support.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="glass-card p-6 transition-all duration-300 hover:shadow-xl">
              <h3 className="text-2xl font-bold text-foreground mb-2">Our Mission</h3>
              <p className="text-muted-foreground">
                To bring professional-grade irrigation technology to every Egyptian garden, 
                making beautiful landscapes accessible to all villa owners.
              </p>
            </div>
            
            <div className="glass-card p-6 transition-all duration-300 hover:shadow-xl">
              <h3 className="text-2xl font-bold text-foreground mb-2">Our Vision</h3>
              <p className="text-muted-foreground">
                To become Egypt's most trusted irrigation brand, expanding from traditional 
                controllers to smart, connected solutions that save water and enhance gardens.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}